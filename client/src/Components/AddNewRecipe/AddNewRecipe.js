import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AddNewRecipe.css';
import { addNewRecipe } from '../../Redux/Actions';
/* import Nav from '../Nav/Nav'; */
import { validate } from './errors';

const AddNewRecipe = () => {
  const dispatch = useDispatch()
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
        console.log('el value es ', e.target.value);
        setIngredient({
          ...ingredient,
          [e.target.name]: e.target.value
        })
      }

      const handleStepChange = (e) => {
        console.log('el step es ', e.target.value);
        setStep(e.target.value)
      }

      
      const deleteIngredient = (e) => {
        // elimino del array de input.ingredients
        e.preventDefault()
        setInput({
          ...input,
          ingredients: input.ingredients.filter((objeto, index) => objeto[index] !== e.target.value)
        })}

        const handleSubmit = async (e) => {
          e.preventDefault()
           if(Object.keys(errors).length === 0)
            {dispatch(addNewRecipe(input))
              alert("Your delicious recipe has been created!")
            setInput({
              title: '',
              img: '',
              timeToMake: '',
              servings: 0,
              ingredients: [],
              steps: []
              })
            } else {
              alert("Some ingredients are missing :(")
            }   
        }
      

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
                <button className='ing_button' onClick={deleteIngredient} value={index}>{e.name} {e.amount} {e.measure}</button>
                )}
            </div>
            <div>
              <label className="text_title_form">Steps:</label>
              <input
                onChange={handleStepChange}
                //className={`${errors.step && "danger"}`}
                type="text"
                //name="steps"
                value={step}
              />
            {/*   {errors.steps && (
                <p className="danger">{errors.steps}</p>
                  )}  */}
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
                <button className='step_button' onClick={handleStepChange} value={index}>{e}</button>
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
