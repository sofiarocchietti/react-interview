import React, { useState } from 'react';
import './AddRecipe.css';
import { validate } from './error';

const AddNewRecipe = () => {
    const [input, setInput] = useState({
        title: '',
        timeToMake: '',
        servings: 0,
        ingredients: [],
        steps: []
     }); 

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
          {dispatch(createRecipe(input))
            alert("Your delicious recipe has been created!")
          setInput({
            title: '',
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
        <div className="add_recipe_container">
       <h1 className="h1_title">Recipe Creator: </h1>
       <form
       className="recipe_form"
       onSubmit={(e) => handleSubmit(e)}
       >
         <div>
              <label className="text_title_form">Title</label>
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
              <label className="text_title_form">Ingredients</label>
              <input
              onChange={handleInputChange}
              className={`${errors.spoonacularScore && "danger"}`}
                type="number"
                min="0"
                max="99"
                name="spoonacularScore"
                value={input.ingredients}
              />
              {errors.spoonacularScore && (
                <p className="danger">{errors.spoonacularScore}</p>
                  )} 
                  </div> 
              <div>
              <label className="text_title_form">Health Score</label>
              <input
              onChange={handleInputChange}
              className={`${errors.healthScore && "danger"}`}
                type="number"
                min="0"
                max="99"
                name="healthScore"
                value={input.healthScore}
              />
               {errors.healthScore && (
                <p className="danger">{errors.healthScore}</p>
                  )} 
            </div>
            <div>
              <label className="text_title_form">Instructions</label>
              <textarea
              onChange={handleInputChange}
                className="text_input"
                type="text"
                name="analyzedInstructions"
                value={input.analyzedInstructions}
              ></textarea>
            </div>
            <div>
                <label className="text_title_form">Image</label>
                <input type="url" name="image" placeholder= "Insert an URL Image" value={input.image} onChange={handleInputChange} className="text_input"/>
                  </div>
            <div className="diets_checkbox">
            <label className="text_title_form">Choose your diets</label>
              <div className="map_diets">
                {diets.map((diet) =>
                <span className="keys" key={diet.name}>
                  <input
                      className="input_diets"
                      type="checkbox"
                      name="diets"
                      value={diet.id}
                      onChange={handleCheckbox}
                    />
                    <label name={diet}>{diet.name}</label>
                  </span>
                )
                }
                </div> 
              </div>
            <button className="submit_button" type="submit">
            Submit
          </button>
       </form>
      </div>
    )
}

export default AddNewRecipe
