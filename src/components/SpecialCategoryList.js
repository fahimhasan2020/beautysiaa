import { StyleSheet, Text, View,Pressable,FlatList, Image } from 'react-native'
import FastImage from 'react-native-fast-image'
import React from 'react'
import { sizes } from '../constants'
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
const SpecialCategoriesList = ({categories=[],categoryLimit = null}) => {
    const navigation = useNavigation();
    const replaceAnd = (value)=>{
      let newValue = value.replace("&amp;", '&');
    return newValue;
    }
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15}}>
      <Pressable  onPress={()=>{
        navigation.navigate('SingleCategory',{title:"Facewash",categoryId:59})
      }} style={{alignItems:'center',justifyContent:'center',margin:10}}>
        <Image source={require('../assets/cats/facewash.png')} style={styles.singleCategoryImage} />
        <Text style={{fontSize:14,fontWeight:'bold',color:'#000'}}>Facewash</Text>
      </Pressable>
      <Pressable  onPress={()=>{
        navigation.navigate('SingleCategory',{title:"Cream",categoryId:57})
      }} style={{alignItems:'center',justifyContent:'center',margin:10}}>
        <Image source={require('../assets/cats/cream.png')} style={styles.singleCategoryImage} />
        <Text style={{fontSize:14,fontWeight:'bold',color:'#000'}}>Cream</Text>
      </Pressable>
      <Pressable  onPress={()=>{
        navigation.navigate('SingleCategory',{title:"Serum",categoryId:60})
      }} style={{alignItems:'center',justifyContent:'center',margin:10}}>
        <Image source={require('../assets/cats/serum.png')} style={styles.singleCategoryImage} />
        <Text style={{fontSize:14,fontWeight:'bold',color:'#000'}}>Serum</Text>
      </Pressable>
      <Pressable  onPress={()=>{
        navigation.navigate('SingleCategory',{title:"Sunscreen",categoryId:61})
      }} style={{alignItems:'center',justifyContent:'center',margin:10}}>
        <Image source={require('../assets/cats/sunscreen.png')} style={styles.singleCategoryImage} />
        <Text style={{fontSize:14,fontWeight:'bold',color:'#000'}}>Sunscreen</Text>
      </Pressable>
      </View>      
      <View style={{backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15}}>
      <Pressable onPress={()=>{navigation.navigate('SingleCategory',{title:"Shampoo",categoryId:174})}} style={{alignItems:'center',justifyContent:'center',margin:10}}>
        <Image source={require('../assets/cats/shampoo.png')} style={styles.singleCategoryImage} />
        <Text style={{fontSize:14,fontWeight:'bold',color:'#000'}}>Shampoo</Text>
      </Pressable>
      <Pressable  onPress={()=>{
        navigation.navigate('SingleCategory',{title:"Hair Oil",categoryId:53})
      }} style={{alignItems:'center',justifyContent:'center',margin:10}}>
        <Image source={require('../assets/cats/hairoil.png')} style={styles.singleCategoryImage} />
        <Text style={{fontSize:14,fontWeight:'bold',color:'#000'}}>Hair Oil</Text>
      </Pressable>
      <Pressable  onPress={()=>{
        navigation.navigate('SingleCategory',{title:"Makeup",categoryId:52})
      }} style={{alignItems:'center',justifyContent:'center',margin:10}}>
        <Image source={require('../assets/cats/makeup.png')} style={styles.singleCategoryImage} />
        <Text style={{fontSize:14,fontWeight:'bold',color:'#000'}}>Makeup</Text>
      </Pressable>
      <Pressable  onPress={()=>{
        navigation.navigate('Categories')
      }} style={{alignItems:'center',justifyContent:'center',margin:10}}>
        <Image source={require('../assets/cats/all.png')} style={styles.singleCategoryImage} />
        <Text style={{fontSize:14,fontWeight:'bold',color:'#000',textAlign:'center',textAlign:'center'}}>See {'\n'} More</Text>
      </Pressable>
      </View>      
    </View>
  )
}

export default SpecialCategoriesList

const styles = StyleSheet.create({
    container:{
        padding:10,
        alignItems:'center'
    },
    singleCategoryImage:{
      height:sizes.width/6,
      width:sizes.width/6,
      borderRadius:5
    },
    categoryName:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:'center'
    },
    cardImage:{
        width:sizes.width/3-20,
        height:sizes.width/3-20,
        borderRadius:10,
        position:'absolute',
        top:0,
        left:0,
    },
    overlay:{
        height:sizes.width/3-20,
        width:sizes.width/3-20,
        marginBottom:10,
        backgroundColor:'rgba(176, 14, 117,0.3)',
        position:'absolute',
        top:0,
        left:0,
        borderRadius:10
    },
    listContainer:{
        height:sizes.width/3-20,
        width:sizes.width/3-20,
        marginBottom:10,
        marginRight:10,
        backgroundColor:'#fff',
        elevation:15,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    }
})