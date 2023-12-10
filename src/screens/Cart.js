import { StyleSheet, Text, View,Pressable,Image,TextInput,FlatList } from 'react-native'
import React from 'react'
import Container from '../components/Container';
import TabContainer from '../components/TabContainer';
import { sizes } from '../constants';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import {Svg,Path} from "react-native-svg"
import StackContainer from '../components/StackContainer';
import { useNavigation } from '@react-navigation/native';
const discountedProducts = [
  {id:1,image:require('../assets/image-18.png')},
  {id:2,image:require('../assets/image-18.png')},
  {id:3,image:require('../assets/image-18.png')},
  {id:4,image:require('../assets/image-18.png')},
  {id:5,image:require('../assets/image-18.png')},
];
const Cart = () => {
  const navigation = useNavigation();
 // return (<View style={styles.container}><Text>Cart</Text></View>)
  return ( <StackContainer title={'Cart'}>
        {/* <View style={styles.signinContainer}>
          <Text style={styles.regularText}>Sign in</Text>
          <Pressable onPress={()=>{
            navigation.navigate("Login");
          }} style={styles.signinButton}><Text style={styles.signInButtonText}>Sign in Now</Text></Pressable>
        </View>
        <View style={styles.productsContainer}>
          <View style={styles.singleProductContainer}>
            <Image source={require('../assets/image-1.png')} style={styles.cartImage} />
            <View style={styles.productDetailsContainer}>
              <Text style={styles.regularText}>Pax moly Doctor Whitening Cream</Text>
              <View style={styles.priceAndCounter}>
                <Text style={styles.priceText}>৳ 780</Text>
                <View style={styles.counterContainer}>
                <View style={styles.minusButton}>
                   <Svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <Path d="M10.3904 7.98462H2.73413C2.58909 7.98462 2.44999 7.927 2.34743 7.82444C2.24487 7.72188 2.18726 7.58278 2.18726 7.43774C2.18726 7.2927 2.24487 7.1536 2.34743 7.05105C2.44999 6.94849 2.58909 6.89087 2.73413 6.89087H10.3904C10.5354 6.89087 10.6745 6.94849 10.7771 7.05105C10.8796 7.1536 10.9373 7.2927 10.9373 7.43774C10.9373 7.58278 10.8796 7.72188 10.7771 7.82444C10.6745 7.927 10.5354 7.98462 10.3904 7.98462Z" fill="#231F20"/>
                  </Svg>
                </View>
               <Text>1</Text>
                  <MaterialIcons name={'add-box'} size={20} color={'#DE0C77'}  />
                </View>
              </View>
            </View>
             <View style={styles.trashContainer}>
            <Text>L</Text>
            <EvilIcons name="trash" color={'#DE0C77'} size={20} />
          </View>
          </View>
          <View style={styles.singleProductContainer}>
            <Image source={require('../assets/image-1.png')} style={styles.cartImage} />
            <View style={styles.productDetailsContainer}>
              <Text style={styles.regularText}>Pax moly Doctor Whitening Cream</Text>
              <View style={styles.priceAndCounter}>
                <Text style={styles.priceText}>৳ 780</Text>
                <View style={styles.counterContainer}>
                <View style={styles.minusButton}>
                   <Svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <Path d="M10.3904 7.98462H2.73413C2.58909 7.98462 2.44999 7.927 2.34743 7.82444C2.24487 7.72188 2.18726 7.58278 2.18726 7.43774C2.18726 7.2927 2.24487 7.1536 2.34743 7.05105C2.44999 6.94849 2.58909 6.89087 2.73413 6.89087H10.3904C10.5354 6.89087 10.6745 6.94849 10.7771 7.05105C10.8796 7.1536 10.9373 7.2927 10.9373 7.43774C10.9373 7.58278 10.8796 7.72188 10.7771 7.82444C10.6745 7.927 10.5354 7.98462 10.3904 7.98462Z" fill="#231F20"/>
                  </Svg>
                </View>
               <Text>1</Text>
                  <MaterialIcons name={'add-box'} size={20} color={'#DE0C77'}  />
                  
                 
                </View>
              </View>
            </View>
             <View style={styles.trashContainer}>
            <Text>L</Text>
            <EvilIcons name="trash" color={'#DE0C77'} size={20} />
          </View>
          </View>
        </View>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.regularText}>Total Amounts</Text>
          <Text style={styles.priceText}>৳ 1610.00</Text>
        </View> 
        <View style={styles.voucherContainer}>
          <TextInput placeholderTextColor={'#DE0C77'} placeholder='Enter Voucher Code...' style={styles.voucherInput}/>
          <Pressable style={[styles.signinButton,{height:35,margin:0}]}><Text style={styles.signInButtonText}>Apply</Text></Pressable>
        </View>
        <View>
          <View style={styles.discountedContainer}>
            <Text>Discounted Products</Text>
            <Pressable style={styles.seeMoreButton}><Text style={styles.seeMore}>See more</Text></Pressable>
          </View>
          <FlatList
          horizontal={true}
          data={discountedProducts}
          renderItem={({item,index})=>(<View style={{marginLeft:10}}>
            <Image source={item.image} />
          </View>)}
          />
        </View>
        <Pressable style={styles.checkoutButton}>
          <Text style={styles.signInButtonText}>Proceed to Checkout</Text>
        </Pressable>
        <Pressable style={styles.continueShoppingButton}>
          <Text style={styles.continueSHoppingText}>Continue Shopping</Text>
        </Pressable> */}
      </StackContainer>
   
  )
}

