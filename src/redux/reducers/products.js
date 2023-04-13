import productsData from '../../data/productsData';
import actionTypesEnum from '../actionTypes'

const initialState = productsData;

const { INCREMENT_PRODUCT_COUNT, DECREMENT_PRODUCT_COUNT } = actionTypesEnum;

function updateProductCount(product, val){
    const newProductCount = product.productCount + val;
    const newProduct = {
        ...product,
        productCount: newProductCount
    }
    return newProduct;
}

export default function(state = initialState, action) {
    switch(action.type) {
        case INCREMENT_PRODUCT_COUNT: {
            const { id } = action.payload;
            const newState = state.map((product) => product.id===id ? updateProductCount(product, 1) : product);
            console.log('Reducer New State : ', newState);
            return newState;
        }

        case DECREMENT_PRODUCT_COUNT: {
            const { id } = action.payload;
            const newState = state.map((product) => product.id===id ? updateProductCount(product, -1) : product);
            console.log('Reducer New State : ', newState);
            return newState;
        }
        default:
            return state;
    }
}