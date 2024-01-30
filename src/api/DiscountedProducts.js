import baseUri from "../constants/urls";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
const discountedProducts = async(dispatch) => {
    const products = await AsyncStorage.getItem("discountedProducts");
    if(products === null || products === undefined){
        //first time
        axios.get(`${baseUri.hostExtend}products?category=614`, {
        headers: {
            Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
            'Content-Type':'application/json'
          },
      })
      .then(response => {
        dispatch({ type: 'UPDATE_DISCOUNTED_PRODUCTS', discountedProducts: response.data });
        AsyncStorage.setItem('discountedProducts',JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
    }else{
        const structuredDatas = await JSON.parse(products);
        await dispatch({ type: 'UPDATE_DISCOUNTED_PRODUCTS', discountedProducts: structuredDatas });
        axios.get(`${baseUri.hostExtend}products?category=614`, {
            headers: {
                Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
                'Content-Type':'application/json'
              },
          })
          .then(response => {
            AsyncStorage.setItem('discountedProducts',JSON.stringify(response.data));
          })
          .catch(error => {
            console.log(error);
          });
    }
    
}

export default discountedProducts