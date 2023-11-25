import baseUri from "../constants/urls";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
const newArrivalsApi = async(dispatch) => {
    const products = await AsyncStorage.getItem("newArrival");
    if(products === null || products === undefined){
        //first time
        axios.get(`${baseUri.hostExtend}products?category=775`, {
        headers: {
            Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
            'Content-Type':'application/json'
          },
      })
      .then(response => {
        //console.log('new arrivals api',response.data);
        dispatch({ type: 'UPDATE_NEW_ARRIVALS', newArrivals: response.data });
        AsyncStorage.setItem('newArrival',JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
    }else{
        const structuredDatas = await JSON.parse(products);
        await dispatch({ type: 'UPDATE_NEW_ARRIVALS', newArrivals: structuredDatas });
        axios.get(`${baseUri.hostExtend}products?category=775`, {
            headers: {
                Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
                'Content-Type':'application/json'
              },
          })
          .then(response => {
            //console.log('new arrivals api',response.data);
            AsyncStorage.setItem('newArrival',JSON.stringify(response.data));
          })
          .catch(error => {
            console.log(error);
          });
    }
    
}

export default newArrivalsApi