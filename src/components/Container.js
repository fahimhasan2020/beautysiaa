import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import { colors } from '../constants'

const Container = ({children}) => {
  return (
    <View style={styles.container}>
    <StatusBar barStyle={'light-content'} backgroundColor={colors.pinkStatusBar} />
    {children}
    </View>
  )
}

export default Container

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})