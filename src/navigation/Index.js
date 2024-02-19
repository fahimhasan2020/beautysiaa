import {NavigationContainer, useNavigation} from "@react-navigation/native"
import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import {About, Cart, Categories, Checkout, Delivery, EditProfile, Favourites, Home,Login, MyOrders, MyVideo, Notifications, Offers, OrderDetails, PaymentWindow, ProductDetails, Profile, ReturnPolicy, Settings, SingleBrand, SingleCategory, SingleOrderHistory, Success, Support, TermsAndConditions, Voucher} from "./src"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Svg,Path,Ellipse} from "react-native-svg"
import CustomDrawerContent from './CustomDrawerComponent';
import carouselOffersApi from "../api/CarouselOfferApi";
import randomProducts from "../api/RandomProducts";
import brandsApi from "../api/BrandsApi";
import basicValues from "../api/BasicValues";
import newArrivalsApi from "../api/NewArrivalApi";
import bestSellingApi from "../api/BestSellingApi";
import favouritesApi from "../api/FavouritesApi";
import { StatusBar,Pressable,Text,View } from "react-native";
import { colors } from "../constants";
import cartApi from "../api/cartApi";
import { useColorScheme } from "react-native";
import initialTheme from "../api/InitialTheme";
import instantCategory from "../api/InstantCategory";
import getOrders from "../api/GetOrders";
import FullScreenLoader from "../components/FullScreenLoader";
import HelpCenter from "../screens/HelpCenter";
import allCategoriesFetch from "../api/AllCategoriesFetch";
import MyPlays from "../screens/MyPlays";
import LiveSchedule from "../screens/LiveSchedule";
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Feather from 'react-native-vector-icons/Feather'; 
import LiveVideos from "../screens/LiveVideos";
import discountedProducts from "../api/DiscountedProducts";
import { useTranslation } from "react-i18next";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();
import BootSplash from "react-native-bootsplash"
import CommonCart from "../components/CommonCart";

function HomeTabs() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const navigation = useNavigation();

  const tabBarOptions = {
    headerShown:false,
    tabBarActiveTintColor:'#DE0C77',
    tabBarInactiveTintColor:'#333',
    tabBarShowLabel:false,
    tabBarStyle:{
      backgroundColor:'#fff'
    }
  };

  return (
    <Tab.Navigator screenOptions={tabBarOptions} 
    >
      <Tab.Screen
        name="Home"
      
        component={Home}
        options={{
          
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused,color, size }) => (
            <View style={{alignItems:'center'}}><MaterialCommunityIcons style={{opacity:focused?1:0.5}} name="home" color={color} size={18} /><Text style={{color:focused?color:'#333',fontSize:9,textTransform:'uppercase',marginTop:5,opacity:0.5}}>Home</Text></View>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({focused, color, size }) => (
            <View style={{alignItems:'center'}}><Feather style={{opacity:focused?1:0.5}} name="grid" color={color} size={18} /><Text style={{color:focused?color:'#333',fontSize:9,textTransform:'uppercase',marginTop:5,opacity:0.5}}>Categories</Text></View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({focused, color, size }) => (
            <View style={{alignItems:'center'}}><Feather style={{opacity:focused?1:0.5}} name="heart" color={color} size={18} /><Text style={{color:focused?color:'#333',fontSize:9,textTransform:'uppercase',marginTop:5,opacity:0.5}}>Favourites</Text></View>
          ),
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{
          tabBarLabel: 'Offers',
          tabBarIcon: ({focused, color, size }) => (
            <View style={{alignItems:'center'}}><Feather style={{opacity:focused?1:0.5}} name="gift" color={color} size={18} /><Text style={{color:focused?color:'#333',fontSize:9,textTransform:'uppercase',marginTop:5,opacity:0.5}}>Offers</Text></View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            if(loggedIn){
              navigation.jumpTo('Profile');
            }else{
              navigation.navigate('Login');
            }
            
            
          },
        }}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size }) => (
            <View style={{alignItems:'center'}}><FontAwesome style={{opacity:focused?1:0.5}} name="user-o" color={color} size={18} /><Text style={{color:focused?color:'#333',fontSize:9,textTransform:'uppercase',marginTop:5,opacity:0.5}}>Profile</Text></View>
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}




