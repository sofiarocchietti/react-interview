import { GET_ALL_RECIPES, VERIFY_USER } from "../Actions/constants";

const initialState = {
    recipes: [],
    ingredients: [],
    user: {}
}

function rootReducer(state = initialState, action) {
    switch (action.type) {  
        case GET_ALL_RECIPES: {
            return {
                ...state,
                recipes: action.payload
              }
        }
        
        case VERIFY_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        default:
         return state 
    }
}

export default rootReducer; 