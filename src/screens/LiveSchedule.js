import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import StackContainer from '../components/StackContainer'
import { useTranslation } from 'react-i18next'
import { sizes } from '../constants'

const LiveSchedule = () => {
  const {t,i18n} = useTranslation();
  return (
   <StackContainer title={t('liveScheduled')}>
    <View style={{height:sizes.height,width:sizes.width,alignItems:'center',justifyContent:'center'}}>
        <Image style={{height:200,width:200,opacity:0.3}} source={require('../assets/notavailable.jpg')} />
    </View>
   </StackContainer>
  )
}

export default LiveSchedule

const styles = StyleSheet.create({})