import { StyleSheet, Text, View,Pressable,Image,TextInput,FlatList,ActivityIndicator,ToastAndroid } from 'react-native'
import React,{useState} from 'react'
import Container from '../components/Container';
import TabContainer from '../components/TabContainer';
import { colors, sizes } from '../constants';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"
import {Svg,Path} from "react-native-svg"
import StackContainer from '../components/StackContainer';
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
const Cart = () => {
  const dispatch = useDispatch();
  const [voucher,setVoucher] = useState("");
  const [loadingState,setLoadingState] = useState(false);
  const cartProducts = useSelector(state=>state.auth.cartProducts);
  const allProducts = useSelector(state=>state.auth.allProducts);
  const loggedIn = useSelector(state=>state.auth.loggedIn);
  const theme = useSelector(state=>state.auth.theme);
  const navigation = useNavigation();
  const {t,i18n} = useTranslation();
  const totalPrice = cartProducts.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  const removeItemFromCart = (indexNumber)=>{
    const updatedCart = [...cartProducts];
    updatedCart.splice(indexNumber, 1);
    dispatch({ type: 'UPDATE_CART', cartProducts: updatedCart });
    ToastAndroid.show("Item removed", ToastAndroid.SHORT);
    AsyncStorage.setItem("cartItems",JSON.stringify(updatedCart));
  }

  const incrementItem = (itemData) => {
    const updatedCart = cartProducts.map(item => {
      if (item.id === itemData.id) {
        const newQuantity = parseInt(item.quantity) + 1;
        const unitPrice = parseInt(item.price)/parseInt(item.quantity);
        const newPrice = newQuantity *  parseInt(unitPrice);
        return { ...item, quantity: newQuantity, price: newPrice };
      }
      return item;
    });

    dispatch({ type: 'UPDATE_CART', cartProducts: updatedCart });
    AsyncStorage.setItem("cartItems",JSON.stringify(updatedCart));
  }

  const decrementItem = (itemData) => {
    const updatedCart = cartProducts
      .map((item) => {
        if (item.id === itemData.id) {
          if (parseInt(item.quantity) > 1) {
            const newQuantity = parseInt(item.quantity) - 1;
            const unitPrice = parseInt(item.price) / parseInt(item.quantity);
            const newPrice = newQuantity * parseInt(unitPrice);
            return { ...item, quantity: newQuantity, price: newPrice };
          } else {
            // Do nothing when quantity is 1 or less
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);
  
    dispatch({ type: 'UPDATE_CART', cartProducts: updatedCart });
    AsyncStorage.setItem("cartItems",JSON.stringify(updatedCart));
  };

  const cartAdding = async (item) => {
    const numericPrice = parseInt(item.price);
    const modifiedItem = {
      id: item.id,
      name: item.name,
      picture: item.images[0].src,
      size: 'L',
      quantity: 1,
      price: numericPrice,
    };
  
    const existingItemIndex = cartProducts.findIndex((cartItem) => cartItem.id === item.id);
  
    if (existingItemIndex !== -1) {
      const updatedCartProducts = cartProducts.map((cartItem, index) => {
        if (index === existingItemIndex) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            price: parseInt(cartItem.price) + parseInt(item.price),
          };
        }
        return cartItem;
      });
  
      await dispatch({ type: 'UPDATE_CART', cartProducts: updatedCartProducts });
      AsyncStorage.setItem("cartItems",JSON.stringify(updatedCartProducts));
      console.log('new value', updatedCartProducts);
    } else {
      const updatedCartProducts = [...cartProducts, modifiedItem];
      await dispatch({ type: 'UPDATE_CART', cartProducts: updatedCartProducts });
      AsyncStorage.setItem("cartItems",JSON.stringify(updatedCartProducts));
      console.log('new value', updatedCartProducts);
    }
  
    
    ToastAndroid.show("Item added to cart", ToastAndroid.SHORT);
  };
  


  const addVoucher = ()=>{
    setLoadingState(true);
    setTimeout(()=>{
      setVoucher("");
      setLoadingState(false);
      ToastAndroid.show("Invalid voucher. Please try again later",ToastAndroid.SHORT);
    },3000);
  }
 
  return (<StackContainer isTab={false} title={t('cart')}>
{/* {!loggedIn && cartProducts.length>0? <View style={styles.signinContainer}>
          <Text style={styles.regularText}>{t('signIn')}</Text>
          <Pressable onPress={()=>{
            navigation.navigate("Login");
          }} style={styles.signinButton}><Text style={styles.signInButtonText}>{t('signInNow')}</Text></Pressable>
        </View>:null} */}
    {cartProducts.length>0?<View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
      <Text style={{fontSize:16,color:theme === 'dark'?'white':'black'}}>Item({cartProducts.length})</Text>
      <Text style={{fontSize:16,color:theme === 'dark'?'white':'black'}}>Total: BDT {totalPrice.toString()}</Text>
    </View>:null}
       
        <View style={styles.productsContainer}>
          <FlatList
          data={cartProducts}
          keyExtractor={(item,index)=>item.id.toString()}
          renderItem={({item,index})=>(<View style={styles.singleProductContainer}>
            <Image source={{uri:item.picture}} style={styles.cartImage} />
            <View style={styles.productDetailsContainer}>
              <Text style={[styles.regularText,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>{item.name}</Text>
              <View style={styles.priceAndCounter}>
                <Text style={[styles.priceText,{color:theme === 'dark'?'white':'black'}]}>৳ {item.price.toString()}</Text>
                <View style={styles.counterContainer}>
                <View style={styles.minusButton}>
                  <Pressable onPress={()=>{decrementItem(item)}}><Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14" fill="none">
                  <Path d="M10.3904 7.98462H2.73413C2.58909 7.98462 2.44999 7.927 2.34743 7.82444C2.24487 7.72188 2.18726 7.58278 2.18726 7.43774C2.18726 7.2927 2.24487 7.1536 2.34743 7.05105C2.44999 6.94849 2.58909 6.89087 2.73413 6.89087H10.3904C10.5354 6.89087 10.6745 6.94849 10.7771 7.05105C10.8796 7.1536 10.9373 7.2927 10.9373 7.43774C10.9373 7.58278 10.8796 7.72188 10.7771 7.82444C10.6745 7.927 10.5354 7.98462 10.3904 7.98462Z" fill="rgba(0,0,0,0.3)"/>
                  </Svg></Pressable>
                  
                </View>
               <Text style={{color:'rgba(0,0,0,0.3)',fontSize:20}}>{item.quantity.toString()}</Text>
               <Pressable onPress={()=>{
                incrementItem(item);
               }}
               style={{borderLeftWidth:0.5,borderLeftColor:'#ccc',height:35}}
               >
                <MaterialIcons name={'add'} size={40} color={'rgba(0,0,0,0.3)'}  />
               </Pressable>
                  
                </View>
              </View>
            </View>
            
          </View>)}
          />
        </View>
        <Pressable onPress={()=>{navigation.navigate("Favourites")}} style={{width:'95%',marginLeft:10,backgroundColor:'#fcfcfc',padding:10,borderRadius:3,marginVertical:10,borderWidth:0.5,borderColor:'#ccc',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{color:'#000',fontSize:16}}>Add more from favourites</Text>
          <Entypo name="chevron-small-right" size={20} />
        </Pressable>
        {cartProducts.length>0?<View style={styles.totalPriceContainer}>
          <Text style={[styles.regularText,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>{t('totalAmounts')}</Text>
          <Text style={[styles.priceText,{color:theme === 'dark'?'white':'black'}]}>৳ {totalPrice.toString()}</Text>
        </View>:null}
        {cartProducts.length>0?<View style={styles.voucherContainer}>
          <TextInput value={voucher} onChangeText={(value)=>setVoucher(value)} placeholderTextColor={'#DE0C77'} placeholder={t('enteraVoucherCode')} style={styles.voucherInput} />
          <Pressable onPress={()=>addVoucher()} style={[styles.signinButton,{height:35,margin:0}]}>{loadingState?<ActivityIndicator color={'#fff'} />:<Text style={styles.signInButtonText}>{t('apply')}</Text>}</Pressable>
        </View>:null}
        
        {/* {cartProducts.length>0?<View>
          <View style={styles.discountedContainer}>
            <Text style={{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}}>{t('discountedProducts')}</Text>
            <Pressable style={styles.seeMoreButton}><Text style={[styles.seeMore,{color:'#fff'}]}>{t('seeMore')}</Text></Pressable>
          </View>
          <FlatList
          horizontal={true}
          data={allProducts}
          renderItem={({item,index})=>(<View style={{marginLeft:10,marginBottom:20,backgroundColor:'#fff',elevation:3}}><Pressable onPress={()=>{
            //navigation.navigate('ProductDetails',{productId:item.id,details:item});
            cartAdding(item);
          }}>
            <Image source={{uri:item.images[0].src}} style={{height:100,width:100}} />
            <MaterialIcons name="shopping-cart" size={30} style={{position:'absolute',bottom:10,right:2}}  />
          </Pressable>
          </View>)}
          />
        </View>:null}  */}
        {cartProducts.length>0?<Pressable
        onPress={()=>{
          if(loggedIn){
            navigation.navigate("OrderDetails");
          }else{
            dispatch({type:'UPDATE_LOGIN_CONDITION',loginCondition:'order'});
            navigation.navigate("Login");
            ToastAndroid.show("Login first", ToastAndroid.SHORT);
          }
        }}
        style={styles.checkoutButton}>
          <Text style={styles.signInButtonText}>{t('proceedToCheckout')}</Text>
        </Pressable>:null}
        {cartProducts.length<1?<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Image source={require('../assets/cartempty.jpg')} style={{height:150,width:150,opacity:0.3}} />
          <Text style={{fontSize:20,marginTop:20,color:'#ccc',fontWeight:'bold'}}>No items available</Text>
        </View>:null}
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
    width:'100%',
    height:55,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#691883',
    position:'absolute',
    bottom:0,
  },
  seeMoreButton:{
    backgroundColor:colors.primary,
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
  },
  counterContainer:{
    borderWidth:0.5,
    borderColor:'#ccc',
    borderRadius:5,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
    justifyContent:'space-around',
    width:sizes.width/3.5
  },
  minusButton:{
    height:35,
    width:35,
    backgroundColor:'#fff',
    borderRightWidth:0.5,
    borderRightColor:'#ccc',
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
    color:'#403d3d',
    fontSize:24,
    marginBottom:10,
  },
  singleProductContainer:{
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    marginBottom:15
  },
  regularText:{
    fontSize:14,
    minWidth:200,
    fontWeight:'bold',
    color:'#1f1e1e',
  },
  cartImage:{
    height:70,
    width:70
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