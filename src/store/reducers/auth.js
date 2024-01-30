import AsyncStorage from '@react-native-async-storage/async-storage';
const data = {
    'host': 'https://demo.beautysiaa.com/wp-json/',
    'accessToken': '',
    'loggedIn': false,
    "loginCondition":'generel',
    'phoneNumber':'',
    'email':'',
    'firstName':'',
    'profilePicture':'',
    'leftAlign':32,
    'lastName':'',
    'address':'',
    'postCode':'',
    "userId": null,
    "loader": false,
    "mainCarouselImages":[],
    "allProducts":[],
    "allCategories":[],
    "brands":[],
    "discountedProducts":[],
    "newArrivals":[],
    "bestSelling":[],
    "favourites":[],
    "favouritesList":[],
    "cartProducts":[],
    "categories":[],
    "categoriesHighererchy":[],
    "theme":'light',
    "orders":[],
    "loadingState":false,
    "paymentSuccess":false,
};

const reducer = (state = data, action) => {
    switch (action.type) {
        case 'LOGOUT':
            AsyncStorage.setItem('loggedIn', 'false')
            return {
                ...state,
                loggedIn: action.logged,
            };
        case 'UPDATE_CATEGORIES_HIGHERERCHY':
            return {
                ...state,
                categoriesHighererchy: action.categoriesHighererchy,
            };
        case 'UPDATE_PROFILE_PICTURE':
            AsyncStorage.setItem('profilePicture', action.profilePicture.toString())
            return {
                ...state,
                profilePicture: action.profilePicture,
            };
        case 'UPDATE_PHONE_NUMBER':
            AsyncStorage.setItem('phone', action.phone.toString())
            return {
                ...state,
                phoneNumber: action.phone,
            };
        case 'UPDATE_ALL_CATEGORIES':
            return {
                ...state,
                allCategories: action.allCategories,
            };
        case 'SET_LEFT_ALIGN':
            return {
                ...state,
                leftAlign: action.leftAlign,
            };
        case 'UPDATE_DISCOUNTED_PRODUCTS':
            return {
                ...state,
                discountedProducts: action.discountedProducts,
            };
        case 'UPDATE_LOGIN_CONDITION':
            return {
                ...state,
                loginCondition: action.loginCondition,
            };
        case 'UPDATE_LOADING_STATE':
            return {
                ...state,
                loadingState: action.loadingState,
            };
        case 'UPDATE_PAYMENT_SUCCESS':
            return {
                ...state,
                paymentSuccess: action.payload,
            };
        case 'UPDATE_ORDER':
            
            return {
                ...state,
                orders: action.orders,
            };
        case 'UPDATE_EMAIL':
            AsyncStorage.setItem('email', action.email.toString())
            return {
                ...state,
                email: action.email,
            };
        case 'UPDATE_FIRST_NAME':
            AsyncStorage.setItem('firstName', action.firstName.toString())
            return {
                ...state,
                firstName: action.firstName,
            };
        case 'UPDATE_CATEGORIES':
            return {
                ...state,
                categories: action.categories,
            };
        case 'UPDATE_LAST_NAME':
            AsyncStorage.setItem('lastName', action.lastName.toString())
            return {
                ...state,
                lastName: action.lastName,
            };
        case 'UPDATE_ADDRESS':
            AsyncStorage.setItem('address', action.address.toString())
            return {
                ...state,
                address: action.address,
            };
        case 'UPDATE_POSTCODE':
            AsyncStorage.setItem('postCode', action.postCode.toString())
            return {
                ...state,
                postCode: action.postCode,
            };
        case 'UPDATE_CART':
            return {
                ...state,
                cartProducts: action.cartProducts,
            };
        case 'UPDATE_THEME':
            return {
                ...state,
                theme: action.theme,
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
        case 'UPDATE_FAVOURITES':
            return {
                ...state,
                favourites: action.favourites
            };
        case 'UPDATE_FAVOURITES_LIST':
            return {
                ...state,
                favouritesList: action.favouritesList
            };
        default:
            return state;
    }
};


export default reducer;