import { StyleSheet, Text, View,Pressable,Modal,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import StackContainer from '../components/StackContainer'
import { useDispatch,useSelector } from 'react-redux'
import { colors, sizes } from '../constants'
import { useNavigation,CommonActions } from '@react-navigation/native'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { PrimaryInput, PrimaryInputGrayShort, PrimaryInputPhoneNumber } from '../components/Inputs'
import { useTranslation } from 'react-i18next'
import ImagePicker from 'react-native-image-crop-picker';
const EditProfile = () => {
    const navigation = useNavigation();
    const {t,i18n} = useTranslation();
    const dispatch = useDispatch();
    const firstName= useSelector(state=>state.auth.firstName);
    const lastName= useSelector(state=>state.auth.lastName);
    const email= useSelector(state=>state.auth.email);
    const phoneNumber = useSelector(state=>state.auth.phoneNumber);
    const [modalVisible, setModalVisible] = useState(false);
    const profilePicture = useSelector(state=>state.auth.profilePicture);
    const pickImage = ()=>{
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
        dispatch({type:'UPDATE_PROFILE_PICTURE',profilePicture:image.path});
      }).catch((error)=>{
        console.log('error',error);
      });
    }
  return (
   <StackContainer title={t('editProfile')}>
    <View style={{width:160,height:160,alignSelf:'center',alignItems:'center',justifyContent:'center',backgroundColor:'#fff',elevation:10,borderRadius:80,marginVertical:10}}>
      {profilePicture === ""?<Image source={require('../assets/user.png')} style={{width:150,height:150,alignSelf:'center',borderRadius:75}} />:<Image source={{uri:profilePicture}} style={{width:150,height:150,alignSelf:'center',borderRadius:75}} />}
    </View>
    <Pressable onPress={()=>{
      pickImage();
    }} style={{padding:10,borderRadius:10,backgroundColor:colors.primary,alignSelf:'center'}}><Text style={{color:colors.white,fontWeight:'bold',alignSelf:'center'}}>Change profile picture</Text></Pressable>
    
    <View style={{width:sizes.width,height:sizes.height,padding:10}}>
        <View style={{flexDirection:'row',marginLeft:10,width:sizes.width}}>
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
                    dispatch({type:'UPDATE_PHONE_NUMBER',phone:value});
                }}  />
            <Pressable onPress={()=>{setModalVisible(true)}} style={styles.deleteAccountButton}><EvilIcons color="white" name="trash" size={20}  /><Text style={{fontSize:14,color:'#fff',marginLeft:10}}>Delete My Account</Text></Pressable>
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{t('accountDeletionAlert')}</Text>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10}}>
                             <Pressable
                            style={[{marginRight:40}]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={[styles.textStyle,{color:'#000'}]}>{t('cancel')}</Text>
                            </Pressable>
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={async() => {
                                await setModalVisible(!modalVisible);
                                await dispatch({type:"LOGOUT",logged:false});
                                await dispatch({ type: 'UPDATE_ORDER', orders:[]});  
                                await dispatch({ type: 'UPDATE_FAVOURITES', favourites: [] });
                                await dispatch({ type: 'UPDATE_FAVOURITES_LIST',favouritesList:[]});
                                navigation.dispatch(
                                    CommonActions.reset({
                                      index: 0,
                                      routes: [{ name: 'Login' }],
                                    })
                                  );  
                            }}>
                            <Text style={styles.textStyle}>{t('deleteNow')}</Text>
                            </Pressable>
            </View>
           
          </View>
        </View>
      </Modal>
        </View>
   </StackContainer>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    deleteAccountButton:{
        width:sizes.width-50,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginHorizontal:15,
        paddingHorizontal:20,
        paddingVertical:10,
        position:'absolute',
        bottom:300,
        backgroundColor:colors.primary,
        borderRadius:5,
        elevation:5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor:colors.primary,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})