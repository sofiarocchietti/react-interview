import { GET_ALL_RECIPES, ADD_NEW_RECIPE } from './constants'
import axios from 'axios'

export function getAllRecipes () {
  return (dispatch) => fetch('http://localhost:3001/recipes')
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: GET_ALL_RECIPES,
        payload: json
      })
    })
}

/* export function createRecipe (recipe) {
  return (dispatch) => fetch('http://localhost:3001/recipes', {
    method: 'POST',
    body: JSON.stringify(recipe),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((json) => {
      dispatch({
        type: ADD_NEW_RECIPE,
        payload: json
      })
    })
}
 */

export const addNewRecipe = (recipe) => dispatch => {
  let recipes = JSON.parse(localStorage.setItem('recipes') || '[]')
  localStorage.setItem('recipes', JSON.stringify(recipe))
  recipes.push(recipe)
  return axios.post('http://localhost:3001/recipes', recipe)
    .then((response) => {
      dispatch({ type: ADD_NEW_RECIPE, payload: response.data })
    })
    .catch((error) => console.error(error))
}
