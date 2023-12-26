import { StyleSheet, Text, View ,FlatList,Pressable} from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import StackContainer from '../components/StackContainer'
import { useDispatch,useSelector } from 'react-redux'
import Entypo from "react-native-vector-icons/Entypo"
import axios from "axios"
import baseUri from '../constants/urls'
const MyOrders = () => {
  const orders = useSelector(state=>state.auth.orders);
  const navigation = useNavigation();
  const [orderList,setOrderList] = useState([]);
  const getProductsAll = async()=>{
    const includeParam = await orders.map(id => `include[]=${id}`).join('&');
    const perPageParam = 'per_page=100';
    axios.get(`${baseUri.hostExtend}orders?${includeParam}&${perPageParam}`, {
     headers: {
         Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
         'Content-Type':'application/json'
       },
   })
   .then(response => {
    setOrderList(response.data);
    console.log(response.data);
   })
   .catch(error => {
     console.log(error);
   });
 }
 const formattedDateFunc = (datas)=>{
    const dateString = datas;
    const dateObject = new Date(dateString);
    dateObject.setDate(dateObject.getDate() + 4);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);
    return formattedDate;
    }
  useEffect(()=>{
    console.log('order list',orders);
    getProductsAll();
  },[]);
  return (
    <StackContainer title='My Orders'>
        <FlatList
        data={orderList}
        renderItem={({item,index})=>(<Pressable
        onPress={()=>{
            navigation.navigate('SingleOrderHistory',{details:item});
        }}
        style={{width:'100%',flexDirection:'row',padding:7,margin:10,backgroundColor:'#fff',elevation:3,paddingVertical:12,alignItems:'center',justifyContent:'space-between',borderRadius:10}}>
            <View style={{width:50,height:50,borderRadius:50,backgroundColor:'#DE0C77',alignItems:'center',justifyContent:'center'}}>
                <Entypo name="shopping-bag" size={30} color="white" />
            </View>
            <View>
                <Text style={styles.orderDetails}>Total: {parseInt(item.total).toString()} BDT</Text>
                <Text style={styles.orderDetails}>Address:{item.billing.address_1} , {item.billing.city}</Text>
                <Text style={styles.orderDetails}>Status: {item.status}</Text>
            </View>
            <View style={{marginRight:20}}>
                <Text style={styles.orderDetails}>Expected delivery date</Text>
                <Text style={[styles.orderDetails,{color:'#DE0C77'}]}>{formattedDateFunc(item.date_created)}</Text>
            </View>
        </Pressable>)}
        />
        
    </StackContainer>
  )
}

export default MyOrders

const styles = StyleSheet.create({
    orderDetails:{
        fontSize:8,
        fontWeight:'bold',
        color:'#000'
    }
})