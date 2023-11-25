import { StyleSheet, Text, View,Pressable,FlatList } from 'react-native'
import React,{useEffect} from 'react'
import BrandSingle from './BrandSingle'
import { useNavigation } from '@react-navigation/native'
const BrandsList = ({brands=[]}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.brandSection}>
      <View style={styles.brandTitleSection}>
        <Text style={styles.brandText}>Choose Brand</Text>
        <Pressable
         onPress={()=>{
          navigation.navigate('SingleBrand',{title:'3W Clinic',categoryId:'3w-clinic'})
         }}
         style={styles.seemoreButton}><Text style={styles.seeMoreButtonText}>See More</Text></Pressable>
      </View>
      <FlatList
      data={brands}
      horizontal={true}
      renderItem={({item,index})=>(<BrandSingle brandSingle={item} position={index} />)}
      keyExtractor={(item,index)=>index.toString()}
      />
      
    </View>
  )
}

export default BrandsList

const styles = StyleSheet.create({
    brandSection:{
        padding:10,
        paddingLeft:0

    },
    brandText:{
        fontSize:16,
        fontWeight:'bold',
        color:'#DE0C77',
        paddingLeft:10
    },
    brandTitleSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15
    },
    seemoreButton:{
        backgroundColor:'#D9D9D9',
        padding:3,
        paddingLeft:5,
        paddingRight:5,
        borderRadius:5
    },
    seeMoreButtonText:{
        fontSize:10
    }
})