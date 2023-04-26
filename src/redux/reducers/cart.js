import actionTypesEnum from '../actionTypes';

let initialState = {};

const localStorageState = Object.entries(localStorage);

for(let ind = 0; ind < localStorageState.length; ind++) {
    const currentCartProduct = localStorageState[ind];
    initialState[currentCartProduct[0]] = {
        productCount: parseInt(currentCartProduct[1])
    };
}


const { INCREMENT_PRODUCT_COUNT, DECREMENT_PRODUCT_COUNT } = actionTypesEnum;



export default function(state = initialState, action) {
    
    switch(action.type) {
        case INCREMENT_PRODUCT_COUNT: {

            const { id } = action.payload;
            const oldProductCount = !state[id] ? 0 : state[id].productCount;


            const newState = {
                ...state,
                [id] : {
                    ...state.id,
                    productCount : oldProductCount + 1
                }
            }
            localStorage.setItem(id, newState[id].productCount);
            return newState;
        }

        case DECREMENT_PRODUCT_COUNT: {

            const { id } = action.payload;
            const oldProductCount = state[id].productCount;

            const newState = {
                ...state,
                [id] : {
                    ...id,
                    productCount : oldProductCount-1
                } 
            }

            if(oldProductCount === 1 || isNaN(oldProductCount)) {
                delete newState[id];
                localStorage.removeItem(id);
            }

            else {
                localStorage.setItem(id, newState[id].productCount);
            }
            return newState;
        }
        default:
            return state;
    }
}