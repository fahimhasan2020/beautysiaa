import {NavigationContainer} from "@react-navigation/native"
import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import {About, Cart, Categories, Checkout, Home,Login, Offers, ProductDetails, Profile, ReturnPolicy, SingleBrand, SingleCategory, Success, TermsAndConditions} from "./src"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Svg,Path,Ellipse} from "react-native-svg"
import CustomDrawerContent from './CustomDrawerComponent';
import carouselOffersApi from "../api/CarouselOfferApi";
import randomProducts from "../api/RandomProducts";
import brandsApi from "../api/BrandsApi";
import newArrivalsApi from "../api/NewArrivalApi";
import bestSellingApi from "../api/BestSellingApi";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarStyle:{height:68,borderTopLeftRadius:8,borderTopRightRadius:8,backgroundColor:'rgba(0,0,0,1)'}}}>
       <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              focused?<Svg style={{ marginTop: -69 }} width="60" height="59" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M60 29.6875C43.3784 39.0625 46.5685 58.125 30 58.125C13.4315 58.125 15.8108 37.8125 0 29.6875C0 17.0885 13.4315 6.875 30 6.875C46.5685 6.875 60 17.0885 60 29.6875Z" fill="white"/>
              <Ellipse cx="30.3125" cy="19.375" rx="20.3125" ry="19.375" fill="#DE0C77"/>
              <Path d="M31.0305 8.41003C30.4523 7.86332 29.5477 7.86332 28.9695 8.41003L21.7042 15.279C21.2547 15.704 21 16.2954 21 16.914V25.2679C21 26.5105 22.0074 27.5179 23.25 27.5179H25.5C26.7426 27.5179 27.75 26.5105 27.75 25.2679V21.5179C27.75 21.1037 28.0858 20.7679 28.5 20.7679H31.5C31.9142 20.7679 32.25 21.1037 32.25 21.5179V25.2679C32.25 26.5105 33.2574 27.5179 34.5 27.5179H36.75C37.9926 27.5179 39 26.5105 39 25.2679V16.914C39 16.2954 38.7453 15.704 38.2957 15.279L31.0305 8.41003Z" fill="white"/>
              </Svg>
              :<Svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <Path d="M10.0305 0.410029C9.45226 -0.136676 8.54774 -0.136676 7.96949 0.410029L0.70422 7.27904C0.2547 7.70405 0 8.29538 0 8.91399V17.2679C0 18.5105 1.00735 19.5179 2.25 19.5179H4.5C5.74264 19.5179 6.75 18.5105 6.75 17.2679V13.5179C6.75 13.1037 7.08579 12.7679 7.5 12.7679H10.5C10.9142 12.7679 11.25 13.1037 11.25 13.5179V17.2679C11.25 18.5105 12.2574 19.5179 13.5 19.5179H15.75C16.9926 19.5179 18 18.5105 18 17.2679V8.91399C18 8.29538 17.7453 7.70405 17.2957 7.27904L10.0305 0.410029Z" fill="white"/>
