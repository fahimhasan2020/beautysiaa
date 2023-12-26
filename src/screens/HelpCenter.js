import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';
import StackContainer from '../components/StackContainer'
import { useTranslation } from 'react-i18next';
import { sizes } from '../constants';
import { useSelector } from 'react-redux';
import {AccordionList} from "accordion-collapse-react-native";
const collapse = [
    {
        id:1,
        q:'WHAT SHIPPING METHODS ARE AVAILABLE?',
        a:'We ship our products by trusted and large courier services in Bangladesh. Currently shipping methods are available like Pathao, SA Paribahan, Sundorban Courier Services, etc.'
    },
    {
        id:2,
        q:'HOW LONG WILL IT TAKE TO GET MY PACKAGE?',
        a:'Inside Dhaka: 72 Hours, Outside Dhaka: 100-120 Hours Delivery charges: Inside Dhaka: 60tk Outside Dhaka: 120tk'
    },
    {
        id:3,
        q:'WHAT PAYMENT METHODS ARE ACCEPTED?',
        a:'We accept payment via Bkash, Nagad, Rocket and visa card payment system.'
    },
    {
        id:4,
        q:'IS BUYING ONLINE SAFE?',
        a:'These are some really simple ways to shop safely online you can use every day: 1. Research retailers online to make sure they’re legitimate. 2. Make sure the website is secure. 3. Know your rights and the company’s returns policy. 5. Keep software and virus protection up-to-date and use strong passwords for online accounts. 5. Don’t use public Wi-Fi. Your standard data connection is more secure. 6. Pay using a credit card. You will have more protection. 7. Be smart. If a deal looks too good to be true, it probably is.'
    },
    {
        id:5,
        q:'HOW DO I PLACE AN ORDER?',
        a:`1. Search for your desired product or browse products by categories.
        2. If the product is available simply add it to cart.
        3. Review shopping cart.
        4. Proceed to checkout.
        5. Enter a billing address.
        6. Enter a shipping address.
        7. Choose payment option.
        8. Select Delivery.
        9. Submit Order.
        10. Check Your Order Status.
        11. You can check your order status at any time by simply login to your account.`
    },
    {
        id:6,
        q:'HOW CAN I CANCEL OR CHANGE MY ORDER?',
        a:"You have the option to cancel your order. You can contact our customer service staff if you have a valid reason for cancelling an order. After further inspection, if the cause appears to be valid to us, we will refund your entire payment, including the cost of shipping."
    },
    {
        id:7,
        q:'DO I NEED AN ACCOUNT TO PLACE AN ORDER?',
        a:"If you’d like to keep track of your orders and save your details, you might want to consider creating an account for convenience. Alternatively, you can select the guest checkout option which doesn’t require you to create an account!"
    },
    {
        id:8,
        q:'HOW DO I TRACK MY ORDER?',
        a:"Open the email account you used to place your order. Search for a shipping confirmation email in your mailbox. If you have multiple orders or shipments, find the email for the one you want to track. Follow the instructions in the email to track your shipment using the tracking number."
    },
    {
        id:9,
        q:'HOW CAN I RETURN A PRODUCT?',
        a:"If your product is defective/damaged or incorrect/incomplete at the time of delivery, please fill in the online Return Form. Your product may be eligible for refund or replacement depending on the product category and condition. Please note that some products are not eligible for a return. Our policy lasts 7 days. If 7 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. Our Return Policy does not affect your statutory rights. If you want to know more about how to get a refund, you must contact our Customer support center."
    },
];

const _head =(item)=>{
        return(
            <View style={{borderColor:'#ccc',borderWidth:1,padding:10,width:sizes.width-30,backgroundColor:'#adadad'}}>
                 <Text style={{color:'#000',fontWeight:'bold'}}>{item.q}</Text>
            </View>
        );
    }
    
const _body =(item)=>{
        return (
            <View style={{padding:10,width:sizes.width-30,backgroundColor:'#ccc'}}>
              <Text style={{textAlign:'center',color:'#000'}}>{item.a}</Text>
            </View>
        );
    }
const HelpCenter = () => {
    const theme = useSelector(state=>state.auth.theme);
    const { t, i18n } = useTranslation();
    
  return (
    <StackContainer title={t('helpCenter')}>
        <View style={{flex:1,height:sizes.height-200,alignItems:'center',justifyContent:'center'}}>
        <AccordionList
            list={collapse}
            header={_head}
            body={_body}
            keyExtractor={item => `${item.id}`}
          />
        </View>
    </StackContainer>
  )
}

export default HelpCenter

const styles = StyleSheet.create({

})