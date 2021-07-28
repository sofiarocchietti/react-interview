let recipes = [ {
  id: 1,
  likes: 0,
  img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1-600x900.jpg.webp',
  title: 'Chocolate Chip Coookies',
  timeToMake: '1 hour',
  servings: 24,
  ingredients: [
    {
      name: 'butter',
      amount: 1,
      measure: 'cup'
    }, {
      name: 'white sugar',
      amount: 1,
      measure: 'cup'
    }, {
      name: 'packed brown sugar',
      amount: 1,
      measure: 'cup'
    }, {
      name: 'eggs',
      amount: 2,
      measure: ''
    }, {
      name: 'vanilla extract',
      amount: 2,
      measure: 'teaspoons'
    }, {
      name: 'baking soda',
      amount: 1,
      measure: 'teaspoon'
    }, {
      name: 'hot water',
      amount: 2,
      measure: 'teaspoons'
    }, {
      name: 'salt',
      amount: .5,
      measure: 'teaspoon'
    }, {
      name: 'flour',
      amount: 3,
      measure: 'cups'
    }, {
      name: 'semisweet chocolate chips',
      amount: 2,
      measure: 'cups'
    }
  ],
  steps: [
    'Preheat oven to 350 degrees',
    'Cream together butter, white sugar, and brown sugar until smooth',
    'Beat in the eggs one at a time',
    'Stir in vanilla',
    'Dissolve baking soda in hot water, add to batter along with salt',
    'Stir in flour and chocolate chips',
    'Drop large spoonfuls onto ungreased pans',
    'Bake for aobut 10 minutes in preheated oven, or until edges are nicely browned'
  ]
}
]

let id = 2

function getRecipeById (req, res, next) {
  const { id } = req.params
  if (!id) return res.status(400).send('Please, enter an ID')
  const recipe = recipes.find(a => a.id === parseInt(id))
  if (!recipe) return res.status(400).send('Recipe not found')
  return res.send(recipe)
}

function getAllRecipes (req, res, next) {
  return res.send(recipes)
}

function addNewRecipe (req, res, next) {
  const { title, timeToMake, servings, ingredients, steps, img, likes } = req.body
  if (!title || !timeToMake || !servings) return res.send({message: 'Some ingredients are missing :(', code: 400})
  recipes.push({
    id: id++,
    likes,
    title,
    img,
    timeToMake,
    servings,
    ingredients,
  steps})
  return res.send({message: 'Yout delicious recipe has been created!', code: 200})
}

function incrementAndDecrement (req, res) {
  const { id } = req.params
  const { numberOfLikes } = req.body
  if (parseInt(numberOfLikes) !== 0) {
    recipes.map(r => r.id === parseInt(id) && r.likes++)
    return res.send(true)
  } else {
    recipes.map(r => r.id === parseInt(id) && r.likes--)
    return res.send(false)
  }
}


function deleteRecipe (req, res, next) {
  const {id} = req.params
  const index = recipes.findIndex(a => a.id === parseInt(id))
  if (!index) {
    return res.send('ID not found')
  }
  recipes.splice(index, 1)
  return res.json(recipes)
}

function editRecipe (req, res) {
  const { id } = req.params
  const { title, timeToMake, servings, ingredients, steps } = req.body
  const recipe = recipes.find(a => a.id === parseInt(id))
  if (!recipe) {
    return res.send('ID not found')
  }
  if (recipe) {
    recipe.title = title || recipe.title
    recipe.timeToMake = timeToMake || recipe.timeToMake
    recipe.servings = servings || recipe.servings
    recipe.ingredients = ingredients || recipe.ingredients
    recipe.steps = steps || recipe.steps
    res.json(recipe)
  }
}

module.exports = {
  getAllRecipes,
  addNewRecipe,
  deleteRecipe,
  editRecipe,
  getRecipeById,
  incrementAndDecrement}
