import { GET_ALL_RECIPES, VERIFY_USER, GET_RECIPE_DETAIL } from "../Actions/constants";

const initialState = {
    recipes: [],
    ingredients: [],
    recipeDetail: {},
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
        case GET_RECIPE_DETAIL: 
          return {
            ...state,
           recipeDetail: action.payload
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