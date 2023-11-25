import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import StackContainer from '../components/StackContainer'
import {WebView} from "react-native-webview"
import { sizes } from '../constants'

const ReturnPolicy = () => {
  return (
    <Container>
        <StackContainer title="Return Policy">
            <ScrollView contentContainerStyle={{paddingBottom:200,paddingLeft:20,paddingRight:20,paddingTop:20}} showsVerticalScrollIndicator={false}>
            
                <Text style={styles.title}>Refund and Returns Policy</Text>
                <WebView
                    showsVerticalScrollIndicator={false}
                    source={{ html: '<p style="text-align:justify;font-size:40px;color:black;font-family: sans-serif;">The Return and Refund Policy of Beautysiaa is designed to provide customers with a hassle-free return and refund experience. At Beautysiaa, we want all of our customers to be completely satisfied with their purchases. However, we understand that there may be occasions when a customer is not satisfied with their purchase and would like to return the product for a refund. If you are not satisfied with your purchase, you can return the product to us within 30 days of the purchase date. All returned products must be in their original packaging and in the same condition as when they were received.Once we receive the returned product, we will process the refund within 7-10 business days. The refund will be issued to the original method of payment.Please note that original shipping charges are non-refundable. In the event of a refund, the customer will be responsible for covering the cost of return shipping.If you have any questions about our Return and Refund Policy, please don’t hesitate to contact us at info@beautysiaa.com. We will be happy to assist you.</p>' }}
                    style={{width:sizes.width-40,height:600}}
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