import { StyleSheet, Text, View,Pressable,Image,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import StackContainer from '../components/StackContainer'
import { colors, sizes } from '../constants'
import axios from "axios"
import baseUri from '../constants/urls'
import { useTranslation } from 'react-i18next'
const Voucher = () => {
  const [coupons,setCoupons] = useState([]);
  const {t,i18n} = useTranslation();
  callCouponsApi = ()=>{
    axios.get(`${baseUri.hostExtend}coupons`, {
      headers: {
          Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
          'Content-Type':'application/json'
        },
    })
    .then(response => {
      //console.log(response.data);
      setCoupons(response.data);
    })
    .catch(error => {
      console.log('this errpr',error);
    });
  }
  const stripString = (msg,value)=>{
    const modifiedString = msg.replace(value, '$');
    return modifiedString;
  }
  useEffect(()=>{
    callCouponsApi();
  },[])
  return (
    <StackContainer title={t('voucher')}>
      <FlatList
      data={coupons}

      renderItem={({item,index})=>(<View style={styles.singleCouponContainer}>
        <Image source={require('../assets/coupon.png')} style={{height:80,width:130}} />
        <View style={{alignItems:'center'}}>
          <View style={styles.discountBadge}>
            <Text style={styles.discountString}>{parseInt(item.amount)}% {'\n'} {t('off')}</Text>
          </View>
          <Pressable style={styles.codeButton}>
            <Text style={styles.codeString}>{t('getCouponMsg')} <Text style={{color:'red'}}>{item.code}</Text> {t('getCouponMsgTwo')}</Text>
          </Pressable>
        </View>
      </View>)}
      />
     
    </StackContainer>
  )
}

export default Voucher

const styles = StyleSheet.create({
  singleCouponContainer:{
    padding:10,
    width:sizes.width-30,
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    height:150,
    backgroundColor:'#fff',
    elevation:10,
    marginVertical:20,
    borderRadius:10
  },
  discountBadge:{
    height:50,
    width:50,
    backgroundColor:colors.secondaryDeep,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center'
  },
  discountString:{fontSize:14,
  fontWeight:'bold',
  color:colors.white,
  textAlign:'center'
  },
  codeString:{
    width:120,
    color:colors.blue,
    textDecorationLine:'underline',
    fontSize:14,
    fontWeight:'bold'
  },
  codeButton:{
    margin:10
  }
})