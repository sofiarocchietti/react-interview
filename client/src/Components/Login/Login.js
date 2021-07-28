import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser, signup } from '../../Redux/Actions';
import { validate } from './errors';
import Nav from '../Nav/Nav';
import swal from 'sweetalert';
import './Login.css';

const Login = ({ history }) => {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated)

  const [register, setRegister] = useState(false)

  const [input, setInput] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({}); 

     const handleInputChange = (e) => {
          setInput({
            ...input,
            [e.target.name]: e.target.value
          });
          setErrors(
            validate({
              ...input,
              [e.target.name]: e.target.value,
            }, register)
          );
      }

const checkSuccess = () => {
  if (isAuthenticated === true) {
    swal({
      icon: "success",
      title: "You are logged in :)",
      text: "  ",
      button: null,
      timer: 2000
    });
    setInput({
        name: '',
        email: '',
        password: ''
      })
    history.push('/home');
  } else {
    swal({
      icon: "error",
      title: isAuthenticated,
      text: "  ",
      button: null,
      timer: 2000
    });
  }
}

useEffect(()=>{
  input.email !== '' && checkSuccess();
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[isAuthenticated])


const handleSubmit = (e) => {
    e.preventDefault()
      if(Object.keys(errors).length === 0 ) {
        register ? dispatch(signup(input)) : dispatch(verifyUser(input))
      } else {
        swal({
          icon: "error",
          title: "Some fields are missing :(",
          text: "  ",
          button: null,
          timer: 2000
        });
      }  
  }

  return (
    <div className='login_container'>
        <Nav/>
      <form onSubmit={(e) => {
        handleSubmit(e)
      }}>
      {register && 
        <div>
            <label>Name:</label>
            <input className={`${errors.email && 'danger'}`}
              type="text" name="name" onChange={handleInputChange} value={input.name} /> 
            {errors.name && (
              <p className="danger">{errors.name}</p>
            )} 
        </div>
      }
      <div>
          <label>Email:</label>
          <input className={`${errors.email && 'danger'}`}
            type="text" name="email" onChange={handleInputChange} value={input.email} /> 
          {errors.email && (
            <p className="danger">{errors.email}</p>
          )} 
       </div>
       <div>
          <label>Password:</label>
          <input className={`${errors.password && 'danger'}`}
            type="password" name="password" onChange={handleInputChange} value={input.password} />
          {errors.password && (
            <p className="danger">{errors.password}</p>
          )}
       </div>
       <div className='buttons'>
          <span className="signup_login" onClick={(e) => {
                e.preventDefault();
                setRegister(!register);
              }}>
              {register ?  <button>Login</button> : <button>Sign up</button> }
          </span>
          <button className="submit_button" type="submit">
              Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
