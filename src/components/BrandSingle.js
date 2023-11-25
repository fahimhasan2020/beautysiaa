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
    style={[styles.brandContainer,{backgroundColor:position === 0?'#691883':'#FFFFFF',paddingRight:position ===0?10:0}]}>
      <View style={[styles.brandLogoLayer,{borderColor:position ===0?'#691883':'#DE0C77',}]}>
        <FastImage
      source={{uri:brandSingle.brand_logo_url}}
      style={styles.brandLogo}
      resizeMode={FastImage.resizeMode.contain}
      />
      </View>
      {position === 0?<Text style={styles.brandName}>{brandSingle.name}</Text>:null}
    </Pressable>
  )
}

export default BrandSingle

const styles = StyleSheet.create({
    brandLogo:{
        height:35,
        width:35,
        borderRadius:20
    },
    brandLogoLayer:{
        height:37,
        width:37,
        borderWidth:1,
        borderRadius:20,
        backgroundColor:'#FFFFFF'
    },
    brandContainer:{
        marginLeft:10,
        borderRadius:20,
        flexDirection:'row'      
    },
    brandName:{
        fontSize:12,
        color:'#FFFFFF',
        marginTop:7,
        marginLeft:5
    }
})