
import AsyncStorage from "@react-native-async-storage/async-storage";
const initialTheme = async(dispatch,currentTheme) => {
    console.log(currentTheme);
    const currentStorageTheme = await AsyncStorage.getItem('theme');
    if(currentStorageTheme !== null && currentStorageTheme !== undefined){
       await dispatch({type:'UPDATE_THEME',theme:currentStorageTheme});
    }else{
      await dispatch({type:'UPDATE_THEME',theme:currentTheme});
    }
}

export default initialTheme

