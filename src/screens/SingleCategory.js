import { StyleSheet, Text, View,FlatList,Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'
import Container from '../components/Container'
import SingleProductList from '../components/SingleProductList'
import StackContainer from '../components/StackContainer'
import { useNavigation,useRoute } from '@react-navigation/native'
import LottieView from "lottie-react-native";
import ProductListView from '../components/ProductListView'
import axios from "axios"
import { colors, sizes } from '../constants'
import baseUri from '../constants/urls'
import CategoriesList from '../components/CategoriesList'
import { useDispatch,useSelector } from 'react-redux'
import FastImage from 'react-native-fast-image'
const SingleCategory = () => {
  const [categoryProducts,setCategoryProducts] = useState([]);
  const [childCategories,setChildCategories] = useState([]);
  const theme = useSelector(state=>state.auth.theme);
  const route = useRoute();
  const getProductsAll = ()=>{
     axios.get(`${baseUri.hostExtend}products?category=${route.params.categoryId}&page=1&per_page=100`, {
      headers: {
          Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
          'Content-Type':'application/json'
        },
    })
    .then(response => {
      setCategoryProducts(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  const getCategoriesAll = () =>{
    axios.get(`${baseUri.hostExtend}products/categories?parent=${route.params.categoryId}&page=1&per_page=100`, {
      headers: {
          Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
          'Content-Type':'application/json'
        },
    })
    .then(response => {
      setChildCategories(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  useEffect(()=>{
   setCategoryProducts([]);
   setChildCategories([]);
   getProductsAll();
   getCategoriesAll();
  },[route.params.categoryId]);
  return (
    <Container>
        <StackContainer>
          {route.params.image?<View style={styles.categoryBanner}>
          <FastImage
            source={{uri:route.params.image}}
            style={styles.cardImage}
            resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.overlay}></View>
            <Text style={[styles.title,{color:'#fff'}]}>{route.params.title}</Text>
          </View>:<Text style={[styles.title,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg,marginVertical:20}]}>{route.params.title}</Text>}
          {childCategories.length>0?<CategoriesList categories={childCategories} />:null}

          <View style={{width:sizes.width,justifyContent:'center'}}>
            {categoryProducts.length<1?<View style={{flexDirection:'row',width:sizes.width,flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',paddingLeft:10,width:sizes.width}}><LottieView
            style={{width:150,height:180,marginTop:10}}
            autoPlay loop
            source={require("../assets/productloader.json")}
            /><LottieView
            style={{width:200,height:180,marginTop:10}}
            autoPlay loop
            source={require("../assets/productloader.json")}
            /></View>:<FlatList
              onEndReached={() => {
                if(categoryProducts.length>9){
                  console.log("end reached")
                }
                
              }}
              onEndReachedThreshold={0.1}
              showsVerticalScrollIndicator={false}
              data={categoryProducts}
              numColumns={3}
              renderItem={({item,index})=>(<SingleProductList datas={item} />)}
              keyExtractor={(item,index)=>index.toString()}
              />}
      
        </View>
        </StackContainer>
    </Container>
  )
}

export default SingleCategory

const styles = StyleSheet.create({
  title:{
    fontSize:16,
    fontWeight:'bold',
    alignSelf:'center',
    textTransform:'uppercase',
},
categoryBanner:{
  width:sizes.width-30,
  alignSelf:'center',
  height:150,
  marginVertical:15,
  borderRadius:10,
  backgroundColor:'#fff',
  elevation:3,
  alignItems:'center',
  justifyContent:'center'
},
overlay:{
  height:150,
  width:sizes.width-30,
  marginBottom:10,
  backgroundColor:'rgba(176, 14, 117,0.3)',
  position:'absolute',
  top:0,
  left:0,
  borderRadius:10
},
cardImage:{
  width:sizes.width-30,
  alignSelf:'center',
  height:150,
  borderRadius:10,
  position:'absolute',
  top:0,
  left:0
}
})