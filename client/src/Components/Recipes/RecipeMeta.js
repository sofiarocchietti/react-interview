import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipeDetail } from '../../Redux/Actions'
import RecipeIngredients from './RecipeIngredients'
import RecipeSteps from './RecipeSteps'
import Nav from '../Nav/Nav'

function RecipeMeta ({match}) {
  const recipe = useSelector((state) => state.recipeDetail)
  const dispatch = useDispatch()
  console.log(match.params.id)

    useEffect(() => {
        dispatch(getRecipeDetail(match.params.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

  return (
    <div className='recipe-meta'>
      <Nav/>
      <div>
        {recipe.title && <div>
          <h1>{recipe.title}</h1>
          <div>
            <p>
              Time:
              {recipe.timeToMake}
            </p>
            <p>
              Servings:
              {recipe.servings}
            </p>
          </div>
          <RecipeIngredients ingredients={recipe.ingredients} />
          <RecipeSteps steps={recipe.steps} />
        </div>}
      </div>
    </div>
  )
}

export default RecipeMeta
