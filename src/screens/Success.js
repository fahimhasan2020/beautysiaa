import { StyleSheet, Text, View,Pressable } from 'react-native'
import React,{useEffect} from 'react'
import Container from '../components/Container'
import {useTranslation} from "react-i18next"
import StackContainer from '../components/StackContainer'
import {Svg,Path,Circle} from "react-native-svg"
import { sizes } from '../constants'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
const Success = () => {
  const {t,i18n} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const initiator = async()=>{
    dispatch({ type: 'UPDATE_PAYMENT_SUCCESS', payload: false });
  }
  useEffect(()=>{
    dispatch({ type: 'UPDATE_LOADING_STATE', loadingState: false });
    setTimeout(()=>{
      initiator();
    },3000);
  },[])
  
  return (
    <Container>
      <StackContainer title={t("success")}>
        <View style={{width:sizes.width,alignItems:'center',marginTop:120}}>
          <Svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <Path d="M30 0C13.4586 0 0 13.4586 0 30C0 46.5414 13.4586 60 30 60C46.5414 60 60 46.5414 60 30C60 13.4586 46.5414 0 30 0ZM46.7669 22.1053L27.594 41.1278C26.4662 42.2556 24.6617 42.3308 23.4586 41.203L13.3083 31.9549C12.1053 30.8271 12.0301 28.9474 13.0827 27.7444C14.2105 26.5414 16.0902 26.4662 17.2932 27.594L25.3383 34.9624L42.4812 17.8195C43.6842 16.6165 45.5639 16.6165 46.7669 17.8195C47.9699 19.0226 47.9699 20.9023 46.7669 22.1053Z" fill="#DE0C77"/>
          </Svg>
          <Text style={{color:'#DE0C77',fontSize:18,fontWeight:'bold',marginTop:26}}>{t("success")}</Text>
          <Text style={{color:'#8F9BB3',fontSize:14,fontWeight:'bold',marginTop:10,width:200,textAlign:'center'}}>{t('thanksMessage')}</Text>
        </View>
        <Pressable onPress={()=>{
        navigation.navigate('HomeScreen');
      }}  style={{marginTop:20,backgroundColor:'#691883',width:sizes.width-30,borderRadius:10,elevation:10,alignItems:'center',justifyContent:'center',height:55,alignSelf:'center'}}>
        <Text style={{fontSize:20,fontWeight:600,color:'#FFFFFF'}}>{t('continueShopping')}</Text>
      </Pressable>
      </StackContainer>
    </Container>
  )
}

export default Success

const styles = StyleSheet.create({})