import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackContainer from '../components/StackContainer'
import { useDispatch,useSelector } from 'react-redux'
import { sizes } from '../constants'
import { PrimaryInput, PrimaryInputGrayShort, PrimaryInputPhoneNumber } from '../components/Inputs'
const EditProfile = () => {
    const dispatch = useDispatch();
  firstName= useSelector(state=>state.auth.firstName);
  lastName= useSelector(state=>state.auth.lastName);
  email= useSelector(state=>state.auth.email);
  phoneNumber = useSelector(state=>state.auth.phoneNumber);
  return (
   <StackContainer title={'Edit Profile'}>
    <View style={{width:sizes.width,height:sizes.height,padding:10}}>
        <View style={{flexDirection:'row',marginLeft:10,width:'100%'}}>
                <PrimaryInputGrayShort placeholder={'First name'} data={firstName} onChangeText={(value)=>{
                    dispatch({type:'UPDATE_FIRST_NAME',firstName:value});
                }} />
                <PrimaryInputGrayShort placeholder={'Last name'} data={lastName} onChangeText={(value)=>{
                    dispatch({type:'UPDATE_LAST_NAME',lastName:value});
                }} />
            </View>
            <PrimaryInput placeholder={'Email address'} data={email} onChangeText={(value)=>{
                    dispatch({type:'UPDATE_EMAIL',email:value});
                }} />
            <PrimaryInputPhoneNumber placeholder={'Phone Number'} dateIcon={true} keyboardType='numeric' data={phoneNumber} onChangeText={(value)=>{
                    dispatch({type:'UPDATE_PHONE_NUMBER',phoneNumber:value});
                }}  />
            
        </View>
   </StackContainer>
  )
}

export default EditProfile

const styles = StyleSheet.create({})