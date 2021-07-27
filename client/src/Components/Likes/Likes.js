import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeLikes, getAllRecipes, getRecipeDetail } from '../../Redux/Actions';
import like from '../../img/like.png';
import dislike from '../../img/dislike.png';
import './Likes.css'


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

    return (
        <div className='likes_container'>
            { likes }
            <button onClick={liking}>
                {numberOfLikes === 1 ? (
                   <img src={dislike} alt=''/> ) : 
                    <img src={like}alt=''/>
                }
            </button>
        </div>
    )
}

export default Likes;
