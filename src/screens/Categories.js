import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Container from '../components/Container';
import TabContainer from '../components/TabContainer';
import CarouselOffers from '../components/CarouselOffers';
import { useDispatch,useSelector } from 'react-redux';
import ProductListView from '../components/ProductListView';
import CategoriesList from '../components/CategoriesList';
import CategoryContainer from '../components/CategoryContainer';
const Categories = () => {
  const allProducts = useSelector(state=>state.auth.allProducts);
  const categories = useSelector(state=>state.auth.categories);
  //return (<View style={styles.container}><Text>Home</Text></View>)
  return (<CategoryContainer>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:200}}>
          <CategoriesList categories={categories} categoryLimit={6} />
          <CarouselOffers />
          <ProductListView products={allProducts} />
        </ScrollView>
      </CategoryContainer>  
  )
}

export default Categories

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})