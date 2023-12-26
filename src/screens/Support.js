import { StyleSheet, Text, View,TouchableOpacity,Linking } from 'react-native'
import React from 'react'
import StackContainer from '../components/StackContainer'
import { useTranslation } from 'react-i18next';
import { sizes } from '../constants';
import FastImage from 'react-native-fast-image';
const openMailApp = () => {
  Linking.open('app.beautysiaa@gmail.com');
};
const Support = () => {
    const { t, i18n } = useTranslation();
    return (
    <StackContainer title={t('supports')}>
      <View style={{height:sizes.height-200,width:sizes.width,alignItems:'center',justifyContent:'center'}}>
        <FastImage
        source={require('../assets/help-desk.png')}
        style={{height:200,width:200}}
        />
        <TouchableOpacity onPress={()=>{
          Linking.openURL('mailto:app.beautysiaa@gmail.com');
         }} style={styles.button}>
          <Text style={{color:'#fff',fontWeight:'bold'}}>app.beautysiaa@gmail.com</Text>
        </TouchableOpacity>
      </View>
    </StackContainer>
  )
}

export default Support

const styles = StyleSheet.create({
  button:{
    padding:10,
    paddingHorizontal:50,
    backgroundColor:'#F06BA2',
    margin:10,
    borderRadius:5,
    elevation:3
  }
})