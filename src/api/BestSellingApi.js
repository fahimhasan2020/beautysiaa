import baseUri from "../constants/urls";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
const bestSellingApi = async(dispatch) => {
    const products = await AsyncStorage.getItem("bestSelling");
    if(products === null || products === undefined){
        //first time
        axios.get(`${baseUri.hostExtend}products?category=771`, {
        headers: {
            Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
            'Content-Type':'application/json'
          },
      })
      .then(response => {
        dispatch({ type: 'UPDATE_BEST_SELLING', bestSelling: response.data });
        AsyncStorage.setItem('bestSelling',JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
    }else{
        const structuredDatas = await JSON.parse(products);
        await dispatch({ type: 'UPDATE_BEST_SELLING', bestSelling: structuredDatas });
        axios.get(`${baseUri.hostExtend}products?category=771`, {
            headers: {
                Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
                'Content-Type':'application/json'
              },
          })
          .then(response => {
            AsyncStorage.setItem('bestSelling',JSON.stringify(response.data));
          })
          .catch(error => {
            console.log(error);
          });
    }
    
}

export default bestSellingApi