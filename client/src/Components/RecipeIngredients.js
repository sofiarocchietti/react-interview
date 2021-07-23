import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../Redux/Actions';
import Comments from './Comments'

function RecipeIngredients(props) {
    console.log('ingrediente', props.ingredients)
    return (
        <div className="recipe-ingredients">
            <h1>Ingredients</h1>
            {props.ingredients.map((ingredient, index) => 
               (
                   <div>
                   <li className="ingredient">
                       <strong>{ingredient.name}</strong>: {ingredient.amount} {ingredient.measure}
                       <Comments />
                   </li>
                   </div>
               )
           )}
        </div>
    )
}

export default RecipeIngredients