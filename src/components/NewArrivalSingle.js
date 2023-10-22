import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { sizes } from '../constants'
import FastImage from 'react-native-fast-image'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'
const NewArrivalSingle = ({datas}) => {
  const navigation = useNavigation();
  return (
    <Pressable
    onPress={()=>{
        navigation.navigate('ProductDetails',{productId:datas.id,details:datas});
    }}
    style={styles.container}>
      <View style={styles.newLabelContainer}>
        <Text style={styles.newLabelText}>NEW</Text>
      </View>
      <FastImage
      source={{uri:datas.images[0].src}}
      resizeMode={FastImage.resizeMode.contain}
      style={styles.productPicture}
      />
      <View style={styles.contentHolder}>
      <View style={styles.brand}><Text style={styles.brandText}>{datas.brands[0].name}</Text></View>
       <Text style={styles.productName}>{datas.name.slice(0,30)}...</Text>
<View style={styles.priceSection}>
        <View style={styles.valuePrice}>
            <Text style={styles.originalPrice}>৳ {datas.regular_price}</Text>
            <Text style={styles.discountedPrice}>৳ {datas.sale_price}</Text>
        </View>
        <View style={styles.valuePrice}>
            <Text style={styles.ratingText}>{Math.floor(parseInt(datas.average_rating))}</Text>
            <AntDesign name="star" size={12} color={'#FFA902'} />
        </View>
      </View>
      </View>
      
    </Pressable>
  )
}

export default NewArrivalSingle

const styles = StyleSheet.create({
    contentHolder:{
        paddingLeft:5
    },
    newLabelContainer:{
        backgroundColor:'#54B435',
        height:10,
        width:50,
        alignItems:'center',
        position:'absolute',
        top:5,
        right:-10,
        transform: [{ rotate: '40deg' }],
    },
    newLabelText:{
        color:'#FFF',
        fontSize:6
    },
    originalPrice:{
        textDecorationLine: 'line-through',
        color:'#D71313',
        fontSize:7,
        marginRight:4,
        marginTop:3
    },
    ratingText:{
        color:'#D71313',
        fontSize:10,
        marginRight:1,
    },
    discountedPrice:{
        color:'#303733',
        fontSize:10
    },
    priceSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:3
    },
    valuePrice:{
        flexDirection:'row',
    },
    brandText:{
        color:'#fff',
        fontSize:8
    },
    brand:{
        padding:3,
        alignSelf: 'flex-start',
        backgroundColor:'#DE0C77',
        margin:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        paddingLeft:10,
        paddingRight:10
    },
    productName:{
        fontSize:9,
        color:'#000',
        width:sizes.width/4.5
    },
    container:{
        height:82,
        width:sizes.width/2.2,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#DE0C77',
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        paddingTop:13,
        paddingBottom:1,
        paddingLeft:2,
        paddingRight:2,
        overflow:'hidden',
        marginRight:10,
        marginBottom:10
    },
    productPicture:{
        height:57,
        width:55
    }
})