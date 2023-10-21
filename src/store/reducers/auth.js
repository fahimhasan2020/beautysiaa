import AsyncStorage from '@react-native-async-storage/async-storage';
const data = {
    'host': 'https://demo.beautysiaa.com/wp-json/',
    'accessToken': '',
    'loggedIn': false,
    "userId": null,
    "loader": false,
    "mainCarouselImages":[],
    "allProducts":[]
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
        default:
            return state;
    }
};


export default reducer;