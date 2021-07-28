import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLikes, getAllRecipes, getRecipeDetail } from '../../Redux/Actions';
import like from '../../img/like.png';
import dislike from '../../img/dislike.png';
import './Likes.css';


const Likes = ({ likes, id }) => {
    const didLike = useSelector((state) => state.didLike)
    const dispatch = useDispatch()

    const liking = async (e) => {
        e.preventDefault();
        !didLike.didLike ? await dispatch(changeLikes(id, 1)) : await dispatch(changeLikes(id, 0))
        dispatch(getRecipeDetail(id))
        dispatch(getAllRecipes())
    }

    return (
        <div className='likes_container'>
            { likes }
            <button onClick={liking}>
                {didLike.id === id && !didLike.didLike ? (
                   <img src={dislike} alt=''/> ) : 
                   <img src={like} alt=''/>
                }
            </button>
        </div>
    )
}

export default Likes;
