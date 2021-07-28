import { GET_ALL_RECIPES, ADD_NEW_RECIPE, VERIFY_USER, GET_RECIPE_DETAIL, CHANGE_LIKES, DELETE_RECIPE, SIGN_UP, LOGOUT } from './constants'
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
  
  export function getRecipeDetail (id) {
    return function (dispatch) {
      return axios.get(`http://localhost:3001/recipes/${id}`)
        .then((res) => {
          dispatch({
            type: GET_RECIPE_DETAIL,
          payload: res.data })
        })
    }
  }

export const signup = (user) => dispatch => {
  return axios.post('http://localhost:3001/users', user)
    .then((response) => {
      dispatch({ type: SIGN_UP, payload: response.data })
    })
}

export const verifyUser = (user) => dispatch => {
  return axios.get(`http://localhost:3001/users/user?email=${user.email}&password=${user.password}`)
    .then((response) => {
      dispatch({ type: VERIFY_USER, payload: response.data })
    })
}

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT, payload: false })
}


export const changeLikes = (id, numberOfLikes) => dispatch => {
  return axios.put(`http://localhost:3001/recipes/${id}/likes`, {numberOfLikes})
    .then((response) => {
      dispatch({ type: CHANGE_LIKES, payload: response.data })
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
