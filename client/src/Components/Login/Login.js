import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { verifyUser } from '../../Redux/Actions';
import { validate } from './errors';
import Nav from '../Nav/Nav';
import './Login.css';

const Login = () => {

  const dispatch = useDispatch();

  const [input, setInput] = useState({
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
            })
          );
      }

const handleSubmit = (e) => {
    e.preventDefault()
       if(Object.keys(errors).length === 0)
      {dispatch(verifyUser(input))
      setInput({
        email: '',
        password: ''
        })
      } else {
        alert("")
      }  
  }

  return (
    <div className='login_container'>
        <Nav/>
      <form onSubmit={(e) => handleSubmit(e)}>
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
       <button className="submit_button" type="submit">
            Submit
          </button>
      </form>
    </div>
  )
}

export default Login
