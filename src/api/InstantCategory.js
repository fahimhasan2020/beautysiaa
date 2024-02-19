import baseUri from "../constants/urls";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
const instantCategory = async(dispatch) => {
    const products = await AsyncStorage.getItem("categories");
    if(products === null || products === undefined){
        const categoryIds = [59,60,57,174,58,81,73,52,155,124,142,53,167]; 
        const perPageParam = 'per_page=100';
        const includeParam = await categoryIds.map(id => `include[]=${id}`).join('&');
        axios.get(`${baseUri.hostExtend}products/categories?${includeParam}&${perPageParam}`, {
        headers: {
            Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
            'Content-Type':'application/json'
          },
      })
      .then(response => {
        dispatch({ type: 'UPDATE_CATEGORIES', categories: response.data });
        AsyncStorage.setItem('categories',JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
    }else{
        const structuredDatas = await JSON.parse(products);
        await dispatch({ type: 'UPDATE_CATEGORIES', categories: structuredDatas });
        const categoryIds = [59,60,57,174,58,81,73,52,155,124,142,53,167]; 
        const perPageParam = 'per_page=100';
        const includeParam = await categoryIds.map(id => `include[]=${id}`).join('&');
        axios.get(`${baseUri.hostExtend}products/categories?${includeParam}&${perPageParam}`, {
            headers: {
                Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
                'Content-Type':'application/json'
              },
          })
          .then(response => {
            AsyncStorage.setItem('categories',JSON.stringify(response.data));
          })
          .catch(error => {
            console.log(error);
          });
    }
    
}

export default instantCategory