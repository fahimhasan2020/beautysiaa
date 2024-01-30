import { StyleSheet, Text, View,Dimensions,StatusBar,TextInput,ScrollView,Pressable,FlatList } from 'react-native'
import React,{memo,useMemo,useCallback,useRef,useState} from 'react'
import { useTranslation } from 'react-i18next';
import { Svg ,Path,Circle} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import baseUri from '../constants/urls'
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useSelector } from 'react-redux';
import Thumb from './Slider/Thumb';
import FastImage from 'react-native-fast-image';
import Rail from './Slider/Rail';
import Notch from './Slider/Notch';
import RailSelected from './Slider/RailSelected';
import Label from './Slider/Label';
import { colors, sizes } from '../constants';
import BottomSheet from '@gorhom/bottom-sheet';
import RangeSlider from 'rn-range-slider';
import axios from "axios"
const TabContainer = ({children}) => {
  const bottomSheetRef = useRef();
  const {t,i18n} = useTranslation();
  const [freeShipping,setFreeShipping] = useState(false);
  const [flashSale,setFlashSale] = useState(false);
  const [searchResults,setSearchResults] = useState([]);
  const [searchString,setSearchString] = useState("");
  const [comboOffer,setCombooffer] = useState(false);
  const [discountProducts,setDiscountProducts] = useState(false);
  const [low,setLow] = useState(0);
  const [high,setHigh] = useState(100);
  const [showFilter,setShowFilter] = useState(false);
  const snapPoints = useMemo(() => ['50%', '80%'], []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  const theme = useSelector(state=>state.auth.theme);
  const cartProducts = useSelector(state=>state.auth.cartProducts);
  const navigation = useNavigation();
  const renderThumb = useCallback(() => <Thumb/>, []);
  const renderRail = useCallback(() => <Rail/>, []);
  const renderRailSelected = useCallback(() => <RailSelected/>, []);
  const renderLabel = useCallback(value => <Label text={value}/>, []);
  const renderNotch = useCallback(() => <Notch/>, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  const handleProductSearch = (value) =>{
    const encodedValue = encodeURIComponent(value);
    setSearchString(value);
    if(value.length>3){
      axios.get(`${baseUri.hostExtend}products?search=${encodedValue}`, {
      headers: {
          Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
          'Content-Type':'application/json'
        },
    })
    .then(response => {
      setSearchResults(response.data);
    })
    .catch(error => {
      console.log(error);
    });
    }
    
  }

  return (
    <View style={{flex:1,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}}>
      <View style={{backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg,padding:5}}>
        <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',paddingLeft:13,paddingRight:13,paddingTop:11,paddingBottom:9}}>
          <Pressable onPress={()=>{navigation.toggleDrawer()}}><Svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <Path d="M21.7208 11.9167H4.27917C3.71077 11.9167 3.25 12.3775 3.25 12.9459V13.0542C3.25 13.6226 3.71077 14.0834 4.27917 14.0834H21.7208C22.2892 14.0834 22.75 13.6226 22.75 13.0542V12.9459C22.75 12.3775 22.2892 11.9167 21.7208 11.9167Z" fill={theme === 'dark'?colors.lightModeBg:'#262E3D'}/>
  <Path d="M21.7208 17.3333H4.27917C3.71077 17.3333 3.25 17.794 3.25 18.3624V18.4708C3.25 19.0391 3.71077 19.4999 4.27917 19.4999H21.7208C22.2892 19.4999 22.75 19.0391 22.75 18.4708V18.3624C22.75 17.794 22.2892 17.3333 21.7208 17.3333Z" fill={theme === 'dark'?colors.lightModeBg:'#262E3D'}/>
  <Path d="M21.7208 6.5H4.27917C3.71077 6.5 3.25 6.96077 3.25 7.52917V7.6375C3.25 8.20589 3.71077 8.66667 4.27917 8.66667H21.7208C22.2892 8.66667 22.75 8.20589 22.75 7.6375V7.52917C22.75 6.96077 22.2892 6.5 21.7208 6.5Z" fill={theme === 'dark'?colors.lightModeBg:'#262E3D'}/>
</Svg></Pressable>
        
          <Text style={styles.tabHeaderStyle}>BEAUTYSIAA</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',width:70}}>
            <Pressable onPress={()=>{
              navigation.navigate('Cart');
            }}>
             
              <MaterialIcons name="shopping-cart" color={colors.primary} size={23} />{cartProducts.length>0?<View style={{backgroundColor:'red',borderRadius:15,alignItems:'center',justifyContent:'center',position:'absolute',top:-5,left:0,height:12,width:12}}><Text style={{color:'white',fontSize:8}}>{cartProducts.length}</Text></View>:null}
            </Pressable>
            <Pressable onPress={()=>{
              navigation.navigate('Notifications');
            }}>           
<Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <Circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
  <Path d="M15 6C12.525 6 10.5 8.025 10.5 10.5C10.5 12.84 9.33 14.955 7.485 16.485C6.5625 17.25 6 18.33 6 19.5H24C24 18.33 23.46 17.25 22.515 16.485C20.67 14.955 19.5 12.84 19.5 10.5C19.5 8.025 17.4975 6 15 6ZM12.75 21.75C12.75 22.9875 13.7625 24 15 24C16.2375 24 17.25 22.9875 17.25 21.75H12.75Z" fill="#F06BA2"/>
</Svg></Pressable>
</View>
          
        </View>
        <View>
          <TextInput 
          value={searchString}
          onChangeText={(value)=>handleProductSearch(value)}
          placeholderTextColor={theme === 'dark'?colors.lightModeBg:colors.darkModeBg}
          style={[styles.inputBox,{backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg}]} placeholder={t('searchProducts')} /><Svg style={{position:'absolute',top:6,left:18}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <Path d="M14 14L18 18L14 14Z" fill="white"/>
  <Path d="M14 14L18 18" stroke="#DE0C77" stroke-width="2.30786" stroke-linecap="round" stroke-linejoin="round"/>
  <Path d="M2 8.85714C2 12.6442 5.07005 15.7143 8.85714 15.7143C10.7539 15.7143 12.471 14.9441 13.7123 13.6994C14.9495 12.4591 15.7143 10.7474 15.7143 8.85714C15.7143 5.07005 12.6442 2 8.85714 2C5.07005 2 2 5.07005 2 8.85714Z" fill="none" stroke="#DE0C77" stroke-width="2.30786" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
{searchString.length>0?<Pressable onPress={()=>{setSearchString('');setSearchResults([])}} style={{position:'absolute',top:6,right:18}}><AntDesign name="close" size={20} color="red" /></Pressable>:null}
        </View>
        {searchResults.length>0?<FlatList showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} horizontal={true} contentContainerStyle={{marginLeft:13,marginRight:13,marginTop:9,height:25}} 
        data={searchResults}
        renderItem={({item,index})=>(item.brands.length>0?<Pressable onPress={()=>{
          setSearchString("");
          navigation.navigate('SingleBrand',{title:item.brands[0].name,categoryId:item.brands[0].name});
          setSearchResults([]);
        }} style={{backgroundColor:'#F5F5F5',padding:3,borderRadius:2,width:'auto',paddingLeft:10,paddingRight:10,alignItems:'center',marginRight:10}}>
        <Text style={styles.inActiveBadgeText}>{item.brands[0].name.slice(0,10)}</Text>
      </Pressable>:null)}
        />:null}        
      </View>
      {children}
      {searchResults.length>0 && searchString.length>0?<View style={{position:'absolute',top:130,left:0,right:0,height:sizes.height,width:sizes.width,backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg,elevation:3}}>
      <FlatList showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={searchResults} 
      keyExtractor={(item)=>item.id.toString()}
      renderItem={({item,index})=>(<Pressable
      onPress={()=>{
        setSearchString("");
        navigation.navigate('ProductDetails',{productId:item.id,details:item});
        setSearchResults([]);
      }}
      contentContainerStyle={{paddingBottom:500}}
      style={styles.singleSearchResult}>
      <FastImage source={{uri:item.images[0].src}} style={{height:100,width:100,marginRight:10,borderRadius:5}} />
      <View>
        <Text style={[styles.singleResultStyle,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>{item.name}</Text>
        <Text style={[styles.singleResultStyleSmall,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>{Math.floor(parseInt(item.average_rating))} <AntDesign name="star" /></Text>
        <Text style={[styles.singleResultStyleSmall,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>{item.sale_price} ৳</Text>
      </View>
      </Pressable>)}
      
      />
      

      </View>:null}
      {showFilter?<BottomSheet
        style={{backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg,elevation:3,borderRadius:10}}
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={[styles.contentContainer,{backgroundColor:theme === 'dark'?colors.darkModeBg:colors.lightModeBg,flex:1}]}>
        <Text style={{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg,fontSize:15,fontWeight:'bold',marginBottom:20}}>{t('priceRange')} {low} - {high}</Text>
        <RangeSlider
          style={styles.slider}
          min={0}
          max={10000}
          step={500}
          floatingLabel
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={handleValueChange}
        />
        <View
        style={styles.singleFilter}>
        <Text style={[styles.singleFilterFont,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>{t('flashSale')}</Text>
        <BouncyCheckbox
          size={25}
          value={flashSale}
          disableText
          fillColor="#DE0C77"
          unfillColor="#FFFFFF"
          text="Custom Checkbox"
          iconStyle={{ borderColor: "#DE0C77",borderRadius:2 }}
          innerIconStyle={{ borderWidth: 2,borderRadius:2 }}
          outerIconStyle={{borderRadius:2}}
          onPress={(isChecked) => {
            setFlashSale(isChecked);
          }}
        />
        </View>
        <View style={styles.singleFilter}>
        <Text style={[styles.singleFilterFont,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>{t('freeShipping')}</Text>
        <BouncyCheckbox
          size={25}
          value={freeShipping}
          disableText
          fillColor="#DE0C77"
          unfillColor="#FFFFFF"
          text="Custom Checkbox"
          iconStyle={{ borderColor: "#DE0C77",borderRadius:2 }}
          innerIconStyle={{ borderWidth: 2,borderRadius:2 }}
          outerIconStyle={{borderRadius:2}}
          onPress={(isChecked) => {
            setFreeShipping(isChecked);
          }}
        />
        </View>
        <View style={styles.singleFilter}>
        <Text style={[styles.singleFilterFont,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>{t('discountedProducts')}</Text>
        <BouncyCheckbox
          size={25}
          value={discountProducts}
          disableText
          fillColor="#DE0C77"
          unfillColor="#FFFFFF"
          text="Custom Checkbox"
          iconStyle={{ borderColor: "#DE0C77",borderRadius:2 }}
          innerIconStyle={{ borderWidth: 2,borderRadius:2 }}
          outerIconStyle={{borderRadius:2}}
          onPress={(isChecked) => {
            setDiscountProducts(isChecked);
          }}
        />
        </View>
        <View style={styles.singleFilter}>
        <Text style={[styles.singleFilterFont,{color:theme === 'dark'?colors.lightModeBg:colors.darkModeBg}]}>{t('comboOffer')}</Text>
        <BouncyCheckbox
          size={25}
          value={comboOffer}
          disableText
          fillColor="#DE0C77"
          unfillColor="#FFFFFF"
          text="Custom Checkbox"
          iconStyle={{ borderColor: "#DE0C77",borderRadius:2 }}
          innerIconStyle={{ borderWidth: 2,borderRadius:2 }}
          outerIconStyle={{borderRadius:2}}
          onPress={(isChecked) => {
            setCombooffer(isChecked);
          }}
        />
        </View>
        <Pressable onPress={()=>setShowFilter(false)} style={{alignItems:'center',justifyContent:'center',paddingHorizontal:50,paddingVertical:10,backgroundColor:'#DE0C77',marginTop:20,borderRadius:5}}>
          <Text style={{color:'#fff'}}>{t('close')}</Text>
        </Pressable>
        </View>
      </BottomSheet>:null}
     
    </View>
  )
}

export default memo(TabContainer)

const styles = StyleSheet.create({
  tabHeaderStyle:{fontSize:18,color:'#DE0C77',fontWeight:'500'},
  inputBox:{height:35,borderWidth:1,borderColor:'#F06BA2',borderRadius:4,width:'93%',alignSelf:'center',paddingLeft:30,paddingRight:30},
  activeBadgeText:{fontSize:12,color:'white'},
  inActiveBadgeText:{fontSize:12,color:'#BFBFBF'},
  contentContainer:{
    backgroundColor:'#fff',
    padding:10
    
  },
  singleResultStyle:{
    fontSize:18,
    width:sizes.width/1.8,
    color:'#000',
    fontWeight:'bold'
  },
  singleResultStyleSmall:{
    fontSize:12,
    color:'#000',
    fontWeight:'bold'
  },
  singleSearchResult:{
    padding:10,
    paddingRight:30,
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  singleFilter:{
    width:'100%',
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  singleFilterFont:{
    fontSize:15,
    fontWeight:'bold',
    color:"#000"
  }
})