import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addNewRecipe } from '../../Redux/Actions';
import swal from 'sweetalert';
import { validate } from './errors';
import './AddNewRecipe.css';

const AddNewRecipe = () => {
  const dispatch = useDispatch()
  const {backResponse} = useSelector(state=> state)
  let history = useHistory()
    const [input, setInput] = useState({
        title: '',
        likes: 0,
        img: '',
        timeToMake: '',
        servings: 0,
        ingredients: [],
        steps: []
     }); 

    const [ingredient, setIngredient] =  useState({
      name: '',
      amount: 0,
      measure: ''
    });

     const [step, setStep] = useState('')

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

      const handleIngredientChange = (e) => {
        setIngredient({
          ...ingredient,
          [e.target.name]: e.target.value
        })
      }

      const handleStepChange = (e) => {
        setStep(e.target.value)
      }

      
      const deleteIngredient = (e) => {
        e.preventDefault()
        setInput({
          ...input,
          ingredients: input.ingredients.filter((obj) => obj.name !== e.target.value)
        })
      }

      const deleteStep = (e) => {
        e.preventDefault()
        setInput({
          ...input,
          steps: input.steps.filter(s => s !== e.target.value)
        })
      }

      const checkSuccess = () => {
        backResponse.code === 200 ?
              swal({
                icon: "success",
                title: backResponse.message,
                text: "  ",
                button: null,
                timer: 2000
            })
            : 
            swal({
              icon: "error",
              title: backResponse.message,
              text: "  ",
              button: null,
              timer: 2000
          });
            setInput({
              title: '',
              img: '',
              timeToMake: '',
              servings: 0,
              ingredients: [],
              steps: []
              })
             setTimeout(()=> {history.push('/home')}, 2000)
      }

        const handleSubmit = async (e) => {
          e.preventDefault()
           if(Object.keys(errors).length === 0)
            {
             await dispatch(addNewRecipe(input))
            } else {
              swal({
                icon: "error",
                title: backResponse.message,
                text: "  ",
                button: null,
                timer: 2000
            });
            }   
        }

      useEffect(() => {
        input.title !== '' && checkSuccess()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [backResponse])
      

    return (
      <div className="add_recipe_container_container">
      <div className="add_recipe_container">
       <h1 className="h1_title">Recipe Creator: </h1>
       <form onSubmit={(e) => handleSubmit(e)}
       className="recipe_form"
       >
         <div>
              <label className="text_title_form">Title:</label>
              <input
                onChange={handleInputChange}
                className={`${errors.title && "danger"}`}
                type="text"
                name="title"
                value={input.title}
              />
              {errors.title && (
                <p className="danger">{errors.title}</p>
                  )} 
            </div>
            <div>
              <label className="text_title_form">Servings:</label>
              <input
                onChange={handleInputChange}
                className={`${errors.servings && "danger"}`}
                type="number"
                name="servings"
                value={input.servings}
              />
              {errors.servings && (
                <p className="danger">{errors.servings}</p>
                  )} 
            </div>
            <div>
              <label className="text_title_form">Time:</label>
              <input
                onChange={handleInputChange}
                className={`${errors.timeToMake && "danger"}`}
                type="text"
                name="timeToMake"
                value={input.timeToMake}
              />
              {errors.timeToMake && (
                <p className="danger">{errors.timeToMake}</p>
                  )} 
            </div>
            <div>
              <label className="text_title_form">Ingredients:</label>
              <input
              onChange={handleIngredientChange}
              className={`${errors.ingredients && "danger"}`}
                type="text"
                name="name"
                value={ingredient.name}
              />
              {errors.ingredients && (
                <p className="danger">{errors.ingredients}</p>
                  )}  
                  </div> 
              <div>
              <label className="text_title_form">Amount</label>
              <input
              onChange={handleIngredientChange}
                type="number"
                min="0"
                name="amount"
                value={ingredient.amount}
              />
            </div>
            <div>
          <div className= 'options'>
            <select id="select_id" name="measure" onChange={handleIngredientChange}>
           {['unit','cup','cups','teaspoon', 'teaspoons', 'oz', 'ml','liters', 'spoon', 'spoons'].map((m, index) => (
            <option value={m} key={index}>{m}</option>
          ))} 
        </select>
            </div>
            <button onClick={(e)=> {
              e.preventDefault()
              setInput({
                ...input,
                ingredients: [...input.ingredients, ingredient],
                })
            }
             }>
              Add ingredient
            </button>
            <div className= 'options'>
              {input.ingredients?.map((e, index) =>
                <button className='ing_button' key={index} value={e.name} onClick={deleteIngredient}>{e.name} {e.amount} {e.measure}</button>
                )}
            </div>
            <div>
              <label className="text_title_form">Steps:</label>
              <input
                onChange={handleStepChange}
                type="text"
                value={step}
              />
            </div>
            <button onClick={(e)=> {
              e.preventDefault()
              setInput({
                ...input,
               steps: [...input.steps, step],
                })
            }
             }>
              Add step
            </button>
            
            <div>
                {input.steps?.map((e, index) =>
                <button className='step_button' key={index} onClick={deleteStep} value={e}>{e}</button>
                )}  
            </div>
            <div></div>
          </div>
            <div>
                <label className="text_title_form">Image</label>
                <input type="url" name="img" placeholder= "Insert an URL Image" value={input.img} onChange={handleInputChange} className="text_input"/>
              </div>
            <button className="submit_button" type="submit">
            Submit
          </button>
       </form>
      </div>
      </div>
    )
}

export default AddNewRecipe
