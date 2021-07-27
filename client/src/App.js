import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import RecipeMeta from './Components/Recipes/RecipeMeta';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import AddNewRecipe from './Components/AddNewRecipe/AddNewRecipe';
import Login from './Components/Login/Login';


function App() {


  return (
    <div className="App">
   <Route exact path='/' component={Landing}/>
   <Route exact path='/home' component={Home}/>
   <Route exact path='/addRecipe' component={AddNewRecipe}/>
   <Route exact path='/login' component={Login}/>
   <Route exact path='/recipes/:id' component={RecipeMeta}/>
    </div>
  );
}

export default App;
