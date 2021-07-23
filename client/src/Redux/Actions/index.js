import { GET_ALL_RECIPES } from "./constants";

export function getAllRecipes() {
    return (dispatch) =>
      fetch('http://localhost:3001/recipes')
        .then((response) => response.json())
        .then((json) => {
        console.log(json)
          dispatch({
            type: GET_ALL_RECIPES,
            payload: json
          })
        })
  }