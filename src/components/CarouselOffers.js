import { StyleSheet, Text, View,Image,ActivityIndicator } from 'react-native'
import React,{useEffect,useState,useRef,memo} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native';
import LottieView from "lottie-react-native";
import FastImage from 'react-native-fast-image'
import cheerio from 'cheerio';
import axios from "axios"
import { sizes } from '../constants';
const CarouselOffers = () => {
    [activeSlide,setActiveSlide] = useState(0);
    const carouselImages = useSelector(state=>state.auth.mainCarouselImages);
    useEffect(()=>{
      console.log('data from component',carouselImages);
    },[])
  return (
    <View>
      {carouselImages && carouselImages.length>0?<View><Carousel
              data={carouselImages}
              enableMomentum={false}
              lockScrollWhileSnapping={true}
              renderItem={({item})=>(<View style={{width:'100%',height:'auto',margin:5,marginRight:45,marginTop:20,backgroundColor:'#fff',elevation:3}}><FastImage style={{width:'100%',height:sizes.width/2.5}} source={{uri:item.toString()}} /></View>)}
              sliderWidth={sizes.width}
              itemWidth={sizes.width-35}
              autoplay={true}
              autoplayInterval={3000}
              loop={true}
              decelerationRate={3.25}
              onSnapToItem={(index) => setActiveSlide(index) }
            /><View style={{ position: 'absolute', bottom: 0, width: '100%', alignItems: 'center' }}>
            <Pagination inactiveDotColor={'#adadad'} activeDotIndex={activeSlide} dotsLength={carouselImages.length} dotColor={'#000'} />
          </View></View>:<View style={{width:'100%',height:200,margin:5,marginRight:45,marginTop:20,backgroundColor:'#fff',elevation:3,alignItems:'center',justifyContent:'center'}}><LottieView
      style={{width:'100%',height:180,marginTop:10}}
      autoPlay loop
      source={require("../assets/carouselloader.json")}
    /></View>}
    </View>
  )
}

export default memo(CarouselOffers);

const styles = StyleSheet.create({})