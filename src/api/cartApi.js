import baseUri from "../constants/urls";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
const cartApi = async(dispatch) => {
    const products = await AsyncStorage.getItem("cartItems");
    if(products === null || products === undefined || products === ''){
        //no action will be announced
    }else{
        const structuredDatas = await JSON.parse(products);
        await dispatch({ type: 'UPDATE_CART', cartProducts: structuredDatas });
    }
}

export default cartApi