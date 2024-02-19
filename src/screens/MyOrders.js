import { StyleSheet, Text, View ,FlatList,Pressable} from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import StackContainer from '../components/StackContainer'
import { useDispatch,useSelector } from 'react-redux'
import Entypo from "react-native-vector-icons/Entypo"
import axios from "axios"
import baseUri from '../constants/urls'
import { colors } from '../constants'
const MyOrders = () => {
  const orders = useSelector(state=>state.auth.orders);
  const navigation = useNavigation();
  const [orderList,setOrderList] = useState([]);
  const [showing,setShowing] = useState("all");
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
      <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
        <Pressable onPress={()=>setShowing("all")} style={{borderBottomWidth:1,borderBottomColor:showing === 'all'?colors.primary:'#fff',width:30,alignItems:'center'}}>
          <Text style={{color:'#000',fontSize:14,marginBottom:10}}>All</Text>
        </Pressable>
        <Pressable onPress={()=>setShowing("pending")} style={{borderBottomWidth:1,borderBottomColor:showing === 'pending'?colors.primary:'#fff',width:60,alignItems:'center'}}>
          <Text style={{color:'#000',fontSize:14,marginBottom:10}}>Pending</Text>
        </Pressable>
        <Pressable onPress={()=>setShowing("confirmed")} style={{borderBottomWidth:1,borderBottomColor:showing === 'confirmed'?colors.primary:'#fff',width:70,alignItems:'center'}}>
          <Text style={{color:'#000',fontSize:14,marginBottom:10}}>Confirmed</Text>
        </Pressable>
        <Pressable onPress={()=>setShowing("completed")} style={{borderBottomWidth:1,borderBottomColor:showing === 'completed'?colors.primary:'#fff',width:60,alignItems:'center'}}>
          <Text style={{color:'#000',fontSize:14,marginBottom:10}}>Delivered</Text>
        </Pressable>
        <Pressable onPress={()=>setShowing("cancelled")} style={{borderBottomWidth:1,borderBottomColor:showing === 'cancelled'?colors.primary:'#fff',width:70,alignItems:'center'}}>
          <Text style={{color:'#000',fontSize:14,marginBottom:10}}>Cancelled</Text>
        </Pressable>
      </View>
        <FlatList
        data={orderList}
        renderItem={({item,index})=>
        {
          if(showing === 'all')
          return(<Pressable
        onPress={()=>{
            navigation.navigate('SingleOrderHistory',{details:item});
        }}
        style={{width:'100%',flexDirection:'row',padding:7,margin:10,backgroundColor:'#fff',elevation:3,paddingVertical:12,alignItems:'center',justifyContent:'space-between',borderRadius:10}}>
            <View>
                <Text style={styles.orderDetails}>BTS{(item.id).toString()}COD</Text>
                <Text style={[styles.orderDetails,{color:colors.primary,marginTop:10}]}>৳ {item.total}</Text>
            </View>
            <View style={{marginRight:20}}>
              <View style={{width:130,height:30,flexDirection:'row'}}>
                <View style={{width:80,height:30,backgroundColor:item.status === 'cancelled'?'red':'green',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:10,fontWeight:'bold',color:'#fff'}}>{item.status}</Text>
                </View>
                <View style={{width:50,height:30,backgroundColor:item.payment_method === 'cod'?'blueviolet':'pink',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:10,fontWeight:'bold',color:'#fff'}}>{item.payment_method}</Text>
                </View>
              </View>
                <Text style={[styles.orderDetails]}>{formattedDateFunc(item.date_created)}</Text>
            </View>
        </Pressable>)
        else if(showing === item.status)
        return(<Pressable
          onPress={()=>{
              navigation.navigate('SingleOrderHistory',{details:item});
          }}
          style={{width:'100%',flexDirection:'row',padding:7,margin:10,backgroundColor:'#fff',elevation:3,paddingVertical:12,alignItems:'center',justifyContent:'space-between',borderRadius:10}}>
              <View>
                  <Text style={styles.orderDetails}>BTS{(item.id).toString()}COD</Text>
                  <Text style={[styles.orderDetails,{color:colors.primary,marginTop:10}]}>৳ {item.total}</Text>
              </View>
              <View style={{marginRight:20}}>
                <View style={{width:130,height:30,flexDirection:'row'}}>
                  <View style={{width:80,height:30,backgroundColor:item.status === 'cancelled'?'red':'green',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:10,fontWeight:'bold',color:'#fff'}}>{item.status}</Text>
                  </View>
                  <View style={{width:50,height:30,backgroundColor:item.payment_method === 'cod'?'blueviolet':'pink',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:10,fontWeight:'bold',color:'#fff'}}>{item.payment_method}</Text>
                  </View>
                </View>
                  <Text style={[styles.orderDetails,{marginTop:12}]}>{formattedDateFunc(item.date_created)}</Text>
              </View>
          </Pressable>) 
      }
        
      }
        />
        
    </StackContainer>
  )
}

export default MyOrders

const styles = StyleSheet.create({
    orderDetails:{
        fontSize:12,
        fontWeight:'bold',
        color:'#000'
    }
})