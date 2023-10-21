import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../components/Container';
import TabContainer from '../components/TabContainer';
import CarouselOffers from '../components/CarouselOffers';
const Offers = () => {
  return (
    <Container>
      <TabContainer>
        <CarouselOffers />
      </TabContainer>
    </Container>
  )
}

export default Offers

const styles = StyleSheet.create({})