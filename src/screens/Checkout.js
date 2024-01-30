import { StyleSheet, Text, View,TextInput,Pressable,ActivityIndicator, ToastAndroid } from 'react-native'
import React,{useState,useMemo,useEffect} from 'react'
import Container from '../components/Container'
import StackContainer from '../components/StackContainer'
import { useTranslation } from 'react-i18next'
import { sizes,colors } from '../constants'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import RadioGroup,{RadioButton} from 'react-native-radio-buttons-group';
import { useDispatch,useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import baseUri from '../constants/urls'
import SSLCommerzPayment  from "sslcommerz-lts"
import AsyncStorage from '@react-native-async-storage/async-storage'
const axios = require('axios');
const store_id = 'beaut6587eb4330864'
const store_passwd = 'beaut6587eb4330864@ssl'

const is_live = false
const Checkout = () => {
const {t,i18n} = useTranslation();
const dispatch = useDispatch();
const navigation = useNavigation();
const theme = useSelector(state=>state.auth.theme);
const orderLists = useSelector(state=>state.auth.orders);
const cartProducts = useSelector(state=>state.auth.cartProducts);
const address = useSelector(state=>state.auth.address);
const postCode = useSelector(state=>state.auth.postCode);
const email = useSelector(state=>state.auth.email);
const phoneNumber = useSelector(state=>state.auth.phoneNumber);
const firstName = useSelector(state=>state.auth.firstName);
const lastName = useSelector(state=>state.auth.lastName);
const totalPrice = cartProducts.reduce((acc, item) => {
  return acc + item.price;
}, 0);
const [selectedId, setSelectedId] = useState('1');
const [finalAddress, setFinalAddress] = useState('');
const [loadingState, setLoadingState] = useState(false);
useEffect(()=>{
setFinalAddress(address);
},[]);
const checkoutNow = async() =>{
  await dispatch({ type: 'UPDATE_LOADING_STATE', loadingState: true });
  const data = {
      total_amount: parseInt(totalPrice),
      currency: 'BDT',
      tran_id: 'REF123',
      success_url: 'https://beautysiaa.com/terms-conditions/',
      fail_url: 'https://beautysiaa.com/privacy-policy/',
      cancel_url: 'https://beautysiaa.com/refund-returns/',
      ipn_url: 'https://beautysiaa.com/',
      shipping_method: 'Courier',
      product_name: 'Computer.',
      product_category: 'Electronic',
      product_profile: 'general',
      cus_name: firstName+" "+lastName,
      cus_email: email,
      cus_add1: address,
      cus_add2: 'Dhaka',
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: postCode,
      cus_country: 'Bangladesh',
      cus_phone: phoneNumber,
      cus_fax: '01711111111',
      ship_name: "Mohammadpur dhaka",
      ship_add1: 'Dhaka',
      ship_add2: 'Dhaka',
      ship_city: 'Dhaka',
      ship_state: 'Dhaka',
      ship_postcode: 1000,
      ship_country: 'Bangladesh',
  };
  const checkoutData =  JSON.stringify({
    "payment_method": "bacs",
    "payment_method_title": "Bank Transfer",
    "set_paid": true,
    "billing": {
      "first_name":firstName,
      "last_name": lastName,
      "address_1": address,
      "address_2": "",
      "city": "Dhaka",
      "state": "BD",
      "postcode": postCode,
      "country": "BD",
      "email": email,
      "phone": phoneNumber
    },
    "shipping": {
      "first_name":firstName,
      "last_name": lastName,
      "address_1": address,
      "address_2": "",
      "city": "Dhaka",
      "state": "BD",
      "postcode": postCode,
      "country": "BD",
    },
    "line_items":cartProducts.map(product => {
      return {
        "product_id": product.id,
        "quantity": product.quantity
      };
    }),
    "shipping_lines": [
      {
        "method_id": "flat_rate",
        "method_title": "Flat Rate",
        "total": (parseInt(totalPrice)+50).toFixed(2)
      }
    ]
  });
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
  sslcz.init(data).then(apiResponse => {
      console.log(apiResponse);
      let GatewayPageURL = apiResponse.GatewayPageURL;
      navigation.navigate('PaymentWindow',{uri:GatewayPageURL,checkoutData:checkoutData});
  });
}
const placeOrder = async()=>{
  console.log(cartProducts);
  setLoadingState(true);
  let data = JSON.stringify({
    "payment_method": "cod",
    "payment_method_title": "Cash on Delivery",
    "set_paid": false,
    "billing": {
      "first_name":firstName,
      "last_name": lastName,
      "address_1": address,
      "address_2": "",
      "city": "Dhaka",
      "state": "BD",
      "postcode": postCode,
      "country": "BD",
      "email": email,
      "phone": phoneNumber
    },
    "shipping": {
      "first_name":firstName,
      "last_name": lastName,
      "address_1": address,
      "address_2": "",
      "city": "Dhaka",
      "state": "BD",
      "postcode": postCode,
      "country": "BD",
    },
    "line_items":cartProducts.map(product => {
      return {
        "product_id": product.id,
        "quantity": product.quantity
      };
    }),
    "shipping_lines": [
      {
        "method_id": "flat_rate",
        "method_title": "Flat Rate",
        "total": (parseInt(totalPrice)+50).toFixed(2)
      }
    ]
  });

  try {
    const response = await fetch(
      baseUri.hostExtend+'orders',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
        },
        body: data,
      }
    );

    if (!response.ok) {
      setLoadingState(false);
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
    setTimeout(()=>{
      setLoadingState(false);
      navigation.navigate('Success')
    },3000);
  } catch (error) {
    console.log('Error:', error);
    setLoadingState(false);
  }

}

const confirmOrder = ()=>{
  if(selectedId === "1"){
    placeOrder();
  }else{
    checkoutNow();
  }
}
  return (
    <Container>
      <StackContainer title={t('checkout')}>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,paddingRight:10}}>
          <Text style={{fontSize:20,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}}>{t('address')}</Text>
        {/* <Text style={{fontSize:20,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}}>{t('changeAddress')}</Text> */}
        </View>
        <TextInput editable={false} value={finalAddress} onChangeText={(value)=>{setFinalAddress(value)}} style={{width:sizes.width-20,alignSelf:'center',padding:10,borderWidth:1,borderColor:'#ccc', color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}} />
        <View style={{borderWidth:1,borderColor:'#ccc',marginHorizontal:10,marginVertical:10}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,paddingRight:10,}}>
          <Text style={{fontSize:16,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}}>{t('paymentMethod')}</Text>
        {/* <Text style={{fontSize:20,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}}>{t('showAll')}</Text> */}
        </View>
        <View>
          <View style={{flexDirection:'row',padding:10}}>
            <EvilIcons name="image" size={30} color={theme === 'dark'?colors.lightModeBg:colors.darkModeBg} />
            <Text style={{fontSize:16,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg,width:sizes.width/1.5}}>{t('cod')}</Text>
            <RadioButton
            onPress={()=>setSelectedId('1')}
            selected={selectedId === '1'?true:false}
            color={selectedId === '1'?'#DE0C77':'#CCCCCC'}
            borderColor={selectedId === '1'?'#DE0C77':'#CCCCCC'}
            size={16}
            id="1"  />
          </View>
          <View style={{flexDirection:'row',padding:10}}>
            <EvilIcons name="image" size={30} color={theme === 'dark'?colors.lightModeBg:colors.darkModeBg} />
            <Text style={{fontSize:16,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg,width:sizes.width/1.5}}>{t('bkash')}</Text>
            <RadioButton
            onPress={()=>setSelectedId('2')}
            selected={selectedId === '2'?true:false}
            color={selectedId === '2'?'#DE0C77':'#CCCCCC'}
            borderColor={selectedId === '2'?'#DE0C77':'#CCCCCC'}
            size={16}
            id="2"  />
          </View>
          <View style={{flexDirection:'row',padding:10}}>
            <EvilIcons name="image" size={30} color={theme === 'dark'?colors.lightModeBg:colors.darkModeBg} />
            <Text style={{fontSize:16,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg,width:sizes.width/1.5}}>{t('card')}</Text>
            <RadioButton
            color={selectedId === '3'?'#DE0C77':'#CCCCCC'}
            borderColor={selectedId === '3'?'#DE0C77':'#CCCCCC'}
            onPress={()=>setSelectedId('3')}
            selected={selectedId === '3'?true:false}
            size={16}
            id="3"  />
          </View>
          
        </View>
        </View>
        
        <View style={{borderWidth:1,borderColor:'#ccc',marginHorizontal:10,marginVertical:10}}>
          <View style={{flexDirection:'row',padding:10}}>
            <Text style={{fontSize:16,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg,width:sizes.width/1.5,fontWeight:'bold'}}>{t('subTotal')}</Text>
            <Text style={{fontSize:16,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}}>৳ {totalPrice}</Text>
          </View>
          <View style={{flexDirection:'row',padding:10}}>
            <Text style={{fontSize:16,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg,width:sizes.width/1.5}}>{t('deliveryCharges')}</Text>
            <Text style={{fontSize:16,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}}>৳ 50.00</Text>
          </View>
          <View style={{flexDirection:'row',padding:10}}>
            <Text style={{fontSize:16,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg,width:sizes.width/1.5}}>{t('valueAndTaxes')}</Text>
            <Text style={{fontSize:16,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}}>৳ 0.00</Text>
          </View>
          <View style={{flexDirection:'row',padding:10}}>
            <Text style={{fontSize:16,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg,width:sizes.width/1.5,fontWeight:'bold'}}>{t('totalAmounts')}</Text>
            <Text style={{fontSize:16,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}}>৳ {(parseInt(totalPrice)+50).toString()}</Text>
          </View>
          
          
        </View>
        <Pressable onPress={()=>{
          confirmOrder();
      }}  style={{backgroundColor:'#691883',width:sizes.width-30,borderRadius:10,elevation:10,alignItems:'center',justifyContent:'center',height:55,alignSelf:'center'}}>
        {loadingState?<ActivityIndicator color={theme === 'dark'?colors.lightModeBg:colors.lightModeBg} />:<Text style={{fontSize:20,fontWeight:600,color:theme === 'dark'?colors.lightModeBg:colors.lightModeBg}}>{t('orderConfirmed')}</Text>}
        
      </Pressable>
        <Pressable onPress={()=>{
        navigation.navigate('HomeTabs');
      }}  style={{marginTop:10,borderWidth:1,borderColor:'#691883',width:sizes.width-30,borderRadius:10,alignItems:'center',justifyContent:'center',height:55,alignSelf:'center'}}>
        <Text style={{fontSize:20,fontWeight:600,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}}>{t('continueShopping')}</Text>
      </Pressable>
      </StackContainer>
      
    </Container>
  )
}

export default Checkout

const styles = StyleSheet.create({})