function HomeDrawer() {
  return (
      <Drawer.Navigator id="normalDrawer" initialRouteName="CustomCartDrawer" screenOptions={{headerShown:false,drawerPosition:"left"}} drawerContent={(props) => <CustomDrawerContent {...props}/>}>
        <Drawer.Screen name="CustomCartDrawer" component={CustomCartDrawer} />
      </Drawer.Navigator>
  );
}
function CustomCartDrawer() {
  return (
      <RightDrawer.Navigator id="rightDrawer" initialRouteName="HomeTabs" screenOptions={{headerShown:false,drawerPosition:"Right"}} drawerContent={(props) => <CommonCart {...props}/>}>
        <RightDrawer.Screen name="HomeTabs" component={HomeTabs} />
      </RightDrawer.Navigator>
  );
}

const slideRightToLeftAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
}
function BaseStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeDrawer} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
      options={{
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 500,
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 500,
            },
          },
        },
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateY: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.height, 0],
                  }),
                },
              ],
            },
          };
        },
      }}
      name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Checkout"  options={slideRightToLeftAnimation}
        component={Checkout} />
      <Stack.Screen name="OrderDetails"  options={slideRightToLeftAnimation}
        component={OrderDetails} />
      <Stack.Screen name="Cart"  options={slideRightToLeftAnimation}
        component={Cart} />
      <Stack.Screen name="MyOrders"  options={slideRightToLeftAnimation}
        component={MyOrders} />
      <Stack.Screen name="Settings"  options={slideRightToLeftAnimation}
        component={Settings} />
      <Stack.Screen name="Support"  options={slideRightToLeftAnimation}
        component={Support} />
      <Stack.Screen name="HelpCenter"  options={slideRightToLeftAnimation}
        component={HelpCenter} />
      <Stack.Screen name="About"  options={slideRightToLeftAnimation}
        component={About} />
      <Stack.Screen name="TermsAndConditions"  options={slideRightToLeftAnimation} component={TermsAndConditions} />
      <Stack.Screen name="ReturnPolicy"  options={slideRightToLeftAnimation}
        component={ReturnPolicy} />
      <Stack.Screen name="EditProfile"  options={slideRightToLeftAnimation}
        component={EditProfile} />
      <Stack.Screen name="Voucher"  options={slideRightToLeftAnimation}
        component={Voucher} />
      <Stack.Screen name="MyVideo"  options={slideRightToLeftAnimation}
        component={MyVideo} />
      <Stack.Screen name="Delivery"  options={slideRightToLeftAnimation}
        component={Delivery} />
      <Stack.Screen name="SingleCategory"  options={slideRightToLeftAnimation}
        component={SingleCategory} />
      <Stack.Screen name="SingleOrderHistory"  options={slideRightToLeftAnimation}
        component={SingleOrderHistory} />
      <Stack.Screen name="SingleBrand"  options={slideRightToLeftAnimation}
        component={SingleBrand} />
      <Stack.Screen name="PaymentWindow"  options={slideRightToLeftAnimation}
        component={PaymentWindow} />
      <Stack.Screen name="Notifications"  options={slideRightToLeftAnimation}
        component={Notifications} />
      <Stack.Screen name="LiveVideo"  options={slideRightToLeftAnimation}
        component={LiveVideos} />
      <Stack.Screen name="LiveSchedule"  options={slideRightToLeftAnimation}
        component={LiveSchedule} />
      <Stack.Screen name="MyPlays"  options={slideRightToLeftAnimation}
        component={MyPlays} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}


const Index =() => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const loadingState = useSelector(state=>state.auth.loadingState);
  const currentTheme = useColorScheme();
  useEffect(()=>{
    const init = async() =>{
      await dispatch({type:'UPDATE_LOADING_STATE',loadingState:true});
      await BootSplash.hide({ fade: true });
      const [imageApi,randomProductFetch,allBrands,newArrival,bestSelling,favourites,colorSceme,storeValues,instantCat,totalOrders,allCategoriesFetching,discounted] = await Promise.all([
      carouselOffersApi(dispatch),
      randomProducts(dispatch),
      brandsApi(dispatch),
      newArrivalsApi(dispatch),
      bestSellingApi(dispatch),
      favouritesApi(dispatch),
      cartApi(dispatch),
      initialTheme(dispatch,currentTheme),
      basicValues(dispatch,i18n),
      instantCategory(dispatch),
      getOrders(dispatch),
      allCategoriesFetch(dispatch),
      discountedProducts(dispatch)
    ]);
    }
    init().finally(async () => {
      dispatch({type:'UPDATE_LOADING_STATE',loadingState:false});
    });
  },[])
  return (<NavigationContainer>
    <StatusBar barStyle={'light-content'} backgroundColor={colors.pinkStatusBar} />
    <BaseStack />
    {loadingState?<FullScreenLoader />:null}
    
    </NavigationContainer>)
}

export default Index