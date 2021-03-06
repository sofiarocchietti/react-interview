import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetail} from '../../Redux/Actions';
import RecipeIngredients from './RecipeIngredients';
import RecipeSteps from './RecipeSteps';
import Likes from '../Likes/Likes';
import DeleteRecipe from './DeleteRecipe';
import swal from 'sweetalert';
import './RecipeMeta.css';

function RecipeMeta ({match}) {
  const recipe = useSelector((state) => state.recipeDetail)
  const dispatch = useDispatch()
  const [serving, setServing] = useState({})

    useEffect (() => {
        const fetchData = async () => {
         await dispatch(getRecipeDetail(match.params.id))
        recipe.id && setServing({ portion: recipe.servings, percent: 100, ingredients: recipe.ingredients})
        }
          fetchData()
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
    serving.portion < 1 && swal({
      icon: "error",
      title: 'You should add at least one seving',
      text: "  ",
      button: null,
      timer: 1500
    })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[serving.portion])

  return (
    <div className='recipe-meta'>
      <div className='recipe-meta-container'>
        {recipe.title && <div>
          <h1>{recipe.title}</h1>
          <div>
            <DeleteRecipe id={recipe.id}/>
            <div> 
              <div className='recipe-meta-container-img'> 
            <img src={recipe.img ? recipe.img : 'image not found'} alt='not found' />
              </div>
              <Likes id={recipe.id} likes={recipe.likes} />
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
                min='1'
                onChange={changeServings}
                value={serving.portion}
                //defaultValue={serving.portion}
                />
            </p>
          </div>
          {serving.portion > 0 &&
            <>
              <RecipeIngredients ingredients={serving.ingredients} />
              <RecipeSteps steps={recipe.steps} />
            </>
          }
        </div>}
      </div>
    </div>
  )
}

export default RecipeMeta
