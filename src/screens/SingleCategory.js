import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import Container from '../components/Container'
import StackContainer from '../components/StackContainer'
import { useNavigation,useRoute } from '@react-navigation/native'
import ProductListView from '../components/ProductListView'
import axios from "axios"
import baseUri from '../constants/urls'
import CategoriesList from '../components/CategoriesList'
const SingleCategory = () => {
  const [categoryProducts,setCategoryProducts] = useState([]);
  const [childCategories,setChildCategories] = useState([]);
  const route = useRoute();
  const getProductsAll = ()=>{
     axios.get(`${baseUri.hostExtend}products?category=${route.params.categoryId}`, {
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
    axios.get(`${baseUri.hostExtend}products/categories?parent=${route.params.categoryId}`, {
      headers: {
          Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
          'Content-Type':'application/json'
        },
    })
    .then(response => {
      setChildCategories(response.data);
      console.log(response.data);
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
        <StackContainer title={route.params.title}>
          <Text style={styles.title}>{route.params.title}</Text>
          {childCategories.length>0?<CategoriesList categories={childCategories} />:null}
          <ProductListView products={categoryProducts}  />
        </StackContainer>
    </Container>
  )
}

export default SingleCategory

const styles = StyleSheet.create({
  title:{
    fontSize:16,
    fontWeight:'bold',
    color:'#000',
    alignSelf:'center',
    textTransform:'uppercase',
    marginBottom:15
},
})