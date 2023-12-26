import AsyncStorage from "@react-native-async-storage/async-storage";
const getOrders = async(dispatch) => {
    const products = await AsyncStorage.getItem("orders");
    if(products === null || products === undefined){
        //first time
    }else{
        const structuredDatas = await JSON.parse(products);
        await dispatch({ type: 'UPDATE_ORDER', orders: structuredDatas });
    }
    
}

export default getOrders