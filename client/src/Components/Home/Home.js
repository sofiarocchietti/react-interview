import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../../Redux/Actions';
import RecipeMeta from '../Recipes/RecipeMeta';
import Nav from '../Nav/Nav';
import './Home.css';

const Home = () => {
    const { recipes } = useSelector (state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllRecipes())
   
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className= 'home-container'>
            <div>
                <Nav/>
            </div>
            <div className= 'recipe-meta-container'>
            <RecipeMeta recipes={recipes}/>
            </div>
        </div>
    )
}

export default Home
