import { StyleSheet, Text, View,Pressable } from 'react-native'
import React,{memo,useState} from 'react'
import { colors, sizes } from '../constants'
import FastImage from 'react-native-fast-image'
import AntDesign from "react-native-vector-icons/AntDesign"
import { Svg,Path,Circle } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'
import Animated from 'react-native-reanimated'
import { useDispatch,useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
const SingleProductList = ({datas={}}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favourites = useSelector(state=>state.auth.favourites);
  const theme = useSelector(state=>state.auth.theme);
  const favouritesList = useSelector(state=>state.auth.favouritesList);
  const [loved,setLoved] = useState(false);
  const toggleFavorite = (value) => {
    const index = favourites.indexOf(value.id);
    let updatedFavorites = [...favourites];
    let updatedFavoritesList = [...favouritesList];
    if (index === -1) {
      updatedFavorites.push(value.id);
      updatedFavoritesList.push(value);
    } else {
        updatedFavorites = updatedFavorites.filter(item => item !== value.id);
        updatedFavoritesList.splice(index, 1);
    }
    dispatch({type: 'UPDATE_FAVOURITES',favourites:updatedFavorites});
    dispatch({type: 'UPDATE_FAVOURITES_LIST',favouritesList:updatedFavoritesList});
    AsyncStorage.setItem("favourites",JSON.stringify(updatedFavorites));
    AsyncStorage.setItem("favouritesList",JSON.stringify(updatedFavoritesList));
    console.log(updatedFavorites);
    console.log(updatedFavoritesList);
  }
  return (
    <Pressable
    onPress={()=>{
        navigation.navigate('ProductDetails',{productId:datas.id,details:datas});
    }}
    style={[styles.productCard,{backgroundColor:theme === 'dark'?'#adadad':colors.lightModeBg},{padding:0}]}>
      <FastImage
      source={{uri:datas.images[0].src}}
      style={styles.cardImage}
      resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.topContents}>
        <View style={[styles.badge,{height:20}]}>
        </View>
        <Pressable
        style={{padding:5,margin:3,borderRadius:10,backgroundColor:'rgba(222, 12, 119, 0.15)'}}
        onPress={()=>toggleFavorite(datas)}
        >
        {favourites.includes(datas.id)?<AntDesign name={'heart'} size={10} color="#691883" />:<AntDesign name={'hearto'} size={10} color="#691883" />}
        </Pressable>
    </View>
      <Text style={styles.productName}>{datas.name.slice(0,25)}...</Text>
      <View style={[styles.brand,{backgroundColor:'rgba(105, 24, 131, 0.20)'}]}><Text style={[styles.brandText,{color:'#691883'}]}>FREE SHIPPING</Text></View>
      <View style={styles.priceSection}>
        <View style={styles.valuePrice}>
            <Text style={styles.discountedPrice}>৳ <Text style={{color:'#691883',fontWeight:"bold",fontSize:20}}>{datas.sale_price}</Text></Text>
        </View>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      {datas.brands.length>0?<Text style={{fontSize:8,color:'#691883'}}>{datas.brands[0].name.slice(0,10)}</Text>:null}
      <View style={{paddingHorizontal:10,paddingVertical:3,backgroundColor:'#691883',borderRadius:10,flexDirection:'row',marginLeft:10}}>
      <AntDesign name="star" size={12} color={'#fff'} />
      <Text style={{color:'#fff',fontSize:10,marginLeft:6}}>{Math.floor(parseInt(datas.average_rating))}</Text>
      </View>      
      </View>
    </Pressable>
  )
}

export default memo(SingleProductList)

const styles = StyleSheet.create({
    productCard:{
        width:sizes.width/3.1-10,
        margin:5,
        elevation:2,
        height:230,
        borderRadius:5,
    },
    cardImage:{
        height:120,
        width:sizes.width/3.1-10,
        marginTop:0
    },
    brandText:{
        color:'#fff',
        fontSize:8
    },
    brand:{
        padding:3,
        backgroundColor:'#DE0C77',
        margin:2,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        paddingLeft:10,
        paddingRight:10
    },
    productName:{
        fontSize:11,
        alignSelf:'center',
        textAlign:'center',
        lineHeight:12,
        color:'#303733',
        marginTop:10
    },
    originalPrice:{
        textDecorationLine: 'line-through',
        color:'#D71313',
        fontSize:9,
        marginRight:4,
        marginTop:3
    },
    ratingText:{
        color:'#D71313',
        fontSize:12,
        marginRight:4,
    },
    discountedPrice:{
        color:'#303733',
        fontSize:12
    },
    priceSection:{alignItems:'center',
        justifyContent:'space-between',
    },
    valuePrice:{
        flexDirection:'row',
    },
    buttonSection:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-between'
    },
    buyNowText:{
        fontSize:14,
        color:'white',
        alignSelf:'center'
    },
    buyNowButton:{
        paddingLeft:16,
        paddingRight:16,
        paddingTop:3,
        paddingBottom:3,
        backgroundColor:'#691883',
        borderRadius:5
    },
    badgeFont:{
        color:'white',
        fontSize:10,
        alignSelf:'center'
    },
    badge:{
        paddingLeft:16,
        paddingRight:16,
        paddingTop:3,
        paddingBottom:3,
        borderRadius:10
    },
    topContents:{
        flexDirection:'row',
        justifyContent:'space-between',
        position:'absolute',
        top:0,
        left:0,
        right:0,
        width:sizes.width/3.1-10,
    }
})