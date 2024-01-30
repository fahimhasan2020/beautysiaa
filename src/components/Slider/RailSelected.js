import { StyleSheet, Text, View } from 'react-native'
import React,{memo} from 'react'

const RailSelected = () => {
  return (
    <View style={styles.root} />
  )
}

export default memo(RailSelected);

const styles = StyleSheet.create({
    root: {
        height: 4,
        backgroundColor: '#DE0C77',
        borderRadius: 2,
      },
})