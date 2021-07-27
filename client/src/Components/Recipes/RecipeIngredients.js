import React from 'react';
import Comments from '../Comments'

function RecipeIngredients(props) {
    return (
        <div className="recipe-ingredients">
            <h1>Ingredients</h1>
            {props.ingredients?.map((ingredient, index) => 
               (
                   <div key={index}>
                   <li className="ingredient">
                       <strong>{ingredient.name}</strong>: {ingredient.amount % 1 != 0 ? ingredient.amount.toFixed(2) : ingredient.amount} {ingredient.measure}
                       <Comments />
                   </li>
                   </div>
               )
           )}
        </div>
    )
}

export default RecipeIngredients