export default Cart

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center'
//   }
// })

const styles = StyleSheet.create({
  seeMore:{
    fontSize:10,color:'#DE0C77'
  },
  continueShoppingButton:{
    width:'95%',
    height:55,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#691883',
    borderWidth:1,
    backgroundColor:'#fff',
    alignSelf:'center',
    borderRadius:15,
    marginBottom:15
  },
  continueSHoppingText:{
    color:'#691883',
    fontSize:14
  },
  checkoutButton:{
    width:'95%',
    height:55,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#691883',
    alignSelf:'center',
    borderRadius:15,
    marginBottom:15
  },
  seeMoreButton:{
    backgroundColor:'rgba(222, 12, 119, 0.22)',
    padding:1,
    paddingHorizontal:5,
    
    borderRadius:10
    
  },
  voucherContainer:{
    paddingHorizontal:10,
    marginVertical:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  discountedContainer:{
    paddingHorizontal:10,
    paddingVertical:5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  voucherInput:{
    height:35,
    width:sizes.width/1.6,
    borderRadius:5,
    paddingLeft:10,
    backgroundColor:'#F5F5F5',
    borderColor:'#DE0C77',
    borderWidth:0.5

  },
  totalPriceContainer:{
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:10
  },
  priceAndCounter:{
    flexDirection:'row',
  },
  counterContainer:{
    marginLeft:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    width:sizes.width/5
  },
  minusButton:{
    height:15,
    width:15,
    backgroundColor:'#ccc',
    alignItems:'center',
    justifyContent:'center'
  },
  trashContainer:{
    alignItems:'center',
    justifyContent:'space-between',
    height:50
  },
  productsContainer:{
    padding:15,

  },
  productDetailsContainer:{
    width:sizes.width/2
  },
  priceText:{
    color:'#DE0C77',
    fontSize:14,
    fontWeight:'bold'
  },
  singleProductContainer:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    marginBottom:15
  },
  regularText:{
    fontSize:14,
    fontWeight:'bold',
    color:'#000',
  },
  cartImage:{
    height:50,
    width:50
  },
  signinButton:{
    width:100,
    height:38,
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    padding:5,
    backgroundColor:'#DE0C77',
    borderRadius:5
  },
  signInButtonText:{
    color:'#fff',
    fontSize:14,
    fontWeight:'bold'
  },
  signinContainer:{
    width:'95%',
    alignSelf:'center',
    backgroundColor:'#ccc',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:15,
    borderRadius:5
  }
})