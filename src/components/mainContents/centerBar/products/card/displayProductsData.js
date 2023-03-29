import productsData from '../../../../../data/productsData';

function belongsToCategory(currentProduct){
    if(currentProduct.categories.includes(this)){
        return true;
    }
    else{
        return false;
    }
};

function getDisplayProductsData(categoryType){
    
    const displayProductsData = productsData.filter(belongsToCategory, categoryType);
    return displayProductsData;
}

export default getDisplayProductsData