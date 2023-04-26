function belongsToCategory(product) {
    if(product[1].categories.includes(this))
    {
        return true;
    }
    else
    {
        return false;
    }
}



export const getProductsFilteredByCategory = (store, category) => {
    const allProducts = Object.entries(store.products);
    const productsFilteredByCategory = allProducts.filter(belongsToCategory, category);
    return productsFilteredByCategory;
}

export const getProductCount = (store, productId) => {
    const { cart } = store;
    if(cart.hasOwnProperty(productId))
        return cart[productId].productCount;
        
    return 0;
}

export const getCartItems = (store) => {
    const {cart, products} = store;
    const cartProductIds = Object.keys(cart);
    console.log(store);
    let cartItems = {};
    for(let ind = 0; ind < cartProductIds.length; ind++){
        const currentKey = cartProductIds[ind];
        const productTitle = products[currentKey].title;
        const productCount = cart[currentKey].productCount;
        cartItems[currentKey] = {
            productTitle : productTitle,
            productCount : productCount
        };
    }
    return cartItems;
}