</Svg>

            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              focused?<Svg style={{ marginTop: -69 }} width="60" height="59" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M60 29.6875C43.3784 39.0625 46.5685 58.125 30 58.125C13.4315 58.125 15.8108 37.8125 0 29.6875C0 17.0885 13.4315 6.875 30 6.875C46.5685 6.875 60 17.0885 60 29.6875Z" fill="white"/>
              <Ellipse cx="30.3125" cy="19.375" rx="20.3125" ry="19.375" fill="#DE0C77"/>
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M36.3 19.4286H33.6C32.1087 19.4286 30.9 20.5797 30.9 22V24.5714C30.9 25.9917 32.1087 27.1429 33.6 27.1429H36.3C37.7913 27.1429 39 25.9917 39 24.5714V22C39 20.5797 37.7913 19.4286 36.3 19.4286ZM26.4 19.4286H23.7C22.2087 19.4286 21 20.5797 21 22V24.5714C21 25.9917 22.2087 27.1429 23.7 27.1429H26.4C27.8913 27.1429 29.1 25.9917 29.1 24.5714V22C29.1 20.5797 27.8913 19.4286 26.4 19.4286ZM36.3 10H33.6C32.1087 10 30.9 11.1511 30.9 12.5714V15.1429C30.9 16.5631 32.1087 17.7143 33.6 17.7143H36.3C37.7913 17.7143 39 16.5631 39 15.1429V12.5714C39 11.1511 37.7913 10 36.3 10ZM29.1 12.5714V15.1429C29.1 16.5631 27.8913 17.7143 26.4 17.7143H23.7C22.2087 17.7143 21 16.5631 21 15.1429V12.5714C21 11.1511 22.2087 10 23.7 10H26.4C27.8913 10 29.1 11.1511 29.1 12.5714Z" fill="white"/>
              </Svg>
              :<Svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.3 9.42857H12.6C11.1087 9.42857 9.9 10.5797 9.9 12V14.5714C9.9 15.9917 11.1087 17.1429 12.6 17.1429H15.3C16.7913 17.1429 18 15.9917 18 14.5714V12C18 10.5797 16.7913 9.42857 15.3 9.42857ZM5.4 9.42857H2.7C1.2087 9.42857 0 10.5797 0 12V14.5714C0 15.9917 1.2087 17.1429 2.7 17.1429H5.4C6.8913 17.1429 8.1 15.9917 8.1 14.5714V12C8.1 10.5797 6.8913 9.42857 5.4 9.42857ZM15.3 0H12.6C11.1087 0 9.9 1.15114 9.9 2.57143V5.14286C9.9 6.56314 11.1087 7.71429 12.6 7.71429H15.3C16.7913 7.71429 18 6.56314 18 5.14286V2.57143C18 1.15114 16.7913 0 15.3 0ZM8.1 2.57143V5.14286C8.1 6.56314 6.8913 7.71429 5.4 7.71429H2.7C1.2087 7.71429 0 6.56314 0 5.14286V2.57143C0 1.15114 1.2087 0 2.7 0H5.4C6.8913 0 8.1 1.15114 8.1 2.57143Z" fill="white"/>
