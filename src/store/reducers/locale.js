const initialState = {
    locale: 'en',
  };
  
  const themingstore = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOCALE':
        return {...state, locale: action.payload};
      default:
        return state;
    }
  };
  
  export default themingstore;