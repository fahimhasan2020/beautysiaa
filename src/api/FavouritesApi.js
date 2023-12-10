import AsyncStorage from "@react-native-async-storage/async-storage";
const favouritesApi = async(dispatch) =>{
    try{
    const favouritesStore = await AsyncStorage.getItem("favourites");
    const favouritesStoreList = await AsyncStorage.getItem("favouritesList");
    if(favouritesStore === null || favouritesStore === undefined){
        //first time
    }else{
        //other time
        const structuredDatas = await JSON.parse(favouritesStore);
        const structuredDataList = await JSON.parse(favouritesStoreList);
        await dispatch({ type: 'UPDATE_FAVOURITES', favourites: structuredDatas });
        await dispatch({type: 'UPDATE_FAVOURITES_LIST',favouritesList:structuredDataList});  
    }}catch(error){
        console.log(error);
    }
    
}

export default favouritesApi;