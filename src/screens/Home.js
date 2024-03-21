import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import BootSplash from "react-native-bootsplash"
import Container from '../components/Container';
import TabContainer from '../components/TabContainer';
import { useDispatch,useSelector } from 'react-redux';
import CarouselOffers from '../components/CarouselOffers';
import ProductListView from '../components/ProductListView';
import BrandsList from '../components/BrandsList';
import NewArrival from '../components/NewArrival';
import BannerOne from '../components/BannerOne';
import BestSellingList from '../components/BestSellingList';
import ComboBySkinConcern from '../components/ComboBySkinConcern';
import FilterButton from '../components/FilterButton';
import { sizes } from '../constants';
import CategoriesList from '../components/CategoriesList';
import TestimonialSlider from '../components/TestimonialSlider';
import ShopBySkinConcern from '../components/ShopBySkinConcern';
import { useTranslation } from 'react-i18next';
import SpecialCategoriesList from '../components/SpecialCategoryList';

const Home = () => {
  const {t,i18n} = useTranslation();
  const dispatch = useDispatch();
  const host = useSelector(state=>state.auth.host);
  const allProducts = useSelector(state=>state.auth.allProducts);
  const allBrands = useSelector(state=>state.auth.brands);
  const theme = useSelector(state=>state.auth.theme);
  const categories = useSelector(state=>state.auth.categories);
  const newArrivals = useSelector(state=>state.auth.newArrivals);
  const bestSelling = useSelector(state=>state.auth.bestSelling);
  useEffect(() => {
  }, []);
  return (
      <TabContainer>
        <ScrollView contentContainerStyle={{paddingBottom:200}} showsVerticalScrollIndicator={false}>
          <CarouselOffers />
          {/* <View style={{alignItems:'center',marginTop:40,marginBottom:20}}><Text style={{color:theme ==='dark'?'#fff':'#691883',fontWeight:'bold',letterSpacing:1.3}}>{t('shopByCategory')}</Text>
          <View style={{width:44,height:3,backgroundColor:'#DE0C77',marginTop:10}}></View>
          </View> */}
          <SpecialCategoriesList categories={categories} categoryLimit={12}  />
          <BestSellingList products={bestSelling} productLimit={3} />
          <BannerOne />
          <ShopBySkinConcern />
          <BrandsList brands={allBrands} />
          <TestimonialSlider />
        </ScrollView>
      </TabContainer>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})