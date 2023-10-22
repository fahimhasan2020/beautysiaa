import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { sizes } from '../constants'
const BannerOne = () => {
  return (
    <View style={styles.bannerContainer}>
      <FastImage
      source={{uri:'https://demo.beautysiaa.com/wp-content/uploads/2023/10/1.png'}}
      style={styles.bannerPhoto}
      resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  )
}

export default BannerOne

const styles = StyleSheet.create({
    bannerPhoto:{
        width:sizes.width-30,
        alignSelf:'center',
        borderRadius:5,
        height:100
    },
    bannerContainer:{
        padding:10,
        backgroundColor:'#fff',
        width:sizes.width
    }
})