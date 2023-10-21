import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import BootSplash from "react-native-bootsplash"
import Container from '../components/Container';
import TabContainer from '../components/TabContainer';
import { useDispatch,useSelector } from 'react-redux';
import CarouselOffers from '../components/CarouselOffers';
import ProductListView from '../components/ProductListView';
import HomeCategories from '../components/HomeCategories';

const Home = () => {
  const dispatch = useDispatch();
  const host = useSelector(state=>state.auth.host);
  useEffect(() => {
    const init = async () => {
      
    };
    init().finally(async () => {
      BootSplash.hide({ fade: true });
      
    });

  }, []);
  return (
    <Container>
      <TabContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CarouselOffers />
          <HomeCategories />
        </ScrollView>
        
      </TabContainer>
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({})