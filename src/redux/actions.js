import actionTypesEnum from './actionTypes';
const { INCREMENT_PRODUCT_COUNT, DECREMENT_PRODUCT_COUNT } = actionTypesEnum;

function incrementProductCount(id){
   
    return {
        type: INCREMENT_PRODUCT_COUNT,
        payload: { id }
    }
}

function decrementProductCount(id){
    
     return {
         type: DECREMENT_PRODUCT_COUNT,
         payload: { id }
     }
 }

export { incrementProductCount, decrementProductCount };