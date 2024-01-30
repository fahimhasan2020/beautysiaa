import { StyleSheet, Text, View,Pressable,FlatList } from 'react-native'
import React,{useEffect} from 'react'
import { sizes,colors } from '../constants'
import LottieView from "lottie-react-native";
import SingleProductList from './SingleProductList';
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
const DiscountedProductList = ({products=[],productLimit=null}) => {
  const {t,i18n} = useTranslation();
  const navigation = useNavigation();
  const theme = useSelector(state=>state.auth.theme);
  return (
    <View style={styles.brandSection}>
     <View style={{alignItems:'center',marginTop:40,marginBottom:20}}><Text style={{color:theme ==='dark'?'#fff':'#691883',fontWeight:'bold',letterSpacing:1.3}}>{t('cycloneOffer')}</Text>
          <View style={{width:44,height:3,backgroundColor:'#DE0C77',marginTop:10}}></View>
          </View>
      <View style={styles.productSection}>
        {products.length<1?<View style={{flexDirection:'row',width:sizes.width,flexWrap:'wrap',alignItems:'center',justifyContent:'center',paddingLeft:10}}><LottieView
      style={{width:150,height:180,marginTop:10}}
      autoPlay loop
      source={require("../assets/productloader.json")}
    /><LottieView
    style={{width:200,height:180,marginTop:10}}
    autoPlay loop
    source={require("../assets/productloader.json")}
  /><LottieView
  style={{width:200,height:180,marginTop:10}}
  autoPlay loop
  source={require("../assets/productloader.json")}
/></View>:<FlatList
      showsVerticalScrollIndicator={false}
      data={productLimit?products.slice(0,productLimit):products}
      numColumns={3}
      renderItem={({item,index})=>(<SingleProductList datas={item} />)}
      keyExtractor={(item,index)=>index.toString()}
      />}
      </View>
      
    </View>
  )
}

export default DiscountedProductList

const styles = StyleSheet.create({
    productSection:{
        width:sizes.width,
        alignItems:'center',
        justifyContent:'center',
    },
    brandSection:{
        padding:10,
        paddingLeft:0

    },
    brandText:{
        fontSize:16,
        fontWeight:'bold',
        color:'#DE0C77',
        paddingLeft:10
    },
    brandTitleSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15
    },
    seemoreButton:{
        backgroundColor:'#D9D9D9',
        padding:3,
        paddingLeft:5,
        paddingRight:5,
        borderRadius:5
    },
    seeMoreButtonText:{
        fontSize:10,
        color:'#fff'
    }
})