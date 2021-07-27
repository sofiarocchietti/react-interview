import React from 'react';
import Card from '../Card/Card';
import './Cards.css'

const Cards = ({recipes}) => {
    return (
            <div className='display_recipes'>
          {recipes.map((recipe, index) => 
          (
            <Card index={index} recipe={recipe}/>
          ))}
        </div>
      
    )
}

export default Cards
