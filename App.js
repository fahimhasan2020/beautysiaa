import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { View } from 'react-native'
import Index from "./src/navigation/Index"
import { Provider } from 'react-redux';
import store from './src/store/store';
import { hideNavigationBar } from 'react-native-navigation-bar-color';
const App = () => {
  useEffect(()=>{
    hideNavigationBar();
  },[])
  return(<Provider store={store}><Index /></Provider>)
}
export default App;