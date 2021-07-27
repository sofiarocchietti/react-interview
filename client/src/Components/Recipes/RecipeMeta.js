import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipeDetail } from '../../Redux/Actions'
import RecipeIngredients from './RecipeIngredients'
import RecipeSteps from './RecipeSteps'
import Likes from '../Likes/Likes';
import './RecipeMeta.css'

function RecipeMeta ({match}) {
  const recipe = useSelector((state) => state.recipeDetail)
  const dispatch = useDispatch()
  const [serving, setServing] = useState({})

    useEffect(() => {
        dispatch(getRecipeDetail(match.params.id))
        recipe.id && setServing({ portion: recipe.servings, percent: 100, ingredients: recipe.ingredients})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recipe.id]); 
    
    const changeServings = (e) => {
        setServing({
            ...serving,
            portion: e.target.value,
            percent: parseInt(e.target.value) * 100 / recipe.servings
        })
    }
    
    useEffect(() => {
        setServing({
        ...serving,
        ingredients: recipe.ingredients?.map(ing => ({...ing , amount: (ing.amount * serving.percent) / 100}) )
    }) 
    },[serving.portion])

  return (
    <div className='recipe-meta'>
      <div className='recipe-meta-container'>
        {recipe.title && <div>
          <h1>{recipe.title}</h1>
          <div>
            <div> 
              <div className='recipe-meta-container-img'> 
            <img src={recipe.img ? recipe.img : 'image not found'} alt="picture" />
              </div>
            </div>
            <p>
              Time: 
              {recipe.timeToMake}
            </p>
            <p>
              Servings:
              <input
                type='number'
                name='serving'
                onChange={changeServings}
                value={serving.portion}
                />
            </p>
          </div>
          <Likes id={recipe.id} likes={recipe.likes} />
          <RecipeIngredients ingredients={serving.ingredients} />
          <RecipeSteps steps={recipe.steps} />
        </div>}
      </div>
    </div>
  )
}

export default RecipeMeta
