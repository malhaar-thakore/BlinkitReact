import actionTypesEnum from './actionTypes';
const { INCREMENT_PRODUCT_COUNT, DECREMENT_PRODUCT_COUNT } = actionTypesEnum;

function incrementProductCount(id){
   // console.log(id);
    return {
        type: INCREMENT_PRODUCT_COUNT,
        payload: { id }
    }
}

function decrementProductCount(id){
    // console.log(id);
     return {
         type: DECREMENT_PRODUCT_COUNT,
         payload: { id }
     }
 }

export { incrementProductCount, decrementProductCount };