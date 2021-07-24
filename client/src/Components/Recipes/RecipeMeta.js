import React, { useEffect } from 'react';
import RecipeIngredients from './RecipeIngredients';
import RecipeSteps from './RecipeSteps';
import Nav from '../Nav/Nav';


function RecipeMeta({recipes}) {
   
    return (
        <div className="recipe-meta">
            <div>
            {
                recipes?.map((recipe, index) => {
                    return (
            <div key={index}>
            <h1>{recipe.title}</h1>
            <div>
                <p>Time: {recipe.timeToMake}</p>
                <p>Servings: {recipe.servings}</p>
            </div>
            <RecipeIngredients ingredients={recipe.ingredients} />
            <RecipeSteps steps={recipe.steps} /> 
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default RecipeMeta