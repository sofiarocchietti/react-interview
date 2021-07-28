import { GET_ALL_RECIPES, ADD_NEW_RECIPE, VERIFY_USER, GET_RECIPE_DETAIL, CHANGE_LIKES, DELETE_RECIPE } from './constants';
import axios from 'axios'

export function getAllRecipes () {
  return (dispatch) => axios.get('http://localhost:3001/recipes')
    .then((res) => {
      dispatch({
        type: GET_ALL_RECIPES,
        payload: res.data
      })
    })
}

export const addNewRecipe = (recipe) => dispatch => {
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
    return axios.get(`http://localhost:3001/recipes/${id}`)
      .then((res) => {
        dispatch({ 
          type: GET_RECIPE_DETAIL, 
          payload: res.data });
      })
  }
}

export const changeLikes = (id, numberOfLikes) => dispatch => {
  return axios.put(`http://localhost:3001/recipes/${id}/likes`, {numberOfLikes})
    .then(() => {
      dispatch({ 
        type: CHANGE_LIKES 
      })
    })
}

export const deleteRecipe = (id) => dispatch => {
  return axios.delete(`http://localhost:3001/recipes/${id}`)
  .then(() => {
    dispatch({
      type: DELETE_RECIPE
    })
  })
}