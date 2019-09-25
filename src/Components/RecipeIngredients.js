import React from 'react';

function RecipeIngredients(props) {

    const ingredients = props.ingredients.map((ingredient, index) => {
        return (
            <li className="ingredient">
                <strong>{ingredient.name}</strong>: {ingredient.amount} {ingredient.measure}
            </li>
        )
    })
    return (
        <div className="recipe-ingredients">
            <h1>Ingredients</h1>
            <ul>
                {ingredients}
            </ul>
        </div>
    )
}

export default RecipeIngredients