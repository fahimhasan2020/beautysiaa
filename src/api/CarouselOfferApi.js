import { useDispatch,useSelector } from 'react-redux';
import cheerio from 'cheerio';
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseUri from "../constants/urls";
const carouselOffersApi = async(dispatch) =>{
    try{const carouselImages = await AsyncStorage.getItem("carouselImages");
    if(carouselImages === null || carouselImages === undefined){
        //first time
        const imagesData = await fetch(baseUri.host + "home-banner/v1/slider?id=48752")
        const htmlContent = await imagesData.text();
        const loader = cheerio.load(htmlContent);
        const imageElements = loader('img');
        const srcLinks = [];
        imageElements.each((index, element) => {
          const src = loader(element).attr('src');
          if (src) {
            const cleanSrc = src.replace(/\\/g, '').replace(/"/g, '');
            srcLinks.push(cleanSrc);
          }
        });
        dispatch({ type: 'UPDATE_CAROUSEL', mainCarouselImages: srcLinks });
        AsyncStorage.setItem('carouselImages',JSON.stringify(srcLinks))
    }else{
        //other time
        
        const structuredImages = await JSON.parse(carouselImages);
        //console.log('data from parse',structuredImages);
        await dispatch({ type: 'UPDATE_CAROUSEL', mainCarouselImages: structuredImages });
        const imagesData = await fetch(baseUri.host + "home-banner/v1/slider?id=48752")
        const htmlContent = await imagesData.text();
        const loader = cheerio.load(htmlContent);
        const imageElements = loader('img');
        const srcLinks = [];
        imageElements.each((index, element) => {
          const src = loader(element).attr('src');
          if (src) {
            const cleanSrc = src.replace(/\\/g, '').replace(/"/g, '');
            srcLinks.push(cleanSrc);
          }
        });
        AsyncStorage.setItem('carouselImages',JSON.stringify(srcLinks));   
    }}catch(error){
        console.log(error);
    }
    
}

export default carouselOffersApi;