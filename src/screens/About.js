import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import StackContainer from '../components/StackContainer'
import { sizes,colors } from '../constants'
import { WebView } from 'react-native-webview';
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
const About = () => {
    const theme = useSelector(state=>state.auth.theme);
    const {t,i18n} = useTranslation();
  return (
    <Container>
        <StackContainer title={t('aboutUs')}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:150,paddingLeft:20,paddingRight:20,paddingTop:5}}>
                <Text style={[styles.title,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Beautysiaa Limited</Text>
                <Text style={[styles.headline,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Our journey began in 2021</Text>
                <Image source={{uri:'https://beautysiaa.com/wp-content/uploads/2023/01/about-image-1-1.jpg'}} style={styles.thumb} />
                <WebView
                    
                    showsVerticalScrollIndicator={false}
                    source={{ html: `<meta name="viewport" content="initial-scale=0.1, maximum-scale=0.1"><p style="text-align:justify;font-size:30px;color:${theme === 'dark'?colors.lightModeBg:colors.darkModeBg};font-family: sans-serif;">Our journey began in 2021, and since then we have been dedicated to providing high-quality cosmetics and skin care products to our customers. We believe in customer satisfaction, which is why we are constantly striving to improve and innovate in order to bring you the best products possible.</p>` }}
                    style={{width:sizes.width-40,height:100,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}
                />
                <Text style={[styles.headline,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Shipped from Overseas</Text>
                <Image source={{uri:'https://beautysiaa.com/wp-content/uploads/2023/01/Untitlexd-3.jpg'}} style={styles.thumb} />
                <Text style={[styles.paragraph,,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>All of our products are shipped from overseas. We import 100% authentic beauty and skin care products from Korea, Japan, and US. </Text>
                
                <Text style={[styles.headline,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>We’re Just Getting Started</Text>
                <Image source={{uri:'https://beautysiaa.com/wp-content/uploads/2023/01/group-image.jpg'}} style={styles.thumb} />
                <WebView
                    showsVerticalScrollIndicator={false}
                    source={{ html: `<meta name="viewport" content="initial-scale=0.1, maximum-scale=0.1"><p style="text-align:justify;font-size:30px;color:${theme === 'dark'?colors.lightModeBg:colors.darkModeBg};font-family: sans-serif;">We are just getting started in our mission to bring the world of beauty to your doorstep. And with our commitment to constantly expanding our selection and staying on top of the latest trends and innovations in the beauty industry, we know that the best is yet to come. We can’t wait to see where this journey takes us, and we hope you’ll join us for the ride</p>` }}
                    style={{width:sizes.width-40,height:80,paddingRight:10,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}
                />
                <Text style={[styles.headline,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>A Symbol of Beauty</Text>
                <WebView
                    showsVerticalScrollIndicator={false}
                    source={{ html: `<meta name="viewport" content="initial-scale=0.1, maximum-scale=0.1"><p style="text-align:justify;font-size:30px;color:${theme === 'dark'?colors.lightModeBg:colors.darkModeBg};font-family: sans-serif;">Our company, Beautysiaa, is a leading provider of skincare, cosmetics, and makeup products in Bangladesh. We are committed to providing our customers with high-quality products at affordable prices. Our physical store, located at Basundhara City Shopping Complex, is a one-stop shop for all your beauty needs. Our trained staff are knowledgeable and can help you choose the right products for your skin type and concerns. In addition to our physical store, we also have an online presence where customers can browse and shop for our products. Our website, Beautysiaa.com, offers a convenient way to shop for beauty products from the comfort of your own home. At Beautysiaa, we believe in the power of beauty to enhance confidence and self-esteem. We are dedicated to providing our customers with the best beauty products and services to help them look and feel their best.</p>` }}
                    style={{width:sizes.width-40,height:150,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}
                />
                <Text style={[styles.headline,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Largest Importer of K-Beauty Products</Text>
                <WebView
                    showsVerticalScrollIndicator={false}
                    source={{ html: `<meta name="viewport" content="initial-scale=0.1, maximum-scale=0.1"><p style="text-align:justify;font-size:30px;color:${theme === 'dark'?colors.lightModeBg:colors.darkModeBg};font-family: sans-serif;">In addition to our own line of skincare, cosmetics, and makeup products, Beautysiaa also offers a selection of world-famous Korean beauty products. These products have gained a reputation for their high quality and effectiveness, and have become popular among beauty enthusiasts around the globe. At Beautysiaa, we are proud to offer our customers access to these popular K-beauty products. From skincare to makeup, we have a wide range of Korean beauty products to choose from, so you can experience the best of Korean beauty without having to travel to Korea. We are constantly updating our selection of Korean beauty products to ensure that our customers have access to the latest and greatest in Korean beauty. Whether you’re a longtime fan of Korean beauty products or are just starting to explore the world of Korean beauty, we have something for everyone at Beautysiaa.</p>` }}
                    style={{width:sizes.width-40,height:150,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}
                />
                <Text style={[styles.headline,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Certified by Bangladesh Standards and Testing Institution (BSTI)</Text>
                <WebView
                    showsVerticalScrollIndicator={false}
                    source={{ html: `<meta name="viewport" content="initial-scale=0.1, maximum-scale=0.1"><p style="text-align:justify;font-size:30px;color:${theme === 'dark'?colors.lightModeBg:colors.darkModeBg};font-family: sans-serif;">At Beautysiaa, we take the quality of our products very seriously. That’s why all of our skincare, cosmetics, and makeup products are certified by the Bangladesh Standards and Testing Institution (BSTI). BSTI is the national standards organization of Bangladesh, responsible for ensuring that products meet certain quality and safety standards. By choosing Beautysiaa, you can trust that our products have been carefully reviewed and tested by BSTI to ensure they are of the highest quality. We understand that our customers place a lot of trust in us when they purchase our products, and we are committed to maintaining that trust by only offering products that meet the rigorous standards set by BSTI.</p>` }}
                    style={{width:sizes.width-40,height:120,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}
                />
                <Text style={[styles.headline,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Hassle-free Customer Support</Text>
                <WebView
                showsVerticalScrollIndicator={false}
                    source={{ html: `<meta name="viewport" content="initial-scale=0.1, maximum-scale=0.1"><p style="text-align:justify;font-size:30px;color:${theme === 'dark'?colors.lightModeBg:colors.darkModeBg};font-family: sans-serif;">At Beautysiaa, we pride ourselves on providing our customers with the best possible shopping experience. A big part of that is the support and assistance provided by our amazing customer support team. Our customer support team is comprised of knowledgeable and friendly individuals who are dedicated to helping our customers find the right products for their needs. Whether you have a question about a product or need help with an order, our customer support team is always happy to assist you. We understand that choosing the right skincare, cosmetics, or makeup products can be overwhelming, especially if you’re new to the world of beauty. That’s why our customer support team is here to provide guidance and advice to help you make informed decisions. In addition to providing support and assistance, our customer support team is also dedicated to ensuring that your shopping experience is as smooth and enjoyable as possible. Whether you’re shopping in our physical store or online, our customer support team is always available to help. Thank you for choosing Beautysiaa. We look forward to assisting you with any questions or concerns you may have.</p>` }}
                    style={{width:sizes.width-40,height:200,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}
                />
            </ScrollView>
            
        </StackContainer>
    </Container>
  )
}

export default About

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