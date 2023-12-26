import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import StackContainer from '../components/StackContainer'
import {WebView} from "react-native-webview"
import { sizes,colors } from '../constants'
import { useSelector } from 'react-redux'
const TermsAndConditions = () => {
const theme = useSelector(state=>state.auth.theme);
  return (
    <Container>
        <StackContainer title="Terms & Conditions">
            <ScrollView contentContainerStyle={{paddingBottom:200,paddingLeft:20,paddingRight:20,paddingTop:20}} showsVerticalScrollIndicator={false}>
            <WebView
                    showsVerticalScrollIndicator={false}
                    source={{ html: `<p style="text-align:justify;font-size:30px;color:${theme === 'dark'?colors.lightModeBg:colors.darkModeBg};font-family: sans-serif;">The followings are the terms and conditions that apply to the use of the Beautysiaa website and the purchase of products from the website. By accessing and using the Beautysiaa website, you agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, you should not use the Beautysiaa website.</p>` }}
                    style={{width:sizes.width-40,height:100,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}
                />
                <Text style={[styles.headline,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Use of the Website</Text>
                <WebView
                    showsVerticalScrollIndicator={false}
                    source={{ html: `<p style="text-align:justify;font-size:30px;color:${theme === 'dark'?colors.lightModeBg:colors.darkModeBg};font-family: sans-serif;">By accessing or using the Website, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into a contract. The Beautysiaa website and its content, including but not limited to text, graphics, images, and other material are intended solely for personal, non-commercial use. You may not use the Beautysiaa website or its content for any other purpose without the express written permission of Beautysiaa.</p>` }}
                    style={{width:sizes.width-40,height:100,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}
                />
                
                <Text style={[styles.headline,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>User Account</Text>
                <WebView
                    showsVerticalScrollIndicator={false}
                    source={{ html: `<p style="text-align:justify;font-size:30px;color:${theme === 'dark'?colors.lightModeBg:colors.darkModeBg};font-family: sans-serif;">In order to use certain features of the Website, you may be required to create an account. When creating an account, you must provide accurate and complete information. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure. You must notify us immediately of any breach of security or unauthorized use of your account.</p>` }}
                    style={{width:sizes.width-40,height:100,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}
                />
                
                <Text style={[styles.headline,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Prohibited Uses</Text>
                <WebView
                    showsVerticalScrollIndicator={false}
                    source={{ html: `<p style="text-align:justify;font-size:30px;color:${theme === 'dark'?colors.lightModeBg:colors.darkModeBg};font-family: sans-serif;">The Website may be used only for lawful purposes and in a lawful manner. You agree to comply with all applicable laws, rules, and regulations in connection with your use of the Website. You may not use the Website in any manner that could damage, disable, overburden, or impair the Website or interfere with any other party’s use of the Website.</p>` }}
                    style={{width:sizes.width-40,height:100,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}
                />
                
                <Text style={[styles.headline,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Payment</Text>
                <WebView
                    showsVerticalScrollIndicator={false}
                    source={{ html: `<p style="text-align:justify;font-size:30px;color:${theme === 'dark'?colors.lightModeBg:colors.darkModeBg};font-family: sans-serif;">All payments must be made by credit card or other means acceptable to Beautysiaa. You represent and warrant that you have the legal right to use any credit card or other payment method that you provide to us.</p>` }}
                    style={{width:sizes.width-40,height:70,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}
                />
                
                <Text style={[styles.headline,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Pricing and availability</Text>
                <WebView
                    showsVerticalScrollIndicator={false}
                    source={{ html: `<p style="text-align:justify;font-size:30px;color:${theme === 'dark'?colors.lightModeBg:colors.darkModeBg};font-family: sans-serif;">All payments must be made by credit card or other means acceptable to Beautysiaa. You represent and warrant that you have the legal right to use any credit card or other payment method that you provide to us.</p>` }}
                    style={{width:sizes.width-40,height:70,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}
                />
                
                <Text style={[styles.headline,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Ordering and purchasing</Text>
                <WebView
                    showsVerticalScrollIndicator={false}
                    source={{ html: `<p style="text-align:justify;font-size:30px;color:${theme === 'dark'?colors.lightModeBg:colors.darkModeBg};font-family: sans-serif;">All payments must be made by credit card or other means acceptable to Beautysiaa. You represent and warrant that you have the legal right to use any credit card or other payment method that you provide to us.</p>` }}
                    style={{width:sizes.width-40,height:70,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}
                />

            </ScrollView>
        </StackContainer>
    </Container>
  )
}

export default TermsAndConditions

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