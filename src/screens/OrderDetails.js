import { StyleSheet, Text, View,Pressable,ToastAndroid } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../components/Container'
import { sizes, typo,colors } from '../constants'
import { PrimaryInputGrayShort,PrimaryInput,PrimaryInputPhoneNumber } from '../components/Inputs'
import { useNavigation } from '@react-navigation/native'
import { useDispatch,useSelector } from 'react-redux'
const OrderDetails = () => {
  const {t,i18n}= useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const phoneNumber = useSelector(state=>state.auth.phoneNumber);
  const firstNameStore = useSelector(state=>state.auth.firstName);
  const lastNameStore = useSelector(state=>state.auth.lastName);
  const emailStore = useSelector(state=>state.auth.email);
  const theme = useSelector(state=>state.auth.theme);
  const [phone,setPhone] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [postCode,setPostCode] = useState("");
  useEffect(()=>{
    setPhone(phoneNumber);
    setFirstName(firstNameStore);
    setLastName(lastNameStore);
    setEmail(emailStore);
  },[]);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const proceedNext = ()=>{
    
    if(firstName === '' || firstName === null){
       return ToastAndroid.show("First name required",ToastAndroid.SHORT);
    }
    if(lastName === '' || lastName === null){
       return ToastAndroid.show("Last name required",ToastAndroid.SHORT);
    }
    if(email === '' || email === null){
       return ToastAndroid.show("Email required",ToastAndroid.SHORT);
    }
    if(!validateEmail()){
      return ToastAndroid.show("Invalid email. Enter valid email address",ToastAndroid.SHORT);
    }
    if(phone === '' || phone === null){
       return ToastAndroid.show("Phone number required",ToastAndroid.SHORT);
    }
    if(address === '' || address === null){
       return ToastAndroid.show("Address required",ToastAndroid.SHORT);
    }
    if(postCode === '' || postCode === null){
       return ToastAndroid.show("Post code required",ToastAndroid.SHORT);
    }
    if(phone.length>10 || phone.length<10){
      return ToastAndroid.show("Please enter a valid number",ToastAndroid.SHORT);
   }
    try{
        dispatch({type:'UPDATE_EMAIL',email:email});
        dispatch({type:'UPDATE_FIRST_NAME',firstName:firstName});
        dispatch({type:'UPDATE_LAST_NAME',lastName:lastName});
        dispatch({type:'UPDATE_PHONE_NUMBER',phone:phone});
        dispatch({type:'UPDATE_ADDRESS',address:address});
        dispatch({type:'UPDATE_POSTCODE',postCode:postCode});
        navigation.navigate('Checkout');
    }catch(e){
        console.log(e);
    }

  }
  return (
    <Container>
        <Text style={[typo.h1,{marginTop:50,textTransform:'uppercase',fontWeight:'bold',marginBottom:50,color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]} > {t('enterShipping')}</Text>
        <View style={{flexDirection:'row',marginLeft:20,width:'100%'}}>
            <PrimaryInputGrayShort placeholder={t('firstName')} data={firstName} onChangeText={(value)=>setFirstName(value)} />
            <PrimaryInputGrayShort placeholder={t('lastName')} data={lastName} onChangeText={(value)=>setLastName(value)} />
        </View>
        <PrimaryInput placeholder={t("emailAddress")} data={email} onChangeText={(value)=>setEmail(value)} />
        <PrimaryInputPhoneNumber placeholder={t("phoneNumber")} dateIcon={true} keyboardType='numeric' data={phone} onChangeText={(value)=>setPhone(value)}  />
        <PrimaryInput placeholder={t("address")} data={address} onChangeText={(value)=>setAddress(value)} />
        <PrimaryInput placeholder={t("postCode")} data={postCode} onChangeText={(value)=>setPostCode(value)} />
        <Pressable onPress={()=>{
            proceedNext();
           
        }} style={[styles.generateCodeButton,{backgroundColor:'#DE0C77'}]}><Text style={styles.generateCodeText}>{t("continueCheckout")}</Text></Pressable>
    </Container>
  )
}

export default OrderDetails;

const styles = StyleSheet.create({
    generateCodeText:{
        color:'#fff',
        fontSize:14,
        fontWeight:'bold'
      },
      generateCodeButton:{
        padding:5,
        paddingHorizontal:10,
        height:55,
        width:'85%',
        borderRadius:10,
        alignSelf:'center',
        backgroundColor:'#691883',
        margin:10,
        alignItems:'center',
        justifyContent:'center'
      },
})