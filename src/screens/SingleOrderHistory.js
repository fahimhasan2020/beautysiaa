import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import StackContainer from '../components/StackContainer'
import { useNavigation,useRoute } from '@react-navigation/native'
import { sizes } from '../constants'
const SingleOrderHistory = () => {
  const navigation = useNavigation();
  const route = useRoute();
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
        <FlatList
        data={route.params.details.line_items}
        renderItem={({item,index})=>(<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10,marginVertical:10,backgroundColor:'#fff',elevation:3,marginHorizontal:20,borderRadius:10}}>
            <FastImage source={{uri:item.image.src}} style={{height:70,width:70,borderRadius:10}} />
            <View>
                <Text style={styles.healline}>{item.name.slice(0,20)+"..."}</Text>
                <Text style={styles.subLine}>Price {item.price} BDT</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={styles.healline}>Quantity</Text>
                <Text style={styles.subLine}>{item.quantity}</Text>
            </View>
        </View>)}
        />
        <View style={styles.cardDetails}>
            <Text style={styles.heallines}>Address: {route.params.details.billing.address_1}, {route.params.details.billing.city}, {route.params.details.billing.country}</Text>
            <Text style={styles.heallines}>Status: {route.params.details.status}</Text>
            <Text style={styles.heallines}>Order date: {formattedDateOrdered(route.params.details.date_created)}</Text>
            <Text style={styles.heallines}>Expected delivery date:  {formattedDateFunc(route.params.details.date_created)}</Text>
            <Text style={styles.heallines}>Total: {route.params.details.total} BDT</Text>
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
        fontSize:11,
        fontWeight:'bold',
        color:'#000'
    },
    heallines:{
        fontSize:14,
        fontWeight:'bold',
        color:'#adadad',
        marginBottom:5
    },
    subLine:{
        fontSize:11,
        fontWeight:'bold',
        color:'pink'
    }
})