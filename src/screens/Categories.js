import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../components/Container';
import TabContainer from '../components/TabContainer';
import CarouselOffers from '../components/CarouselOffers';
const Categories = () => {
  return (
    <Container>
      <TabContainer>
        <CarouselOffers />
      </TabContainer>
    </Container>
  )
}

export default Categories

const styles = StyleSheet.create({})