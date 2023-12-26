import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import StackContainer from '../components/StackContainer'
import { useDispatch,useSelector } from 'react-redux'
import ProductListView from '../components/ProductListView'
import { sizes } from '../constants'
const Favourites = () => {
 const allProducts = useSelector(state=>state.auth.favouritesList);
  return (
   <Container>
    <StackContainer title="Favourites">
    {allProducts.length>0?<ProductListView products={allProducts} />:<View style={styles.container}>
        <Image source={require('../assets/notavailable.jpg')} style={styles.noImageStyle}  />
    </View>}
    </StackContainer>
   </Container>
  )
}

export default Favourites

const styles = StyleSheet.create({
    container:{
        height:sizes.height,
        width:sizes.width,
        alignItems:'center',
        justifyContent:'center'
    },
    noImageStyle:{
        height:250,
        width:250,
        opacity:0.6
    }
})