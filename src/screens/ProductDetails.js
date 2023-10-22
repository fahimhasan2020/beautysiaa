import { StyleSheet, Text, View,Image,ScrollView,Pressable,useWindowDimensions,FlatList,Share } from 'react-native'
import React,{useState} from 'react'
import Animated,{FadeInLeft,FadeOutLeft} from "react-native-reanimated"
import { useNavigation,useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import { sizes } from '../constants'
import Container from '../components/Container'
import FastImage from 'react-native-fast-image'
import { Svg,Path,Circle } from 'react-native-svg'
import StackContainer from '../components/StackContainer'
import RenderHtml from 'react-native-render-html';
import { useSelector } from 'react-redux'
import ProductListView from '../components/ProductListView'
const ProductDetails = () => {
  const allProducts = useSelector(state=>state.auth.allProducts);
  const { width } = useWindowDimensions();
  const route = useRoute();
  const navigation = useNavigation();
  const [showDetails,setShowDetails] = useState(false);
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
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:300}}>
      <FastImage source={{uri:route.params.details.images[0].src}} style={styles.productImage} />
      <Animated.View entering={FadeInLeft.duration(300).delay(400)} exiting={FadeOutLeft.duration(300).delay(400)} style={styles.contentProvider}>
        <Text style={styles.productName}>{route.params.details.name.slice(0,100)}...</Text>
      <View style={styles.priceSection}>
        <View style={styles.valuePrice}>
            <Text style={styles.originalPrice}>৳ {route.params.details.regular_price}</Text>
            <Text style={styles.discountedPrice}>৳ {route.params.details.sale_price}</Text>
        </View>
        <View style={styles.valuePrice}>
            <Text style={styles.ratingText}>{Math.floor(parseInt(route.params.details.average_rating))}</Text>
            <AntDesign name="star" size={20} color={'#FFA902'} />
        </View>
      </View>
      <View style={[styles.colorSection,{paddingRight:50}]}>
      <Text style={styles.productName}>Color</Text>
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
      </View>
      <View style={styles.sizeSection}>
      <Text style={styles.productName}>Size</Text>
      <View style={{flexDirection:'row',width:sizes.width,justifyContent:'flex-start',marginTop:10}}>
      <Svg style={{marginRight:10}} xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
        <Circle cx="20" cy="20.2727" r="20" fill="#F9BED6"/>
        <Text style={{alignSelf:'center',fontSize:10,marginTop:10}}>50 ml</Text>
      </Svg>
      <Svg style={{marginRight:10}} xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
        <Circle cx="20" cy="20.2727" r="19.5" stroke="#F06BA2"/>
        <Text style={{alignSelf:'center',fontSize:10,marginTop:10}}>100 ml</Text>
      </Svg>
      <Svg style={{marginRight:10}} xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
        <Circle cx="20" cy="20.2727" r="19.5" stroke="#F06BA2"/>
        <Text style={{alignSelf:'center',fontSize:10,marginTop:10}}>150 ml</Text>
      </Svg>
      </View>
      </View>
      <View style={styles.detailsSection}>
      <Text style={styles.productName}>Description</Text>
      <View style={{width:sizes.width,paddingTop:10}}>
      <View style={{overflow:'hidden',height:showDetails?'auto':200}}>
        <RenderHtml
      contentWidth={width-100}
      style={{padding:20,paddingRight:40}}
      source={{html:route.params.details.description}}
    />
      </View>
      <Pressable
      onPress={()=>setShowDetails(!showDetails)}
      style={{flexDirection:'row',alignSelf:'center',marginTop:10,marginBottom:10}}>
      <Entypo name={showDetails?'chevron-small-up':'chevron-small-down'} size={20} color={'#000'} style={{marginRight:7}} />
      <Text style={{color:'#000',alignSelf:'center'}}>Show {showDetails?'less':'more'}</Text>
    </Pressable>
      </View>
      </View>
      <View style={styles.sizeSection}>
      <Text style={styles.productName}>Images & Videos</Text>
      <View style={{width:sizes.width,marginTop:10}}>
      <FlatList
      data={route.params.details.images}
      horizontal={true}
      renderItem={({item,index})=>(<Image style={{height:114,width:114}} source={{uri:item.src}} />)}
      />
      </View>
      </View>
      <View style={styles.shareSection}>
      <Text style={styles.productName}>Share</Text>
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
      <Text style={styles.productName}>Related Products</Text>
      <View style={{width:sizes.width,marginTop:10,flexDirection:'row'}}>
      <ProductListView products={allProducts} productLimit={2} />
      </View>
      </View>
      </Animated.View>
        </ScrollView>
      </StackContainer>
      <View style={{position:'absolute',bottom:0,left:0,width:sizes.width,backgroundColor:'#fff',paddingTop:10,height:60,justifyContent:'center',zIndex:10,paddingBottom:30}}>
      <Pressable onPress={()=>{
        navigation.navigate('Checkout');
      }}  style={{backgroundColor:'#691883',width:sizes.width-30,borderRadius:10,elevation:10,alignItems:'center',justifyContent:'center',height:55,alignSelf:'center'}}>
        <Text style={{fontSize:20,fontWeight:600,color:'#FFFFFF'}}>Buy Now</Text>
      </Pressable>
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