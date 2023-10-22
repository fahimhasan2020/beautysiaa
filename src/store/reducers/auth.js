import AsyncStorage from '@react-native-async-storage/async-storage';
const data = {
    'host': 'https://demo.beautysiaa.com/wp-json/',
    'accessToken': '',
    'loggedIn': false,
    "userId": null,
    "loader": false,
    "mainCarouselImages":[],
    "allProducts":[],
    "brands":[],
    "newArrivals":[],
    "bestSelling":[]
};

const reducer = (state = data, action) => {
    switch (action.type) {
        case 'LOGOUT':
            AsyncStorage.setItem('loggedIn', 'false')
            return {
                ...state,
                loggedIn: action.logged,
            };
        case 'LOGIN':
            AsyncStorage.setItem('loggedIn', 'true')
            return {
                ...state,
                loggedIn: action.logged
            };
        case 'CHANGE_TOKEN':
            AsyncStorage.setItem('token', action.token.toString())
            return {
                ...state,
                accessToken: action.token
            };
        case 'CHANGE_USER':
            return {
                ...state,
                userId: action.userId
            };
        case 'UPDATE_CAROUSEL':
            return {
                ...state,
                mainCarouselImages: action.mainCarouselImages
            };
        case 'UPDATE_ALL_PRODUCTS':
            return {
                ...state,
                allProducts: action.allProducts
            };
        case 'UPDATE_ALL_BRANDS':
            return {
                ...state,
                brands: action.brands
            };
        case 'UPDATE_NEW_ARRIVALS':
            return {
                ...state,
                newArrivals: action.newArrivals
            };
        case 'UPDATE_BEST_SELLING':
            return {
                ...state,
                bestSelling: action.bestSelling
            };
        default:
            return state;
    }
};


export default reducer;