</Svg>
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              focused?<Svg style={{ marginTop: -69 }} width="60" height="59" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M60 29.6875C43.3784 39.0625 46.5685 58.125 30 58.125C13.4315 58.125 15.8108 37.8125 0 29.6875C0 17.0885 13.4315 6.875 30 6.875C46.5685 6.875 60 17.0885 60 29.6875Z" fill="white"/>
              <Ellipse cx="30.3125" cy="19.375" rx="20.3125" ry="19.375" fill="#DE0C77"/>
              <Path d="M21.7651 12C21.3426 12 21 12.3426 21 12.7651C21 13.1877 21.3426 13.5303 21.7651 13.5303H22.1411C22.4828 13.5303 22.783 13.7568 22.8768 14.0852L25.3032 22.5775C25.5847 23.5629 26.4854 24.2423 27.5103 24.2423H34.5017C35.4403 24.2423 36.2844 23.6709 36.633 22.7994L38.8891 17.1592C39.2911 16.154 38.5507 15.0606 37.4682 15.0606H24.747L24.3482 13.6648C24.0667 12.6794 23.166 12 22.1411 12H21.7651Z" fill="white"/>
              <Path d="M27.8863 30.3633C29.154 30.3633 30.1817 29.3356 30.1817 28.0679C30.1817 26.8002 29.154 25.7725 27.8863 25.7725C26.6185 25.7725 25.5908 26.8002 25.5908 28.0679C25.5908 29.3356 26.6185 30.3633 27.8863 30.3633Z" fill="white"/>
              <Path d="M34.0073 30.3633C35.275 30.3633 36.3028 29.3356 36.3028 28.0679C36.3028 26.8002 35.275 25.7725 34.0073 25.7725C32.7396 25.7725 31.7119 26.8002 31.7119 28.0679C31.7119 29.3356 32.7396 30.3633 34.0073 30.3633Z" fill="white"/>
              </Svg>
              :<FontAwesome name="shopping-cart" size={18} color={color}  />
            ),
          }}
        />
        <Tab.Screen
          name="Offer"
          component={Offers}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              focused?<Svg style={{ marginTop: -69 }} width="60" height="59" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M60 29.6875C43.3784 39.0625 46.5685 58.125 30 58.125C13.4315 58.125 15.8108 37.8125 0 29.6875C0 17.0885 13.4315 6.875 30 6.875C46.5685 6.875 60 17.0885 60 29.6875Z" fill="white"/>
              <Ellipse cx="30.3125" cy="19.375" rx="20.3125" ry="19.375" fill="#DE0C77"/>
              <Path d="M37.8844 19.0006L38.8792 17.2813C39.1279 16.8497 38.9801 16.2991 38.5503 16.0504L36.8292 15.0556V13.0732C36.8292 12.5749 36.4264 12.1721 35.9281 12.1721H33.9466L32.9527 10.4519C32.8328 10.2455 32.6355 10.0941 32.4057 10.032C32.175 9.96888 31.929 10.0022 31.7218 10.1221L30.0007 11.1169L28.2796 10.1212C27.848 9.87156 27.2974 10.0202 27.0487 10.451L26.0539 12.1721H24.0724C23.5741 12.1721 23.1713 12.5749 23.1713 13.0732V15.0547L21.4502 16.0495C21.2429 16.1693 21.0924 16.3667 21.0312 16.5974C20.9699 16.8289 21.0023 17.074 21.1213 17.2813L22.1161 19.0006L21.1213 20.7199C21.0014 20.9271 20.969 21.1731 21.0303 21.4047C21.0915 21.6354 21.242 21.8327 21.4493 21.9517L23.1704 22.9465V24.928C23.1704 25.4263 23.5732 25.8291 24.0715 25.8291H26.0539L27.0487 27.5502C27.1685 27.7565 27.3659 27.907 27.5966 27.9701C27.6732 27.9899 27.7507 28.0007 27.829 28.0007C27.9858 28.0007 28.1417 27.9593 28.2805 27.8791L29.9998 26.8843L31.7209 27.8791C31.9272 27.9989 32.1741 28.0305 32.4048 27.9692C32.6355 27.9079 32.8328 27.7574 32.9518 27.5502L33.9457 25.8291H35.9272C36.4255 25.8291 36.8283 25.4263 36.8283 24.928V22.9465L38.5494 21.9517C38.9801 21.7021 39.1279 21.1506 38.8783 20.7199L37.8844 19.0006ZM27.747 14.4861C28.4932 14.4861 29.0987 15.0916 29.0987 15.8377C29.0987 16.5838 28.4932 17.1894 27.747 17.1894C27.0009 17.1894 26.3954 16.5838 26.3954 15.8377C26.3954 15.0916 27.0009 14.4861 27.747 14.4861ZM28.0174 23.1366L26.5756 22.0562L31.9822 14.8474L33.424 15.9278L28.0174 23.1366ZM32.2525 23.4971C31.5064 23.4971 30.9009 22.8915 30.9009 22.1454C30.9009 21.3993 31.5064 20.7938 32.2525 20.7938C32.9986 20.7938 33.6042 21.3993 33.6042 22.1454C33.6042 22.8915 32.9986 23.4971 32.2525 23.4971Z" fill="white"/>
              </Svg>
              :<Svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<Path d="M16.8844 9.00058L17.8792 7.28128C18.1279 6.84966 17.9801 6.29909 17.5503 6.05038L15.8292 5.05557V3.07316C15.8292 2.57485 15.4264 2.17206 14.9281 2.17206H12.9466L11.9527 0.451869C11.8328 0.245518 11.6355 0.0941334 11.4057 0.0319577C11.175 -0.0311191 10.929 0.0022216 10.7218 0.122068L9.00069 1.11688L7.2796 0.121166C6.84797 -0.128438 6.2974 0.0202436 6.0487 0.450968L5.05389 2.17206H3.07238C2.57407 2.17206 2.17128 2.57485 2.17128 3.07316V5.05467L0.450183 6.04948C0.242931 6.16933 0.0924479 6.36667 0.0311733 6.59735C-0.0301013 6.82893 0.00233812 7.07403 0.121283 7.28128L1.11609 9.00058L0.121283 10.7199C0.00143703 10.9271 -0.0310023 11.1731 0.0302723 11.4047C0.0915469 11.6354 0.24203 11.8327 0.449282 11.9517L2.17038 12.9465V14.928C2.17038 15.4263 2.57317 15.8291 3.07147 15.8291H5.05389L6.0487 17.5502C6.16854 17.7565 6.36588 17.907 6.59657 17.9701C6.67316 17.9899 6.75065 18.0007 6.82905 18.0007C6.98584 18.0007 7.14173 17.9593 7.2805 17.8791L8.99979 16.8843L10.7209 17.8791C10.9272 17.9989 11.1741 18.0305 11.4048 17.9692C11.6355 17.9079 11.8328 17.7574 11.9518 17.5502L12.9457 15.8291H14.9272C15.4255 15.8291 15.8283 15.4263 15.8283 14.928V12.9465L17.5494 11.9517C17.9801 11.7021 18.1279 11.1506 17.8783 10.7199L16.8844 9.00058ZM6.74705 4.48608C7.49316 4.48608 8.09869 5.09162 8.09869 5.83773C8.09869 6.58383 7.49316 7.18937 6.74705 7.18937C6.00094 7.18937 5.3954 6.58383 5.3954 5.83773C5.3954 5.09162 6.00094 4.48608 6.74705 4.48608ZM7.01738 13.1366L5.57562 12.0562L10.9822 4.84742L12.424 5.92784L7.01738 13.1366ZM11.2525 13.4971C10.5064 13.4971 9.90089 12.8915 9.90089 12.1454C9.90089 11.3993 10.5064 10.7938 11.2525 10.7938C11.9986 10.7938 12.6042 11.3993 12.6042 12.1454C12.6042 12.8915 11.9986 13.4971 11.2525 13.4971Z" fill="white"/>
