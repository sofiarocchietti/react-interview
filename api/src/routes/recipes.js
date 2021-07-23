const {Router} = require('express');
const { getAllRecipes } = require('../controllers/recipes');

const router = Router();

router.get('/', getAllRecipes);

module.exports= router; 