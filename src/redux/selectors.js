function belongsToCategory(product) {
    if(product.categories.includes(this))
    {
        return true;
    }
    else
    {
        return false;
    }
}



export const getProductsFilteredByCategory = (store, category) => {
    // console.log('Store : ', store);
    // console.log('Category : ', category);

    
    const allProducts = store.products;
    const productsFilteredByCategory = allProducts.filter(belongsToCategory, category);
    return productsFilteredByCategory;
}