</Svg>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            
            tabBarIcon: ({ focused, color, size }) => (
              focused?<Svg style={{ marginTop: -69 }} width="60" height="59" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M60 29.6875C43.3784 39.0625 46.5685 58.125 30 58.125C13.4315 58.125 15.8108 37.8125 0 29.6875C0 17.0885 13.4315 6.875 30 6.875C46.5685 6.875 60 17.0885 60 29.6875Z" fill="white"/>
              <Ellipse cx="30.3125" cy="19.375" rx="20.3125" ry="19.375" fill="#DE0C77"/>
              <Path d="M30 19.2857C32.8406 19.2857 35.1429 16.9835 35.1429 14.1429C35.1429 11.3022 32.8406 9 30 9C27.1594 9 24.8571 11.3022 24.8571 14.1429C24.8571 16.9835 27.1594 19.2857 30 19.2857ZM33.6 20.5714H32.929C32.0371 20.9812 31.0446 21.2143 30 21.2143C28.9554 21.2143 27.967 20.9812 27.071 20.5714H26.4C23.4187 20.5714 21 22.9902 21 25.9714V27.6429C21 28.7076 21.8638 29.5714 22.9286 29.5714H37.0714C38.1362 29.5714 39 28.7076 39 27.6429V25.9714C39 22.9902 36.5813 20.5714 33.6 20.5714Z" fill="white"/>
              </Svg>
              :<FontAwesome name="user" size={18} color={color} />
            ),
          }}
        />
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
      <Stack.Screen name="About"  options={slideRightToLeftAnimation}
        component={About} />
      <Stack.Screen name="TermsAndConditions"  options={slideRightToLeftAnimation} component={TermsAndConditions} />
      <Stack.Screen name="ReturnPolicy"  options={slideRightToLeftAnimation}
        component={ReturnPolicy} />
      <Stack.Screen name="SingleCategory"  options={slideRightToLeftAnimation}
        component={SingleCategory} />
      <Stack.Screen name="SingleBrand"  options={slideRightToLeftAnimation}
        component={SingleBrand} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}


const Index =() => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const init = async() =>{
      const [imageApi,randomProductFetch,allBrands,newArrival,bestSelling] = await Promise.all([
      carouselOffersApi(dispatch),
      randomProducts(dispatch),
      brandsApi(dispatch),
      newArrivalsApi(dispatch),
      bestSellingApi(dispatch)
    ]);
    }
    init().finally(async () => {
      
    });
  },[])
  return <NavigationContainer><BaseStack /></NavigationContainer>
}

export default Index