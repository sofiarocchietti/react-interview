import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../Redux/Actions';
import RecipeIngredients from './RecipeIngredients';


function RecipeMeta() {
    const { recipes } = useSelector (state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllRecipes())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="recipe-meta">
            {
                recipes?.map((recipe) => {
                    return (
            <div>
            <h1>{recipe.title}</h1>
            <div>
                <p>Time: {recipe.timeToMake}</p>
                <p>Servings: {recipe.servings}</p>
            </div>
            <RecipeIngredients ingredients={recipe.ingredients} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecipeMeta