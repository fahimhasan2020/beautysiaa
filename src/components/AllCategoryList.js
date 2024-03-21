import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,FlatList,Pressable } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import baseUri from '../constants/urls';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import { sizes } from '../constants';
import { useDispatch,useSelector } from 'react-redux';
import ProductListView from './ProductListView';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import replaceAmp from '../utils/replaceAmp';
const AllCategoryList = () => {
  const navigation = useNavigation();
  const {t,i18n} = useTranslation();
  const theme = useSelector(state=>state.auth.theme);
  const allCategories = useSelector(state=>state.auth.allCategories);
  const [childCategories, setChildCategories] = useState([]);
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 40,
          marginBottom: 20,
        }}
      >
        <View style={{ width: 44, height: 10,  marginTop: 10 }} />
      </View>
      <FlatList
      data={allCategories}
      renderItem={({item,index})=>(<Pressable onPress={()=>{navigation.navigate('SingleCategory',{title:item.name,categoryId:item.id,image:item?.image?.src})}} style={styles.card}>
       <FastImage
 source={{uri:item?.image?.src?item?.image?.src:''}}
 style={styles.cardImage}
 resizeMode={FastImage.resizeMode.cover}
 />
 <View style={styles.overlay}></View>
        <Text style={styles.title}>{replaceAmp(item.name)}</Text>
        
      </Pressable>)}
      />
    </View>
  );
};

export default AllCategoryList;

const styles = StyleSheet.create({
  card:{
    width:sizes.width-30,
    alignSelf:'center',
    backgroundColor:'white',
    elevation:3,
    borderRadius:10,
    height:150,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:20
  },
  title:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold',
    textTransform:'uppercase'
  },
  cardImage:{
   width:sizes.width-30,
   borderRadius:10,
   height:150,
   position:'absolute',
   top:0,
   left:0 
  },
  overlay:{
    width:sizes.width-30,
   borderRadius:10,
   height:150,
   position:'absolute',
   backgroundColor:'rgba(176, 14, 117,0.3)',
   top:0,
   left:0 
  }
});
