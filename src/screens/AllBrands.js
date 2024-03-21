import { StyleSheet, Text, View,FlatList, Pressable } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import StackContainer from '../components/StackContainer'
import { useDispatch,useSelector } from 'react-redux'
import { sizes } from '../constants'
import { useNavigation } from '@react-navigation/native'
const AllBrands = () => {
  const brands = useSelector(state=>state.auth.brands);
  const navigation = useNavigation();
  return (
    <StackContainer title='Brands'>
        <FlatList 
        data={brands}
        numColumns={2}
        contentContainerStyle={{padding:10}}
        keyExtractor={(item,index)=>item.term_id.toString()}
        renderItem={({item,index})=>(<Pressable onPress={()=>navigation.navigate('SingleBrand',{title:item.name,categoryId:item.slug})} style={{backgroundColor:'#fff',marginRight:10,marginBottom:10,elevation:3,borderRadius:10}}><FastImage source={{uri:item?.brand_logo_url?item.brand_logo_url:'https://img.freepik.com/free-vector/product-brand-building-corporate-identity-design-studio-designers-flat-characters-teamwork-cooperation-collaboration-company-name_335657-2627.jpg'}} style={{width:sizes.width/2.2,height:sizes.width/2.2,borderRadius:10}} resizeMode={FastImage.resizeMode.contain} /></Pressable>)}
        />
    </StackContainer>
  )
}

export default AllBrands

const styles = StyleSheet.create({})