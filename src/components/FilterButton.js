import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { Svg,Path,Rect } from 'react-native-svg'
import { sizes } from '../constants'
const FilterButton = () => {
  return (
    <View style={styles.filterContainer}>
      <Pressable>
        <Svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
            <Rect x="0.5" y="0.481934" width="48" height="48" rx="6" fill="#691883"/>
            <Path d="M17.2273 32.482V26.2598" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M17.2273 22.7042V16.4819" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M24.5 32.4819V24.4819" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M24.5 20.9264V16.4819" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M31.7727 32.482V28.0376" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M31.7727 24.4819V16.4819" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M14.5 26.2596H19.9545" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M21.7727 20.9264H27.2273" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M29.0455 28.0375H34.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
      </Pressable>
    </View>
  )
}

export default FilterButton

const styles = StyleSheet.create({
    filterContainer:{
        width:sizes.width,
        alignItems:'flex-start',
        padding:10,
        marginTop:10,
        marginBottom:10
    }
})