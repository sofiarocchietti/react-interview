import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import swal from 'sweetalert';
import { logout } from '../../Redux/Actions';
import './Nav.css'

export const Nav = () => {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated)

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
      {isAuthenticated !== true ?
        <NavLink to={`/login`}>
          <button className='create_button' type='submit'>
            Login
          </button>
        </NavLink>
      :
      <button className='create_button' type='submit' onClick={(e) => {
        e.preventDefault();
        isAuthenticated === true && dispatch(logout())
        swal({
          icon: "success",
          title: "You are logged out :)",
          text: "  ",
          button: null,
          timer: 2000
        });
      }}>
        Logout
      </button>
      }
    </div>
  )
}

export default Nav