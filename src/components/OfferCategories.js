import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { sizes } from '../constants';
const OfferCategories = () => {
  const navigation = useNavigation();
  return (
    <View style={{width:sizes.width,padding:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <Pressable 
      onPress={()=>{
        navigation.navigate('SingleCategory',{title:"Upto 70% Off",categoryId:614})
      }}
      style={[styles.singleCategory,{borderColor:'#DE0C773D',borderWidth:1,backgroundColor:'rgba(222, 12, 119, 0.2)'}]}>
        <View>
            <Text style={{fontSize:7,color:'#000',alignSelf:'center'}}>UPTO</Text>
            <Text style={{fontSize:14,color:'#DE0C77'}}>70%</Text>
            <Text style={{fontSize:14,color:'#DE0C77'}}>OFF</Text>
        </View>
      </Pressable>
      <Pressable
      onPress={()=>{
        navigation.navigate('SingleCategory',{title:"Buy 1 Get 1",categoryId:200})
      }}
      style={[styles.singleCategory,{borderColor:'#7A0BC0',borderWidth:1,backgroundColor:'rgba(255, 255, 255,1)'}]}>
        <View>
            <Text style={{fontSize:14,color:'#7A0BC0'}}>BO</Text>
            <Text style={{fontSize:14,color:'#7A0BC0'}}>GO</Text>
        </View>
      </Pressable>
      <Pressable
      onPress={()=>{
        navigation.navigate('SingleCategory',{title:"Combo Offer",categoryId:201})
      }}
      style={[styles.singleCategory,{borderColor:'#FFC23C',borderWidth:1,backgroundColor:'rgba(255, 255, 255,1)'}]}>
        <View>
            <Text style={{fontSize:14,color:'#FFC23C'}}>Combo</Text>
            <Text style={{fontSize:14,color:'#FFC23C',alignSelf:'center'}}>Offer</Text>
        </View>
      </Pressable>
      <Pressable
      onPress={()=>{
        navigation.navigate('SingleCategory',{title:"Flash Sale",categoryId:620})
      }}
      style={[styles.singleCategory,{borderColor:'#D71313',borderWidth:1,backgroundColor:'rgba(255, 255, 255,1)'}]}>
        <View>
            <Text style={{fontSize:14,color:'#D71313'}}>FLASH</Text>
            <Text style={{fontSize:14,color:'#D71313',alignSelf:'center'}}>SALE</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default OfferCategories

const styles = StyleSheet.create({
    singleCategory:{
        width:sizes.width/4-15,
        height:sizes.width/4-15,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        borderRadius:5
    }
})