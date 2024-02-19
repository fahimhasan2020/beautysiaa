import { StyleSheet, Text, View,FlatList,Pressable } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import StackContainer from '../components/StackContainer'
import { useNavigation,useRoute } from '@react-navigation/native'
import { sizes } from '../constants'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
const SingleOrderHistory = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const getTotal = (val1,val2)=>{
    const val3 = parseInt(val1)+parseInt(val2);
    return val3;
  }
  const formattedDateFunc = (datas)=>{
    const dateString = datas;
    const dateObject = new Date(dateString);
    dateObject.setDate(dateObject.getDate() + 4);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);
    return formattedDate;
    }
  const formattedDateOrdered = (datas)=>{
    const dateString = datas;
    const dateObject = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);
    return formattedDate;
    }
  return (
    <StackContainer title={"Order Details"}>
        {route.params.details.line_items.length>0?route.params.details.line_items.map((item,index)=>(<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:10,backgroundColor:'#fff',marginHorizontal:20,borderRadius:10}}>
            <View style={{width:100,height:100,borderRadius:10,elevation:3,marginRight:10}}><FastImage source={{uri:item?.image?.src}} style={{height:100,width:100,borderRadius:10}} /></View>
            <View>
                <Text style={styles.healline}>{item?.name?.slice(0,40)+"..."}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:50}}>
                <Text style={styles.subLine}>৳ {item?.price} * {item?.quantity}</Text>
                <Text style={[styles.subLine,{fontWeight:'bold'}]}>৳ {item?.total}</Text>
                </View>
                
            </View>
        </View>)):null}
        <View style={{paddingHorizontal:20,marginTop:20,paddingVertical:10,backgroundColor:'#fff',elevation:3,marginBottom:20}}>
            <Text style={{color:'#000',fontWeight:'bold',marginBottom:10}}>Summary</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                <Text style={{color:'#000'}}>Subtotal</Text>
                <Text style={{color:'#000'}}>৳ {route.params.details.total}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                <Text style={{color:'#000'}}>Delivery Charge</Text>
                <Text style={{color:'#000'}}>৳ {route.params.details.shipping_total}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                <Text style={{color:'#000',fontWeight:'bold'}}>Total</Text>
                <Text style={{color:'#000',fontWeight:'bold'}}>৳ {getTotal(route.params.details.total,route.params.details.shipping_total)}</Text>
            </View>
        </View>
        <View style={{paddingHorizontal:20,marginTop:20,paddingVertical:10,backgroundColor:'#fff',elevation:3,marginBottom:20}}>
        <Text style={{color:'#000',fontWeight:'bold',marginBottom:10}}>Billing To</Text>
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
            <AntDesign name={"user"} size={20} color="#000" style={{marginRight:20}} />
             <Text style={[styles.heallines,{color:'#000',fontSize:14}]}> {route.params.details.billing.first_name}, {route.params.details.billing.last_name}</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
            <Entypo name={"location-pin"} size={20} color="#000" style={{marginRight:20}} />
             <Text style={[styles.heallines,{color:'#000',fontSize:14}]}> {route.params.details.billing.address_1}, {route.params.details.billing.city}, {route.params.details.billing.country}</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
            <FontAwesome name={"phone"} size={20} color="#000" style={{marginRight:20}} />
             <Text style={[styles.heallines,{color:'#000',fontSize:14}]}> {route.params.details.billing.phone}</Text>
        </View>
        </View>

        <View style={{paddingHorizontal:20,marginTop:20,paddingVertical:10,backgroundColor:'#fff',elevation:3,marginBottom:20}}>
        <Text style={{color:'#000',fontWeight:'bold',marginBottom:10}}>Need help with this Order?</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Pressable style={{backgroundColor:'#ebbed7',padding:10,width:sizes.width/2.5,alignItems:'center'}}><Text style={{color:'#4d082f'}}>Report Issue</Text></Pressable>
            <Pressable style={{backgroundColor:'#5ddade',padding:10,width:sizes.width/2.5,alignItems:'center'}}><Text style={{color:'#114d4f'}}>Reviews</Text></Pressable>
        </View>
        </View>
       

    </StackContainer>
  )
}

export default SingleOrderHistory

const styles = StyleSheet.create({
    cardDetails:{
        width:sizes.width-40,
        margin:10,
        marginLeft:20,
        height:200,
        backgroundColor:'#fff',
        elevation:3,
        padding:10,
        borderRadius:10
    },
    healline:{
        fontSize:14,
        width:250,
        color:'#000',
        marginBottom:10
    },
    heallines:{
        fontSize:14,
        fontWeight:'bold',
        color:'#adadad',
        marginBottom:5
    },
    subLine:{
        fontSize:11,
        color:'#000'
    }
})