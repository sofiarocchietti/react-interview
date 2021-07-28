import { GET_ALL_RECIPES, ADD_NEW_RECIPE, VERIFY_USER, SIGN_UP, LOGOUT, GET_RECIPE_DETAIL, CHANGE_LIKES } from "../Actions/constants";

const initialState = {
    recipes: [],
    recipeDetail: {},
    backResponse: {},
    isAuthenticated: false,
    didLike: [{}]
}

function rootReducer(state = initialState, action) {
    switch (action.type) {  
        case GET_ALL_RECIPES: {
            return {
                ...state,
                recipes: action.payload
              }
        }
        case ADD_NEW_RECIPE: {
            return {
                ...state,
                backResponse: action.payload
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
                isAuthenticated: action.payload,
            }
        }

        case SIGN_UP: {
            return {
                ...state,
                isAuthenticated: action.payload,
            }
        }

        case LOGOUT: {
            return {
                ...state,
                isAuthenticated: action.payload,
            }
        }

        case CHANGE_LIKES: {
            return {
                ...state,
                didLike: state.didLike.map(e => {
                    if (e.id === action.payload.id) {
                        e = action.payload 
                    }
                })
            }
        }

        default:
         return state 
    }
}

export default rootReducer; 