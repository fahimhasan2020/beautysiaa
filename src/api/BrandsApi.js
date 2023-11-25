import { useDispatch,useSelector } from 'react-redux';
import cheerio from 'cheerio';
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseUri from "../constants/urls";
const brandsApi = async(dispatch) =>{
    try{const allBrands = await AsyncStorage.getItem("brands");
    if(allBrands === null || allBrands === undefined){
        //first time
        const fetchBrands = await fetch(baseUri.host + "wc/v1/products/brands");
        const brandsFormatted = await fetchBrands.json();
        dispatch({ type: 'UPDATE_ALL_BRANDS', brands: brandsFormatted });
        AsyncStorage.setItem('brands',JSON.stringify(brandsFormatted))
    }else{
        //other time
        const structuredDatas = await JSON.parse(allBrands);
        
        await dispatch({ type: 'UPDATE_ALL_BRANDS', brands: structuredDatas });
        const fetchBrands = await fetch(baseUri.host + "wc/v1/products/brands");
        const brandsFormatted = await fetchBrands.json();
        AsyncStorage.setItem('brands',JSON.stringify(brandsFormatted));   
    }}catch(error){
        console.log(error);
    }
    
}

export default brandsApi;


