import { StyleSheet, Text, View,Pressable,FlatList } from 'react-native'
import FastImage from 'react-native-fast-image'
import React from 'react'
import { sizes } from '../constants'
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
const CategoriesList = ({categories=[],categoryLimit = null}) => {
    const navigation = useNavigation();
    const replaceAnd = (value)=>{
      let newValue = value.replace("&amp;", '&');
    return newValue;
    }
  return (
    <View style={styles.container}>
         {categories.length<1?<View style={{flexDirection:'row',width:sizes.width,flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',paddingLeft:10,width:sizes.width}}><LottieView
      style={{width:150,height:180,marginTop:10}}
      autoPlay loop
      source={require("../assets/productloader.json")}
    /><LottieView
    style={{width:200,height:180,marginTop:10}}
    autoPlay loop
    source={require("../assets/productloader.json")}
  /></View>:<FlatList
      showsVerticalScrollIndicator={false}
      data={categoryLimit?categories.slice(0,categoryLimit):categories}
      numColumns={3}
      renderItem={({item,index})=>(<Pressable
      onPress={()=>{
        navigation.navigate('SingleCategory',{title:item.name,categoryId:item.id,image:item.image.src})
      }}
      style={styles.listContainer}>
        <FastImage
 source={{uri:item.image.src}}
 style={styles.cardImage}
 resizeMode={FastImage.resizeMode.contain}
 />
 <View style={styles.overlay}></View>
 <Text style={styles.categoryName}>{replaceAnd(item.name.slice(0,30))}</Text>
   </Pressable>)}
      keyExtractor={(item,index)=>index.toString()}
      />}
        
      
    </View>
  )
}

export default CategoriesList

const styles = StyleSheet.create({
    container:{
        padding:10,
        alignItems:'center'
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