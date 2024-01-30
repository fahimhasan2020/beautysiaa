import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Container from '../components/Container';
import TabContainer from '../components/TabContainer';
import CarouselOffers from '../components/CarouselOffers';
import { useDispatch,useSelector } from 'react-redux';
import NewArrival from '../components/NewArrival';
import BestSellingList from '../components/BestSellingList';
import StackContainer from '../components/StackContainer';
import OfferCategories from '../components/OfferCategories';
import DiscountedProductList from '../components/DiscountedProductList';
import { useTranslation } from 'react-i18next';
const Offers = () => {
  const {t,i18n} = useTranslation();
  const newArrivals = useSelector(state=>state.auth.newArrivals);
  const discountedProducts = useSelector(state=>state.auth.discountedProducts);
  return (<StackContainer isTab={true} title={t('offer')}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:200}}>
          <CarouselOffers />
          <OfferCategories />
          <DiscountedProductList products={discountedProducts} />
        </ScrollView>
      </StackContainer>
  )
}

export default Offers

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})