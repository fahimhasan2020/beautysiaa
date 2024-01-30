import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{memo} from 'react'
import SingleProductList from './SingleProductList'
import { useDispatch,useSelector } from 'react-redux'
import LottieView from "lottie-react-native";
import { sizes } from '../constants';
const ProductListView = ({products = [],productLimit = null}) => {  
  return (
    <View style={{width:sizes.width,justifyContent:'center'}}>
      {products.length<1?<View style={{flexDirection:'row',width:sizes.width,flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',paddingLeft:10,width:sizes.width}}><LottieView
      style={{width:150,height:180,marginTop:10}}
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
  )
}

export default memo(ProductListView)

const styles = StyleSheet.create({})