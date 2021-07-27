import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import RecipeMeta from './Components/Recipes/RecipeMeta';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import AddNewRecipe from './Components/AddNewRecipe/AddNewRecipe';
import Login from './Components/Login/Login';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer'


function App() {


  return (
    <div className="App">
   <Route exact path='/' component={Landing}/>
   <Route exact path='/home' component={Home}/>
   <Route exact path='/addRecipe' component={Nav}/>
   <Route exact path='/addRecipe' component={AddNewRecipe}/>
   <Route exact path='/login' component={Login}/>
   <Route exact path='/recipes/:id' component={RecipeMeta}/>
   <Route  path='/' component={Footer}/>
    </div>
  );
}

export default App;
