import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav () {
  return (
    <div className='container-nav'>
      <NavLink to={`/addRecipe`}>
        <button className='create_button' type='submit'>
          Create Recipe
        </button>
      </NavLink>
      <NavLink to={`/home`}>
        <button className='create_button' type='submit'>
          Home
        </button>
      </NavLink>
      <NavLink to={`/login`}>
        <button className='create_button' type='submit'>
          Login
        </button>
      </NavLink>
    </div>
  )
}
