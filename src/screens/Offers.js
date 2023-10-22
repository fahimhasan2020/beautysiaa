import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Container from '../components/Container';
import TabContainer from '../components/TabContainer';
import CarouselOffers from '../components/CarouselOffers';
import { useDispatch,useSelector } from 'react-redux';
import NewArrival from '../components/NewArrival';
import BestSellingList from '../components/BestSellingList';
const Offers = () => {
  const newArrivals = useSelector(state=>state.auth.newArrivals);
  const bestSelling = useSelector(state=>state.auth.bestSelling);
  return (
    <Container>
      <TabContainer>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:200}}>
          <CarouselOffers />
          <BestSellingList products={bestSelling} productLimit={2} />
          <NewArrival products={newArrivals} productLimit={4} />
        </ScrollView>
        

      </TabContainer>
    </Container>
  )
}

export default Offers

const styles = StyleSheet.create({})