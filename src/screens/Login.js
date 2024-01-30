import { StyleSheet, Text, View, Image,Pressable,ToastAndroid } from 'react-native';
import React, { useEffect, useState,useRef } from 'react';
import {
  PrimaryInput,
  PrimaryInputPhoneNumber
} from '../components/Inputs';
import { useTranslation } from 'react-i18next';
import NetInfo from '@react-native-community/netinfo';
import { NetworkProvider, NetworkConsumer } from 'react-native-offline';
import { PrimaryButton, PrimaryButtonDownload } from '../components/Buttons';
import BootSplash from 'react-native-bootsplash';
import Container from '../components/Container';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { GoogleSignin, statusCodes, GoogleSigninButton, } from '@react-native-google-signin/google-signin';
import { sizes } from '../constants';
import { Svg,Path } from 'react-native-svg';
import OTPTextInput from 'react-native-otp-textinput';
import Clipboard from '@react-native-clipboard/clipboard';
import { useNavigation } from '@react-navigation/native';
import auth from "@react-native-firebase/auth"
import app from "@react-native-firebase/app"
import { LoginManager,Profile,AccessToken } from "react-native-fbsdk-next";
import { useDispatch,useSelector } from 'react-redux';
const Login = () => {
  const {t,i18n} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [otpState,setOtpState] = useState(false);
  const [loading,setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [partialNumber, setPartialNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const loginCondition = useSelector(state=>state.auth.loginCondition);
  const googleLogin = async()=>{

    try {
      GoogleSignin.configure({

      })
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      if(userInfo.hasOwnProperty('idToken')){
        
        await dispatch({type:'UPDATE_FIRST_NAME',firstName:userInfo.user.givenName});
        await dispatch({type:'UPDATE_LAST_NAME',lastName:userInfo.user.familyName});
        await dispatch({type:'UPDATE_EMAIL',email:userInfo.user.email});
        await dispatch({type:'LOGIN',logged:true});
        if(loginCondition === 'generel'){
          navigation.navigate('HomeScreen');
        }else{
          navigation.navigate('OrderDetails');
        }
       
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('In progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('No play service');
      } else {
        console.log('details',error);
      }
    }

  }
  useEffect(() => {
    
  }, []);

  const updatePhoneNumber = (value)=>{
    const validChars = /^[0-9]*$/;
    if (validChars.test(value)) {
      setPhone(value);
    }
  }

  const onAuthStateChanged = user => {
    if (user) {
      console.log(user);
    }
  };
  const initUser = async(token,details) => {
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
      .then((response) => response.json())
      .then(async (json) => {
      //dispatch({ type: 'SET_FULL_LOADING', payload: true }); 
      if(details.hasOwnProperty('name')){
        var name = details.name;
        var nameParts = name.split(' ');
        var firstName = nameParts[0];
        var lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
        var email = json.email;
        console.log('first name',firstName,'last name',lastName,'email',email);   
        await dispatch({type:'UPDATE_FIRST_NAME',firstName:firstName});
        await dispatch({type:'UPDATE_LAST_NAME',lastName:lastName});
        await dispatch({type:'UPDATE_EMAIL',email:email});
        await dispatch({type:'LOGIN',logged:true});
        if(loginCondition === 'generel'){
          navigation.navigate('HomeScreen');
        }else{
          navigation.navigate('OrderDetails');
        }     
      }})
      .catch(() => {
        reject('ERROR GETTING DATA FROM FACEBOOK');
      })
  }


  const facebookLogin = () =>{
    LoginManager.setLoginBehavior(Platform.OS === 'ios' ? 'web_only' : 'NATIVE_ONLY');
    LoginManager.logInWithPermissions(["public_profile","email"]).then(
      (result)=> {
        console.log(result);
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          const currentProfile = Profile.getCurrentProfile().then(
            async (currentProfile) => {
              if (currentProfile) {
                console.log('fb details',currentProfile);
                var name = currentProfile.name;
                var nameParts = name.split(' ');
                var firstName = nameParts[0];
                var lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
                await AccessToken.getCurrentAccessToken().then((data) => {
                  const { accessToken } = data
                  initUser(accessToken,currentProfile);
                })
                
              }
            }
          );
        }
      },
      (error)=> {
        console.log("Login failed with error: " + error);
      }
    );
  }
  const loginAction  = async() =>{
    setLoading(true); 
    console.log(phone);
    if (!otpState) {
      if(phone === ''){
      setLoading(false);
      return ToastAndroid.show('Please enter phone number',ToastAndroid.SHORT);
    }
    if(phone.length > 10 || phone.length <10){
      setLoading(false);
      return ToastAndroid.show('Phone number should be 10 digits',ToastAndroid.SHORT);
    }
    try{
       const confirm = await auth().signInWithPhoneNumber(
        '+880'+phone
      );
      await setConfirmation(confirm);
      setPartialNumber(phone.substring(3).replace(/\d/g, 'X'));
      setOtpState(true);
      setLoading(false);
    }catch(e){
      ToastAndroid.show("Failed to login. Try again later", ToastAndroid.SHORT);
      setLoading(false);
    }
     
    } else {
      console.log('otp value',otp);
      try {
        await confirmation.confirm(otp);
        await dispatch({type:'LOGIN',logged:true});
        await dispatch({type:'UPDATE_PHONE_NUMBER',phone:phone});
        if(loginCondition === 'generel'){
          navigation.navigate('HomeScreen');
        }else{
          navigation.navigate('OrderDetails');
        }
       
      } catch (error) {
        ToastAndroid.show("OTP did not matched", ToastAndroid.SHORT);
        console.log('Invalid code.',error);
        setLoading(false);
      }
      setOtpState(false);
      setLoading(false);
    }
  }



  return (<NetworkProvider>
    <Container>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logohorizontal.png')} style={styles.brandLogo} />
        {!otpState?<Text style={styles.brandText}>{t("phoneLogin")}</Text>:null}
      </View>
      {!otpState?<View >
        <View>
        <PrimaryInputPhoneNumber dateIcon={true} keyboardType='numeric' data={phone} onChangeText={value=>updatePhoneNumber(value)} placeholder={t('enterPhone')} />
        <Pressable
        onPress={()=>{
          
          loginAction();
        }}
        style={styles.generateCodeButton}><Text style={styles.generateCodeText}>{t("generateCode")}</Text></Pressable>
      </View>
      <View style={styles.orContainer}>
        <View style={styles.tile}></View>
        <Text style={styles.orText}>{t("or")}</Text>
        <View style={styles.tile}></View>
      </View>
      <View>
      <Pressable onPress={()=>googleLogin()} style={[styles.generateCodeButton,{backgroundColor:'#fff',borderWidth:0.5,borderColor:'#1877F2',flexDirection:'row',justifyContent:'flex-start',paddingLeft:20}]}>
        <Image source={require('../assets/google-logo.png')} />
        <Text style={[styles.generateCodeText,{color:'#1877F2',marginLeft:20}]}>{t("googleLogin")}</Text></Pressable>
      <Pressable onPress={()=>facebookLogin()} style={[styles.generateCodeButton,{backgroundColor:'#1877F2',borderWidth:0.5,borderColor:'#1877F2',flexDirection:'row',justifyContent:'flex-start',paddingLeft:20}]}>
        <EvilIcons name="sc-facebook" size={30} color={'#fff'} />
        <Text style={[styles.generateCodeText,{marginLeft:20}]}>{t("facebookLogin")}</Text></Pressable>
        <Pressable onPress={()=>{
           dispatch({type:'LOGIN',logged:true});
           if(loginCondition === 'generel'){
            navigation.navigate('HomeScreen');
          }else{
            navigation.navigate('OrderDetails');
          }
        }} style={[styles.generateCodeButton,{backgroundColor:'#DE0C77'}]}><Text style={styles.generateCodeText}>{t("guestLogin")}</Text></Pressable>
      </View>
      <Svg width="375" height="182" viewBox="0 0 375 182" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M12.0279 116.439L-28.7609 56.0515C-56.6927 14.6988 -121.293 40.2793 -113.342 89.544L-9.44736 733.269C-3.4261 770.576 28.7788 798 66.5689 798H330C372.526 798 407 763.526 407 721V113.229C407 109.139 406.572 105.06 405.722 101.059L391.189 32.6099C382.549 -8.08689 325.446 -10.6931 313.134 29.0474L308.113 45.2555C298.05 77.7346 252.233 78.1647 241.562 45.8803C229.986 10.8532 179.075 15.3417 173.805 51.854L167.208 97.5634C163.176 125.5 126.178 132.699 111.965 108.313L101.659 90.6302C89.1808 69.22 56.415 78.0714 56.415 102.853C56.415 126.792 25.4278 136.277 12.0279 116.439Z" fill="#DE0C77"/>
      </Svg>
      </View>:<View style={{flex:1}}>
      <OTPTextInput autoFocus offTintColor="#F6F6F7" tintColor="#691883" inputCount={6} textInputStyle={styles.textOtpStyle} handleTextChange={e=>setOtp(e)} />
      <View style={styles.centerContainer}>
        <Text style={styles.codeSent}>{t("codeSent")}</Text>
        <Text style={styles.otpHint}>+880 {partialNumber}</Text>
      </View>
      <Svg style={{position:'absolute',bottom:0,left:0}} width="375" height="406" viewBox="0 0 375 406" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M24.0279 116.439L-16.7609 56.0515C-44.6927 14.6988 -109.293 40.2793 -101.342 89.544L2.55264 733.269C8.5739 770.576 40.7788 798 78.5689 798H342C384.526 798 419 763.526 419 721V113.229C419 109.139 418.572 105.06 417.722 101.059L403.189 32.6099C394.549 -8.08689 337.446 -10.6931 325.134 29.0474L320.113 45.2555C310.05 77.7346 264.233 78.1647 253.562 45.8803C241.986 10.8532 191.075 15.3417 185.805 51.854L179.208 97.5634C175.176 125.5 138.178 132.699 123.965 108.313L113.659 90.6302C101.181 69.22 68.415 78.0714 68.415 102.853C68.415 126.792 37.4278 136.277 24.0279 116.439Z" fill="#DE0C77"/>
      </Svg>
      <View style={styles.expirationCounter}>
        <Text style={styles.expirationMessage}>{t("expireOn")}</Text>
        <Pressable
        onPress={()=>{
          loginAction();
        }}
        style={styles.generateCodeButton}><Text style={styles.generateCodeText}>{t("verifyCode")}</Text></Pressable>
        <Pressable
        onPress={()=>{
         setPhone("");
         setOtpState(false);
        }}
        style={[styles.generateCodeButton,{backgroundColor:'#fff'}]}><Text style={[styles.generateCodeText,{color:'#DE0C77'}]}>{t("resentCode")}</Text></Pressable>
      </View>
   </View>}
    </Container>
    </NetworkProvider>
   
  );
};

const styles = StyleSheet.create({
  expirationMessage:{
    color:'#fff'
  },
  expirationCounter:{
    marginTop:150,
    alignItems:'center'
  },
  codeSent:{
    color:'#ACBAC3',
    fontSize:14
  },
  otpHint:{
    color:'#DE0C77',
    fontSize:14,
    alignSelf:'center',
    marginVertical:10
  },
  centerContainer:{
    alignItems:'center',
    marginTop:40
  },
  textOtpStyle:{
    borderWidth:1,
    borderColor:'#F6F6F7',
    backgroundColor:'#F6F6F7',
    borderRadius:10
  },
  orContainer:{
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:32,
    marginVertical:10
  },
  tile:{
    height:1,
    width:sizes.width/3.2,
    backgroundColor:'#000',
    
  },
  orText:{
    fontSize:15,
    fontWeight:'bold',
    color:'#000'
  },
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
  logoContainer: {
    alignItems: 'center',
    marginTop:50,
    marginBottom:50,
    
  },
  brandLogo: {},
  brandText:{
    marginTop:30,
    fontSize:14,
    color:'#000',
    alignSelf:'center',
    fontWeight:'bold'
  }
});

export default Login;
