import { StyleSheet, Text, View,Pressable,FlatList } from 'react-native'
import React,{useEffect} from 'react'
import NewArrivalSingle from './NewArrivalSingle'
import { sizes } from '../constants'
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
const NewArrival = ({products=[],productLimit=null}) => {
  const navigation = useNavigation();
  useEffect(()=>{
    console.log('new arrivals',products);
  },[products])
  return (
    <View style={styles.brandSection}>
      <View style={styles.brandTitleSection}>
        <Text style={styles.brandText}>New Arrival</Text>
        <Pressable onPress={()=>{
          navigation.navigate('SingleCategory',{title:'New Arrival',categoryId:775})
        }} style={styles.seemoreButton}><Text style={styles.seeMoreButtonText}>See More</Text></Pressable>
      </View>
      <View style={styles.productSection}>
        {products.length<1?<View style={{flexDirection:'row',width:sizes.width,flexWrap:'wrap',alignItems:'center',justifyContent:'center',paddingLeft:10}}><LottieView
        style={{width:150,height:180,marginTop:10}}
        autoPlay loop
        source={require("../assets/productloader.json")}
        /><LottieView
        style={{width:200,height:180,marginTop:10}}
        autoPlay loop
        source={require("../assets/productloader.json")}
        /><LottieView
        style={{width:200,height:180,marginTop:10}}
        autoPlay loop
        source={require("../assets/productloader.json")}
        /></View>:<FlatList
        showsVerticalScrollIndicator={false}
        data={productLimit?products.slice(0,productLimit):products}
        numColumns={2}
        renderItem={({item,index})=>(<NewArrivalSingle datas={item} />)}
        keyExtractor={(item,index)=>index.toString()}
      />}
      </View>
      
    </View>
  )
}

export default NewArrival

const styles = StyleSheet.create({
    productSection:{
        padding:10,
        width:sizes.width,
        flexDirection:'row',
        flexWrap:'wrap'
    },
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