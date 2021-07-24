import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import RecipeMeta from './Components/Recipes/RecipeMeta';


function App() {


  return (
    <div className="App">
   <Route exact path='/home' component={RecipeMeta}/>
    </div>
  );
}

export default App;
