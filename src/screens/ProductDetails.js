import { StyleSheet, Text, View,Image,ScrollView,Pressable,useWindowDimensions,FlatList,Share,ToastAndroid } from 'react-native'
import React,{useState,useEffect} from 'react'
import Animated,{FadeInLeft,FadeOutLeft} from "react-native-reanimated"
import { useNavigation,useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import { sizes,colors } from '../constants'
import Container from '../components/Container'
import FastImage from 'react-native-fast-image'
import { Svg,Path,Circle } from 'react-native-svg'
import StackContainer from '../components/StackContainer'
import { WebView } from 'react-native-webview';
import RenderHtml from 'react-native-render-html';
import { useSelector,useDispatch } from 'react-redux'
import ProductListView from '../components/ProductListView'
import AsyncStorage from '@react-native-async-storage/async-storage'
const ProductDetails = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state=>state.auth.allProducts);
  const theme = useSelector(state=>state.auth.theme);
  const cartProducts = useSelector(state=>state.auth.cartProducts);
  const { width } = useWindowDimensions();
  const route = useRoute();
  const navigation = useNavigation();
  const [showDetails,setShowDetails] = useState(false);
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

  useEffect(()=>{
    console.log(route.params.details);
  },[])

  const replaceDomain = (value)=>{
    let newValue = value.replace(/http:\/\/beautysiaa\.com\.bd\//g, 'https://demo.beautysiaa.com/');
    return newValue;
  }
  
  
  const shareContent = () => {
    Share.share({
      message: `Check this product: ${route.params.details.permalink}`,
    })
      .then(result => {
        if (result.action === Share.sharedAction) {
          console.log('Content shared successfully');
        } else if (result.action === Share.dismissedAction) {
          console.log('Sharing dismissed');
        }
      })
      .catch(error => {
        console.error('Error sharing content:', error.message);
      });
  };
  return (
    <Container>
      <StackContainer title={route.params.details.name.slice(0,10)+'...'}>
        <ScrollView showsVerticalScrollIndicator={false}>
      <FastImage source={{uri:route.params.details.images[0].src}} style={styles.productImage} />
      <Animated.View entering={FadeInLeft.duration(300).delay(400)} exiting={FadeOutLeft.duration(300).delay(400)} style={styles.contentProvider}>
        <Text style={[styles.productName,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>{route.params.details.name.slice(0,100)}...</Text>
      <View style={styles.priceSection}>
        <View style={styles.valuePrice}>
            {route.params.details.sale_price?<Text style={styles.originalPrice}>৳ {route.params.details.regular_price}</Text>:null}
            <Text style={[styles.discountedPrice,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>৳ {route.params.details.sale_price?route.params.details.sale_price:route.params.details.regular_price}</Text>
        </View>
        <View style={styles.valuePrice}>
            <Text style={styles.ratingText}>{Math.floor(parseInt(route.params.details.average_rating))}</Text>
            <AntDesign name="star" size={20} color={'#FFA902'} />
        </View>
      </View>
      {/* <View style={[styles.colorSection,{paddingRight:50}]}>
      <Text style={[styles.productName,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Color</Text>
      <View style={{flexDirection:'row',width:sizes.width-30,justifyContent:'space-between',marginTop:10}}>
      <Svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
        <Circle cx="15.2727" cy="16" r="15.2727" fill="#7A0BC0"/>
      </Svg>
      <Svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
        <Circle cx="15.2727" cy="16" r="15.2727" fill="#69DCA3"/>
      </Svg>
      <Svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
        <Circle cx="15.2727" cy="16" r="15.2727" fill="#5DABF2"/>
      </Svg>
      <Svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
        <Circle cx="15.2727" cy="16" r="15.2727" fill="#FB983D"/>
      </Svg>
      <Svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
        <Circle cx="15.2727" cy="16" r="15.2727" fill="#866254"/>
      </Svg>
      <Svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
        <Circle cx="15.2727" cy="16" r="15.2727" fill="#EF3D3D"/>
      </Svg>
      <Svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
        <Circle cx="15.2727" cy="16" r="15.2727" fill="#F06BA2"/>
      </Svg>
      </View>
      </View> */}
    
      {/* <View style={styles.sizeSection}>
      <Text style={[styles.productName,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Size</Text>
      <View style={{flexDirection:'row',width:sizes.width,justifyContent:'flex-start',marginTop:10}}>
      <Svg style={{marginRight:10}} xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
        <Circle cx="20" cy="20.2727" r="20" fill="#F9BED6"/>
        <Text style={{alignSelf:'center',fontSize:10,marginTop:10}}>50 ml</Text>
      </Svg>
      <Svg style={{marginRight:10}} xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
        <Circle cx="20" cy="20.2727" r="19.5" stroke="#F06BA2"/>
        <Text style={[{alignSelf:'center',fontSize:10,marginTop:10},{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>100 ml</Text>
      </Svg>
      <Svg style={{marginRight:10}} xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
        <Circle cx="20" cy="20.2727" r="19.5" stroke="#F06BA2"/>
        <Text style={[{alignSelf:'center',fontSize:10,marginTop:10},{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>150 ml</Text>
      </Svg>
      </View>
      </View> */}
      {route.params.details.description !== "" && route.params.details.description !== null && route.params.details.description !== undefined?<View style={styles.detailsSection}>
      <Text style={[styles.productName,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Description</Text>
      <View style={{width:sizes.width,paddingTop:10}}>
      <View style={{overflow:'hidden',height:showDetails?100:route.params.details.description.length>2200?500:300}}>
    <WebView
                showsVerticalScrollIndicator={false}
                    source={{ html: `<meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5"><style>.size-full{height:200px;width:200px}</style>${replaceDomain(route.params.details.description)}` }}
                    style={{width:sizes.width-40,height:'auto',backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}
                />
      </View>
      <Pressable
      onPress={()=>setShowDetails(!showDetails)}
      style={{flexDirection:'row',alignSelf:'center',marginTop:10,marginBottom:10}}>
      <Entypo name={showDetails?'chevron-small-up':'chevron-small-down'} size={20} color={theme === 'dark'?colors.lightModeBg:colors.darkModeBg} style={{marginRight:7}} />
      <Text style={{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg,alignSelf:'center'}}>Show {showDetails?'less':'more'}</Text>
    </Pressable>
      </View>
      </View>:null}
      

      <View style={styles.sizeSection}>
      <Text style={[styles.productName,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Images & Videos</Text>
      <View style={{width:sizes.width,marginTop:10}}>
      <FlatList
      contentContainerStyle={{paddingRight:100}}
      data={route.params.details.images}
      horizontal={true}
      renderItem={({item,index})=>(<Image style={{height:114,width:114,marginRight:10}} source={{uri:item.src}} />)}
      />
      </View>
      </View>
      <View style={styles.shareSection}>
      <Text style={[styles.productName,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Share</Text>
      <View style={{width:sizes.width,marginTop:10,flexDirection:'row'}}>
        <Pressable onPress={()=>shareContent()}>
          <Entypo name={'instagram-with-circle'} size={40} color='#d62976' />
        </Pressable>
        <Pressable onPress={()=>shareContent()} style={{marginLeft:15}}>
        <Entypo name={'facebook-with-circle'} size={40} color='#3b5998' />
        </Pressable>
      </View>
      </View>
      <View style={styles.relatedProductSection}>
      <Text style={[styles.productName,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>Related Products</Text>
      <View style={{width:sizes.width,marginTop:10,alignItems:'flex-start'}}>
      <ProductListView products={allProducts} productLimit={2} />
      </View>
      </View>
      </Animated.View>
        </ScrollView>
      </StackContainer>
      <View style={{position:'absolute',bottom:0,left:0,width:sizes.width,paddingTop:10,height:60,justifyContent:'center',zIndex:10,paddingBottom:30}}>
      {route.params.details.stock_status === 'instock'?<Pressable onPress={()=>{
        cartAdding(route.params.details);
       // navigation.navigate('Checkout');
      }}  style={{backgroundColor:'#691883',width:sizes.width-30,borderRadius:10,elevation:10,alignItems:'center',justifyContent:'center',height:55,alignSelf:'center'}}>
        <Text style={{fontSize:20,fontWeight:600,color:'#FFFFFF'}}>Buy Now</Text>
      </Pressable>:null}
    </View>
    </Container>
    
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  colorSection:{
    marginTop:10,
    marginBottom:10
  },
  sizeSection:{
    marginTop:10,
    marginBottom:10
  },
  shareSection:{
    marginTop:10,
    marginBottom:10
  },
  detailsSection:{
    marginTop:10,
    marginBottom:10
  },
  productImage:{
    height:336,
    width:sizes.width-20,
    alignSelf:'center',
    resizeMode:'cover',
    marginBottom:20,
  },
  contentProvider:{
    padding:10,
  },
  productName:{
    fontSize:16,
    lineHeight:20,
    color:'#303733'
},
originalPrice:{
    textDecorationLine: 'line-through',
    color:'#D71313',
    fontSize:12,
    marginRight:4,
    marginTop:3
},
ratingText:{
    color:'#D71313',
    fontSize:14,
    marginRight:4,
},
discountedPrice:{
    color:'#303733',
    fontSize:14
},
priceSection:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10
},
valuePrice:{
    flexDirection:'row',
},
})