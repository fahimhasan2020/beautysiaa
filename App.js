import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import './src/utils/ignorewarning'
import Index from "./src/navigation/Index"
import { Provider } from 'react-redux';
import store from './src/store/store';
import changeNavigationBarColor,{ hideNavigationBar } from 'react-native-navigation-bar-color';
import { enableFreeze } from 'react-native-screens';
enableFreeze(true);
import { encode } from 'base-64';
if (!global.btoa) {
  global.btoa = encode;
}
const App = () => {
  useEffect(()=>{
    changeNavigationBarColor("#000000");
  },[])
  return(<Provider store={store}><Index /></Provider>)
}
export default App;