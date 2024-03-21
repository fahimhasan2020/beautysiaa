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
const ShopBySkinConcern = () => {
  const navigation = useNavigation();
  const {t,i18n} = useTranslation();
  const theme = useSelector(state=>state.auth.theme);
  const [childCategories, setChildCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    handleFetchChildCategories(109);
  }, []);



  const handleFetchChildCategories = async (value) => {
    try {
      const response = await axios.get(
        `${baseUri.hostExtend}products/categories?parent=${value}`,
        {
          headers: {
            Authorization: `Basic ${btoa(
              `${baseUri.consumerKey}:${baseUri.consumerSecret}`
            )}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      await setChildCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderScene = SceneMap(
    Object.fromEntries(
      childCategories.map((category) => [
        category.slug,
        () => (
          <View style={{ height:800,width:sizes.width,  }}>
            <ProductListView products={categoryProducts} productLimit={6} />
          </View>
        ),
      ])
    )
  );

  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 40,
          marginBottom: 20,
        }}
      >
        <Text style={{ color:theme ==='dark'?'#fff':'#691883', fontWeight: 'bold', letterSpacing: 1.3 }}>
          {t('shopBySkinConcern')}
        </Text>
        <View style={{ width: 44, height: 3, backgroundColor: '#DE0C77', marginTop: 10 }} />
      </View>
      <FlatList
      data={childCategories}
      renderItem={({item,index})=>(<Pressable onPress={()=>{navigation.navigate('SingleCategory',{title:item.name,categoryId:item.id,image:item.image.src})}} style={styles.card}>
       <FastImage
 source={{uri:item.image.src}}
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

export default ShopBySkinConcern;

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
