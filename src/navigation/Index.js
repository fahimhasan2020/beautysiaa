import {NavigationContainer, useNavigation} from "@react-navigation/native"
import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import {About, Cart, Categories, Checkout, Delivery, EditProfile, Favourites, Home,Login, MyOrders, MyVideo, Offers, OrderDetails, PaymentWindow, ProductDetails, Profile, ReturnPolicy, Settings, SingleBrand, SingleCategory, SingleOrderHistory, Success, Support, TermsAndConditions, Voucher} from "./src"
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
import CustomBottomTab from "./CustomBottomTab";
import { StatusBar } from "react-native";
import { colors } from "../constants";
import cartApi from "../api/cartApi";
import { useColorScheme } from "react-native";
import initialTheme from "../api/InitialTheme";
import instantCategory from "../api/InstantCategory";
import getOrders from "../api/GetOrders";
import FullScreenLoader from "../components/FullScreenLoader";
import HelpCenter from "../screens/HelpCenter";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTabs() {
  const loggedIn = useSelector(state=>state.auth.loggedIn);
  const navigation = useNavigation();
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          options={{tabBarLabel: 'Home'}}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Categories'}}
          name="Categories"
          component={Categories}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Cart'}}
          name="Cart"
          component={Cart}
        />

        <Tab.Screen
          options={{tabBarLabel: 'Offers'}}
          name="Offers"
          component={Offers}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Profile'}}
          name="Profile"
          component={Profile}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}




function HomeDrawer() {
  return (
      <Drawer.Navigator initialRouteName="HomeTabs" screenOptions={{headerShown:false}} drawerContent={(props) => <CustomDrawerContent {...props}/>}>
        <Drawer.Screen name="HomeTabs" component={HomeTabs} />
      </Drawer.Navigator>
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
      <Stack.Screen name="Favourites"  options={slideRightToLeftAnimation}
        component={Favourites} />
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
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}


const Index =() => {
  const dispatch = useDispatch();
  const loadingState = useSelector(state=>state.auth.loadingState);
  const currentTheme = useColorScheme();
  useEffect(()=>{
    const init = async() =>{
      const [imageApi,randomProductFetch,allBrands,newArrival,bestSelling,favourites,colorSceme,storeValues,instantCat,totalOrders] = await Promise.all([
      carouselOffersApi(dispatch),
      randomProducts(dispatch),
      brandsApi(dispatch),
      newArrivalsApi(dispatch),
      bestSellingApi(dispatch),
      favouritesApi(dispatch),
      cartApi(dispatch),
      initialTheme(dispatch,currentTheme),
      basicValues(dispatch),
      instantCategory(dispatch),
      getOrders(dispatch)
    ]);
    }
    init().finally(async () => {
      
    });
  },[])
  return (<NavigationContainer>
    <StatusBar barStyle={'light-content'} backgroundColor={colors.pinkStatusBar} />
    <BaseStack />
    {loadingState?<FullScreenLoader />:null}
    </NavigationContainer>)
}

export default Index