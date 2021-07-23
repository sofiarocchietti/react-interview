const { Router } = require('express');
const recipesRouter = require('./recipes')


const router = Router();

router.use('/recipes', recipesRouter)


module.exports = router;
