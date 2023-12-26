import { StyleSheet, Text, View,Pressable,Image,TextInput,FlatList,ActivityIndicator,ToastAndroid } from 'react-native'
import React,{useState} from 'react'
import Container from '../components/Container';
import TabContainer from '../components/TabContainer';
import { colors, sizes } from '../constants';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import {Svg,Path} from "react-native-svg"
import StackContainer from '../components/StackContainer';
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';
const discountedProducts = [
  {id:1,image:require('../assets/image-18.png')},
  {id:2,image:require('../assets/image-18.png')},
  {id:3,image:require('../assets/image-18.png')},
  {id:4,image:require('../assets/image-18.png')},
  {id:5,image:require('../assets/image-18.png')},
];
const Cart = () => {
  const dispatch = useDispatch();
  const [voucher,setVoucher] = useState("");
  const [loadingState,setLoadingState] = useState(false);
  const cartProducts = useSelector(state=>state.auth.cartProducts);
  const allProducts = useSelector(state=>state.auth.allProducts);
  const loggedIn = useSelector(state=>state.auth.loggedIn);
  const theme = useSelector(state=>state.auth.theme);
  const navigation = useNavigation();
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
  


  const addVoucher = ()=>{
    setLoadingState(true);
    setTimeout(()=>{
      setVoucher("");
      setLoadingState(false);
      ToastAndroid.show("Invalid voucher. Please try again later",ToastAndroid.SHORT);
    },3000);
  }
 
  return ( <StackContainer isTab={true} title={'Cart'}>
{!loggedIn && cartProducts.length>0? <View style={styles.signinContainer}>
          <Text style={styles.regularText}>Sign in</Text>
          <Pressable onPress={()=>{
            navigation.navigate("Login");
          }} style={styles.signinButton}><Text style={styles.signInButtonText}>Sign in Now</Text></Pressable>
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
                <Text style={styles.priceText}>৳ {item.price.toString()}</Text>
                <View style={styles.counterContainer}>
                <View style={styles.minusButton}>
                  <Pressable onPress={()=>{decrementItem(item)}}><Svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <Path d="M10.3904 7.98462H2.73413C2.58909 7.98462 2.44999 7.927 2.34743 7.82444C2.24487 7.72188 2.18726 7.58278 2.18726 7.43774C2.18726 7.2927 2.24487 7.1536 2.34743 7.05105C2.44999 6.94849 2.58909 6.89087 2.73413 6.89087H10.3904C10.5354 6.89087 10.6745 6.94849 10.7771 7.05105C10.8796 7.1536 10.9373 7.2927 10.9373 7.43774C10.9373 7.58278 10.8796 7.72188 10.7771 7.82444C10.6745 7.927 10.5354 7.98462 10.3904 7.98462Z" fill="#231F20"/>
                  </Svg></Pressable>
                  
                </View>
               <Text style={{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}}>{item.quantity.toString()}</Text>
               <Pressable onPress={()=>{
                incrementItem(item);
               }}>
                <MaterialIcons name={'add-box'} size={20} color={'#DE0C77'}  />
               </Pressable>
                  
                </View>
              </View>
            </View>
             <View style={styles.trashContainer}>
            {/* <Text>L</Text> */}
            <Pressable onPress={()=>{removeItemFromCart(index)}}>
              <EvilIcons name="trash" color={'#DE0C77'} size={20} />
            </Pressable>
            
          </View>
          </View>)}
          />
          
        </View>
        {cartProducts.length>0?<View style={styles.totalPriceContainer}>
          <Text style={[styles.regularText,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Total Amounts</Text>
          <Text style={styles.priceText}>৳ {totalPrice.toString()}</Text>
        </View>:null}
        {cartProducts.length>0?<View style={styles.voucherContainer}>
          <TextInput value={voucher} onChangeText={(value)=>setVoucher(value)} placeholderTextColor={'#DE0C77'} placeholder='Enter Voucher Code...' style={styles.voucherInput} />
          <Pressable onPress={()=>addVoucher()} style={[styles.signinButton,{height:35,margin:0}]}>{loadingState?<ActivityIndicator color={'#fff'} />:<Text style={styles.signInButtonText}>Apply</Text>}</Pressable>
        </View>:null}
        
        {cartProducts.length>0?<View>
          <View style={styles.discountedContainer}>
            <Text style={{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}}>Discounted Products</Text>
            <Pressable style={styles.seeMoreButton}><Text style={styles.seeMore}>See more</Text></Pressable>
          </View>
          <FlatList
          horizontal={true}
          data={allProducts}
          renderItem={({item,index})=>(<View style={{marginLeft:10,marginBottom:20,backgroundColor:'#fff',elevation:3}}>
            <Image source={{uri:item.images[0].src}} style={{height:100,width:100}} />
          </View>)}
          />
        </View>:null} 
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
          <Text style={styles.signInButtonText}>Proceed to Checkout</Text>
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