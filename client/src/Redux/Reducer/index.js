import { GET_ALL_RECIPES } from "../Actions/constants";

const initialState = {
    recipes: [],
    ingredients: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {  
        case GET_ALL_RECIPES: {
            return {
                ...state,
                recipes: action.payload
              }
        }
        default:
         return state 
    }
}

export default rootReducer; 