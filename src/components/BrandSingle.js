import { StyleSheet, Text, View,Pressable} from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native'
const BrandSingle = ({brandSingle,position}) => {
  const navigation = useNavigation();
  return (
    <Pressable
    onPress={()=>{
      navigation.navigate('SingleBrand',{title:brandSingle.name,categoryId:brandSingle.slug})
    }}
    style={[styles.brandContainer,{backgroundColor:'#FFFFFF',paddingRight:0}]}>
      <View style={[styles.brandLogoLayer]}>
        <FastImage
      source={{uri:brandSingle.brand_logo_url}}
      style={styles.brandLogo}
      resizeMode={FastImage.resizeMode.contain}
      />
      </View>
    </Pressable>
  )
}

export default BrandSingle

const styles = StyleSheet.create({
    brandLogo:{
        height:65,
        width:65,
    },
    brandLogoLayer:{
        height:70,
        width:70,
        elevation:3,
        backgroundColor:'#FFFFFF',
        marginBottom:10,
        marginTop:10
        
    },
    brandContainer:{
        marginLeft:10,
        flexDirection:'row'   
    },
    brandName:{
        fontSize:12,
        color:'#FFFFFF',
        marginTop:7,
        marginLeft:5
    }
})