import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import BootSplash from "react-native-bootsplash"
import Container from '../components/Container';
import TabContainer from '../components/TabContainer';
import { useDispatch,useSelector } from 'react-redux';
import CarouselOffers from '../components/CarouselOffers';
import ProductListView from '../components/ProductListView';
import HomeCategories from '../components/HomeCategories';
import BrandsList from '../components/BrandsList';
import NewArrival from '../components/NewArrival';
import BannerOne from '../components/BannerOne';
import BestSellingList from '../components/BestSellingList';
import ComboBySkinConcern from '../components/ComboBySkinConcern';
import FilterButton from '../components/FilterButton';
import { sizes } from '../constants';

const Home = () => {
  const dispatch = useDispatch();
  const host = useSelector(state=>state.auth.host);
  const allProducts = useSelector(state=>state.auth.allProducts);
  const allBrands = useSelector(state=>state.auth.brands);
  const newArrivals = useSelector(state=>state.auth.newArrivals);
  const bestSelling = useSelector(state=>state.auth.bestSelling);
  useEffect(() => {
    const init = async () => {
      
    };
    init().finally(async () => {
      BootSplash.hide({ fade: true });
      
    });

  }, []);
  return (
      <TabContainer>
        <ScrollView contentContainerStyle={{paddingBottom:200}} showsVerticalScrollIndicator={false}>
          <CarouselOffers />
          {/* <HomeCategories /> */}
          {/* <ProductListView products={allProducts} productLimit={2} /> */}
          <BestSellingList products={bestSelling} productLimit={3} />
          <BrandsList brands={allBrands} />
          {/* <NewArrival products={newArrivals} productLimit={4} /> */}
          <BannerOne />
          {/* <ComboBySkinConcern products={bestSelling} productLimit={2} /> */}
          <FilterButton />
          <ProductListView products={allProducts} />
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