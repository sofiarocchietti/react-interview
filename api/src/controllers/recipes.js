const { Recipe, Diet } = require('../db');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios').default;
let recipes = [ { 
    id: 1,
    title: 'Chocolate Chip Coookies',
    timeToMake: '1 hour',
    servings: 24,
    ingredients: [
      {
        name: 'butter',
        amount: 1,
        measure: 'cup'
      },{
        name: 'white sugar',
        amount: 1,
        measure: 'cup'
      },{
        name: 'packed brown sugar',
        amount: 1,
        measure: 'cup'
      },{
        name: 'eggs',
        amount: 2,
        measure: ''
      },{
        name: 'vanilla extract',
        amount: 2,
        measure: 'teaspoons'
      },{
        name: 'baking soda',
        amount: 1,
        measure: 'teaspoon'
      },{
        name: 'hot water',
        amount: 2,
        measure: 'teaspoons'
      },{
        name: 'salt',
        amount: .5,
        measure: 'teaspoon'
      },{
        name: 'flour',
        amount: 3,
        measure: 'cups'
      },{
        name: 'semisweet chocolate chips',
        amount: 2,
        measure: 'cups'
      }
    ],
    steps: [
      "Preheat oven to 350 degrees",
      "Cream together butter, white sugar, and brown sugar until smooth",
      "Beat in the eggs one at a time",
      "Stir in vanilla",
      "Dissolve baking soda in hot water, add to batter along with salt",
      "Stir in flour and chocolate chips",
      "Drop large spoonfuls onto ungreased pans",
      "Bake for aobut 10 minutes in preheated oven, or until edges are nicely browned"
    ]
  },
]

let id = 2; 



function getAllRecipes(req, res, next) {
    return res.send(recipes);
}

function addNewRecipe(req, res, next) {
    const { title, timeToMake, servings, ingredients, name, amount, measure } = req.body;
    if (!title || !timeToMake || !servings) return res.status(400).send('Missing arguments')
  
}

function deleteRecipe (req, res, next) {
    const {id} = req.params
    const index = recipes.findIndex(a => a.id === parseInt(id))
    recipes.splice(index, 1)
    return res.json(recipes)
}



function editRecipe (req, res) { 
    const { id } = req.params
    const { title, timeToMake, servings } = req.body
    const recipe = recipes.find(a => a.id === parseInt(id)); 
    if (!recipe) {
      return res.status(400).send('El ID no se encontró kpo')
    }
    if (recipe) {
        recipe.title = title || recipe.title; 
        recipe.timeToMake = timeToMake || recipe.timeToMake; 
        recipe.servings = servings || recipe.servings; 
        res.json(recipe); 
    }
  }

module.exports ={
    getAllRecipes,
    addNewRecipe,
    deleteRecipe,
    editRecipe
}