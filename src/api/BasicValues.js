import AsyncStorage from "@react-native-async-storage/async-storage";
const basicValues = async(dispatch,i18n) => {
    const currentLanguage = await AsyncStorage.getItem('currentLanguage');
    const loggedIn = await AsyncStorage.getItem("loggedIn");
    const firstName = await AsyncStorage.getItem("firstName");
    const lastName = await AsyncStorage.getItem("lastName");
    const phone = await AsyncStorage.getItem("phone");
    const email = await AsyncStorage.getItem("email");
    const profilePicture = await AsyncStorage.getItem("profilePicture");
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
    if(profilePicture !== null && profilePicture !== undefined && profilePicture !== ''){
        dispatch({type:'UPDATE_PROFILE_PICTURE',profilePicture:profilePicture});
    }
    if(currentLanguage !== null && currentLanguage !== undefined && currentLanguage !== ''){
        if(currentLanguage === 'en'){
            i18n.changeLanguage('en');
        }else{
            i18n.changeLanguage('bd');
        }
    }
    return;
    
}

export default basicValues;