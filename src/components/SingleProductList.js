import { StyleSheet, Text, View,Pressable } from 'react-native'
import React,{memo,useState} from 'react'
import { sizes } from '../constants'
import FastImage from 'react-native-fast-image'
import AntDesign from "react-native-vector-icons/AntDesign"
import { Svg,Path,Circle } from 'react-native-svg'
const SingleProductList = () => {
  const [loved,setLoved] = useState(false);
  return (
    <View style={styles.productCard}>
    
      <FastImage
      source={{uri:'https://demo.beautysiaa.com/wp-content/uploads/2023/10/SOME-BY-MI-Yuja-Niacin-Brightening-Moisture-Gel-Cream-100ml-1.jpg'}}
      style={styles.cardImage}
      resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.topContents}>
        <View style={[styles.badge,{backgroundColor:'#54B435'}]}>
            <Text style={styles.badgeFont}>Sale</Text>
        </View>
        <Pressable
        onPress={()=>setLoved(!loved)}
        >
        {loved?<AntDesign name={'heart'} size={15} color="#691883" />:<AntDesign name={'hearto'} size={15} color="#691883" />}
        </Pressable>
    </View>
      <View style={styles.brand}><Text style={styles.brandText}>PAXMOLY</Text></View>
      <Text style={styles.productName}>Pax moly Doctor Whitening
Cream - 70ml Korean..............</Text>
      <View style={styles.priceSection}>
        <View style={styles.valuePrice}>
            <Text style={styles.originalPrice}>৳ 770</Text>
            <Text style={styles.discountedPrice}>৳ 780</Text>
        </View>
        <View style={styles.valuePrice}>
            <Text style={styles.ratingText}>4.8</Text>
            <AntDesign name="star" size={15} color={'#FFA902'} />
        </View>
      </View>
      <View style={styles.buttonSection}>
        <Pressable>
        <Svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="15.5" cy="15" r="15" fill="#F5F5F5"/>
            <Path d="M8.05893 8C7.7284 8 7.46045 8.26795 7.46045 8.59848C7.46045 8.929 7.7284 9.19695 8.05893 9.19695H8.35302C8.62022 9.19695 8.85506 9.37409 8.92846 9.63102L10.8263 16.2734C11.0465 17.0442 11.751 17.5756 12.5526 17.5756H18.0212C18.7553 17.5756 19.4155 17.1286 19.6882 16.447L21.4528 12.0354C21.7673 11.2492 21.1882 10.3939 20.3415 10.3939H10.3913L10.0794 9.30219C9.85914 8.53141 9.15464 8 8.35302 8H8.05893Z" fill="#691883"/>
            <Path d="M12.8467 22.3633C13.8383 22.3633 14.6421 21.5594 14.6421 20.5679C14.6421 19.5763 13.8383 18.7725 12.8467 18.7725C11.8551 18.7725 11.0513 19.5763 11.0513 20.5679C11.0513 21.5594 11.8551 22.3633 12.8467 22.3633Z" fill="#691883"/>
            <Path d="M17.6344 22.3633C18.626 22.3633 19.4298 21.5594 19.4298 20.5679C19.4298 19.5763 18.626 18.7725 17.6344 18.7725C16.6428 18.7725 15.839 19.5763 15.839 20.5679C15.839 21.5594 16.6428 22.3633 17.6344 22.3633Z" fill="#691883"/>
        </Svg>
        </Pressable>
        <Pressable style={styles.buyNowButton}>
            <Text style={styles.buyNowText}>Buy Now</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default memo(SingleProductList)

const styles = StyleSheet.create({
    productCard:{
        width:sizes.width/2-10,
        margin:10,
        backgroundColor:'#fff',
        elevation:2,
        height:261,
        padding:5,
        borderRadius:5
    },
    cardImage:{
        height:120,
        width:sizes.width/2-20,
    },
    brandText:{
        color:'#fff',
        fontSize:8
    },
    brand:{
        padding:3,
        backgroundColor:'#DE0C77',
        margin:10,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        paddingLeft:10,
        paddingRight:10
    },
    productName:{
        fontSize:11,
        lineHeight:12,
        color:'#303733'
    },
    originalPrice:{
        textDecorationLine: 'line-through',
        color:'#D71313',
        fontSize:9,
        marginRight:4,
        marginTop:3
    },
    ratingText:{
        color:'#D71313',
        fontSize:12,
        marginRight:4,
    },
    discountedPrice:{
        color:'#303733',
        fontSize:12
    },
    priceSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    valuePrice:{
        flexDirection:'row',
    },
    buttonSection:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-between'
    },
    buyNowText:{
        fontSize:14,
        color:'white',
        alignSelf:'center'
    },
    buyNowButton:{
        paddingLeft:16,
        paddingRight:16,
        paddingTop:3,
        paddingBottom:3,
        backgroundColor:'#691883',
        borderRadius:5
    },
    badgeFont:{
        color:'white',
        fontSize:10,
        alignSelf:'center'
    },
    badge:{
        paddingLeft:16,
        paddingRight:16,
        paddingTop:3,
        paddingBottom:3,
        borderRadius:10
    },
    topContents:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        position:'absolute',
        top:0,
        left:0,
        right:0,
        width:'100%'
    }
})