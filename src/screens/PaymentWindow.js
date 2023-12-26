import React, { useEffect } from 'react'
import { Text, StyleSheet, View,ActivityIndicator,ToastAndroid } from 'react-native'
import { WebView } from 'react-native-webview';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigation,useRoute } from '@react-navigation/native';
import baseUri from '../constants/urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PaymentWindow = () => {
  const dispatch = useDispatch();
  const paymentSuccess = useSelector(state=>state.auth.paymentSuccess);
  const orderLists = useSelector(state=>state.auth.orders);
  const navigation = useNavigation();
  const route = useRoute();
  useEffect(()=>{
    console.log(route.params.uri);
  },[])
  const handleWebViewNavigationStateChange  = async(event) =>{
    console.log(event)
    if(event.url === 'https://beautysiaa.com/terms-conditions/'){  
      if(!paymentSuccess){
        try {
            await dispatch({ type: 'UPDATE_PAYMENT_SUCCESS', payload: true });
            await dispatch({ type: 'UPDATE_LOADING_STATE', loadingState: true });
            const response = await fetch(
              baseUri.hostExtend+'orders',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
                },
                body: route.params.checkoutData,
              }
            );
        
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseData = await response.json();
            var orderLisitems = orderLists;
            orderLisitems.push(responseData.id);
            ToastAndroid.show("Order completed",ToastAndroid.SHORT);
            dispatch({ type: 'UPDATE_CART', cartProducts: [] });
            dispatch({ type: 'UPDATE_ORDER', orders:orderLisitems });
            AsyncStorage.setItem("cartItems","");
            AsyncStorage.setItem("orders",JSON.stringify(orderLisitems));
            setTimeout(async()=>{
              navigation.reset({
                index: 0,
                routes: [{ name: 'Success' }],
              }); 
              
            },3000);
          } catch (error) {
            console.log('Error:', error);
          }
       
      }    
    }else if(event.url === 'https://beautysiaa.com/privacy-policy/'){
        ToastAndroid.show('Payment failed',ToastAndroid.SHORT);
        navigation.reset({
          index: 0,
          routes: [{ name: 'HomeTabs' }],
        }); 
    }else if(event.url === 'https://beautysiaa.com/refund-returns/'){
        ToastAndroid.show('Payment cancelled by user',ToastAndroid.SHORT);
        navigation.reset({
          index: 0,
          routes: [{ name: 'HomeTabs' }],
        }); 
    }else if(event.url === route.params.uri){
    }
    
    
}
  return (
    <View style={styles.container}>
        <WebView  onNavigationStateChange={(event)=>handleWebViewNavigationStateChange(event)} onLoad={()=>{
          setTimeout(async()=>{
            await dispatch({ type: 'UPDATE_LOADING_STATE', loadingState: false });
          },2000);
          
        }} source={{ uri: route.params.uri }} style={{ flex: 1 }} />
      </View>
  )
}

export default PaymentWindow


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    }
})