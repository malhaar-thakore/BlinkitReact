import productsData from '../../data/productsData';
import actionTypesEnum from '../actionTypes';

const initialState = productsData;



export default function(state = initialState) {
            return state;
    }


//
// 1. {} -> key (string) / value
// 2. new Map() -> 

/* {
    productId -> {
        name,
        category,
        price
    }
}
*/