import React, { useEffect, useState, getState } from 'react';
import { useDispatch } from 'react-redux';
import { changeLikes, getAllRecipes, getRecipeDetail } from './../Redux/Actions';


const Likes = ({ likes, id }) => {
    const dispatch = useDispatch()
    const [numberOfLikes, setNumberOfLikes] = useState(1);

    const liking = async (e) => {
        e.preventDefault();
        await dispatch(changeLikes(id, numberOfLikes))
        dispatch(getRecipeDetail(id))
        dispatch(getAllRecipes())
        numberOfLikes === 1 ? setNumberOfLikes(0) : setNumberOfLikes(1);
    }
    // const likesUpdate = getState().recipeDetail;

    return (
        <div>
            { likes }
            <button onClick={liking}>
                {numberOfLikes === 1 ? 'LIKE' : 'DISLIKE'}
            </button>
        </div>
    )
}

export default Likes;
