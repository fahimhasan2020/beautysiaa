import baseUri from "../constants/urls";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
const randomProducts = async(dispatch) => {
    const products = await AsyncStorage.getItem("randomProducts");
    if(products === null || products === undefined){
        //first time
        axios.get(`${baseUri.hostExtend}products`, {
        headers: {
            Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
            'Content-Type':'application/json'
          },
      })
      .then(response => {
        dispatch({ type: 'UPDATE_ALL_PRODUCTS', allProducts: response.data });
        AsyncStorage.setItem('randomProducts',JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
    }else{
        const structuredDatas = await JSON.parse(products);
        await dispatch({ type: 'UPDATE_ALL_PRODUCTS', allProducts: structuredDatas });
        axios.get(`${baseUri.hostExtend}products`, {
            headers: {
                Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
                'Content-Type':'application/json'
              },
          })
          .then(response => {
            AsyncStorage.setItem('randomProducts',JSON.stringify(response.data));
          })
          .catch(error => {
            console.log(error);
          });
    }
    
}

export default randomProducts