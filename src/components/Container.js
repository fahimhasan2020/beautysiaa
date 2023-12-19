import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React,{memo} from 'react'
import { colors } from '../constants'
import { useDispatch,useSelector } from 'react-redux'
const Container = ({children}) => {
  const theme = useSelector(state=>state.auth.theme);
  return (
    <View style={[styles.container,{backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}]}>
    {children}
    </View>
  )
}

export default memo(Container);

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})