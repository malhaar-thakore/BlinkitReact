import productsData from './productsData';

function belongsToCategory(currentProduct){
    if(currentProduct.categories.includes(this)){
        return true;
    }
    else{
        return false;
    }
};

function getDisplayProductsData(categoryType){
    //console.log(categoryType);
    const displayProductsData = productsData.filter(belongsToCategory, categoryType);
    //console.log(displayProductsData);
    return displayProductsData;
}

export default getDisplayProductsData