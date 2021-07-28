import React from 'react';
import { Link } from 'react-router-dom';
import Likes from '../Likes/Likes'
import './Card.css';

const Card = (props) => {
    return (
        <div className='card_container'>
        <h1 className='card_title'>{props.recipe.title}</h1>
        <div className='image'>  
    <img src={props.recipe.img ? props.recipe.img : 'image not found'} alt='not found' />
    </div>
        <Likes likes={props.recipe.likes} id={props.recipe.id} />
        <Link to={`/recipes/${props.recipe.id}`}>
        <button className="button_card" type='submit'>
          Read More
        </button>
        </Link>
</div> 
    )
}

export default Card
