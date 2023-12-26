import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { sizes } from '../constants';
const FullScreenLoader = () => {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.container}>
      <LottieView
      style={styles.animationStyle}
      autoPlay loop={true}
      source={require("../assets/placeholder.json")}
    />
      <LottieView
      style={styles.animationStyle}
      autoPlay loop={true}
      source={require("../assets/placeholder.json")}
    />
    </Animated.View>
  )
}

export default FullScreenLoader

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        position:'absolute',
        top:0,
        left:0,
        height:sizes.height+100,
        width:sizes.width
    },
    animationStyle:{
        height:sizes.height/2,
        width:sizes.width,
        opacity:0.3
    }
})