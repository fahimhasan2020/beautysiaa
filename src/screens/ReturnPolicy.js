import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import StackContainer from '../components/StackContainer'
import {WebView} from "react-native-webview"
import { sizes,colors } from '../constants'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
const ReturnPolicy = () => {
const theme = useSelector(state=>state.auth.theme);
const {t,i18n}  = useTranslation();
  return (
    <Container>
        <StackContainer title={t('returnPolicy')}>
            <ScrollView contentContainerStyle={{paddingBottom:200,paddingLeft:20,paddingRight:20,paddingTop:20}} showsVerticalScrollIndicator={false}>
            
                <Text style={[styles.title,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Refund and Returns Policy</Text>
                <WebView
                    showsVerticalScrollIndicator={false}
                    source={{ html: `<p style="text-align:justify;font-size:40px;color:${theme === 'dark'?colors.lightModeBg:colors.darkModeBg};font-family: sans-serif;">${t('returnPolicyDetails')}</p>` }}
                    style={{width:sizes.width-40,height:600,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}
                />
                
                
            </ScrollView>
        </StackContainer>
    </Container>
  )
}

export default ReturnPolicy

const styles = StyleSheet.create({
    title:{
        fontSize:16,
        fontWeight:'bold',
        color:'#000',
        alignSelf:'center',
        textTransform:'uppercase',
        marginBottom:15
    },
    headline:{
        fontSize:14,
        fontWeight:'bold',
        color:'#000',
        alignSelf:'flex-start',
        textTransform:'capitalize',
        marginBottom:10,
        marginTop:10
    },
    paragraph:{
        fontSize:12,
        color:'#000',
        alignSelf:'flex-start',
        marginBottom:10,
        textAlign:'justify',
    },
    thumb:{
        height:sizes.width-100,
        width:sizes.width-100,
        alignSelf:'center',
        marginTop:20,
        marginBottom:20,
        borderRadius:10
    }
})