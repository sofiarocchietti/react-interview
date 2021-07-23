const {Router} = require('express');
const { getAllRecipes, addNewRecipe, deleteRecipe, editRecipe } = require('../controllers/recipes');

const router = Router();

router.get('/', getAllRecipes);
router.post('/', addNewRecipe);
router.delete('/:id', deleteRecipe);
router.put('/:id', editRecipe);

module.exports= router; 