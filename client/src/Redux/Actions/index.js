import { GET_ALL_RECIPES, ADD_NEW_RECIPE, VERIFY_USER, GET_RECIPE_DETAIL } from './constants'
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
  /* let recipes = JSON.parse(localStorage.getItem('recipes') || '[]')
  console.log(recipes)
  localStorage.setItem('recipes', JSON.stringify(recipe)) */
  return axios.post('http://localhost:3001/recipes', recipe)
    .then((response) => {
      dispatch({ type: ADD_NEW_RECIPE, payload: response.data })
    })
    .catch((error) => console.error(error))
}

export function verifyUser (obj) {
  return (dispatch) => fetch('http://localhost:3001/users/user')
    .then((response) => response.json(obj))
    .then((json) => {
      dispatch({
        type: VERIFY_USER,
        payload: json
      })
    })
}

export function getRecipeDetail(id) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/recipes/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(id)
        dispatch({ 
          type: GET_RECIPE_DETAIL, 
          payload: json });
      })
  }
}
