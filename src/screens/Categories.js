import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Container from '../components/Container';
import TabContainer from '../components/TabContainer';
import CarouselOffers from '../components/CarouselOffers';
import { useDispatch,useSelector } from 'react-redux';
import ProductListView from '../components/ProductListView';
const Categories = () => {
  const allProducts = useSelector(state=>state.auth.allProducts);
  //return (<View style={styles.container}><Text>Home</Text></View>)
  return (<TabContainer>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:200}}>
          <CarouselOffers />
          <ProductListView products={allProducts} />
        </ScrollView>
      </TabContainer>
   
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