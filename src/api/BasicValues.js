import AsyncStorage from "@react-native-async-storage/async-storage";
const basicValues = async(dispatch) => {
    const loggedIn = await AsyncStorage.getItem("loggedIn");
    const firstName = await AsyncStorage.getItem("firstName");
    const lastName = await AsyncStorage.getItem("lastName");
    const phone = await AsyncStorage.getItem("phone");
    const email = await AsyncStorage.getItem("email");
    if(loggedIn !== null && loggedIn !== undefined && loggedIn === 'true'){
        dispatch({type:'LOGIN',logged:true});
    }
    if(firstName !== null && firstName !== undefined && firstName !== ''){
        dispatch({type:'UPDATE_FIRST_NAME',firstName:firstName});
    }
    if(lastName !== null &&  lastName !== undefined && lastName !== ''){
        dispatch({type:'UPDATE_LAST_NAME',lastName:lastName});
    }
    if(email !== null && email !== undefined && email !== ''){
        dispatch({type:'UPDATE_EMAIL',email:email});
    }
    if(phone !== null && phone !== undefined && phone !== ''){
        dispatch({type:'UPDATE_PHONE_NUMBER',phone:phone});
    }
    return;
    
}

export default basicValues;