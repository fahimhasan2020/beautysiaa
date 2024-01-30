import axios from "axios"
import baseUri from "../constants/urls";
const allCategoriesFetch = async(dispatch) => {
    try{
      let pageNumber = 1;
      totalResult = [];
      totalFiltered = [];
      for(let i =0;i<8;i++){
          const result = await apiCall(pageNumber);
          const formattedResult = result;
          if(result.data.length>0){
            const hierarchicalCategories = await buildCategoryTree(formattedResult.data);
            Array.prototype.push.apply(totalResult, formattedResult.data);
            Array.prototype.push.apply(totalFiltered, hierarchicalCategories);
            pageNumber++;
          }
          
      }
      console.log("total length",totalResult.length);
      console.log("mother length",totalFiltered.length);
      dispatch({type:'UPDATE_ALL_CATEGORIES',allCategories:totalResult});
      dispatch({type:'UPDATE_CATEGORIES_HIGHERERCHY',categoriesHighererchy:totalFiltered});
    }catch(e){
      console.log(e);
    }
    
   
}

const apiCall = async(pageNumber)=>{
 const result = await axios.get(`${baseUri.hostExtend}products/categories?page=${pageNumber}&per_page=100`, {
    headers: {
        Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
        'Content-Type':'application/json'
      },
  });
  return result;
}

const buildCategoryTree = (categories) => {
  const categoryMap = new Map();
  categories.forEach(category => {
    categoryMap.set(category.id, { ...category, children: [] });
  });
  const categoryTree = [];
  categories.forEach(category => {
    if (category.parent === 0) {
      categoryTree.push(categoryMap.get(category.id));
    } else {
      const parentCategory = categoryMap.get(category.parent);
      if (parentCategory) {
        parentCategory.children.push(categoryMap.get(category.id));
      }
    }
  });
  return categoryTree;
};

export default allCategoriesFetch;