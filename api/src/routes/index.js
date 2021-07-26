const { Router } = require('express');
const recipesRouter = require('./recipes');
const usersRouter = require('./users');


const router = Router();

router.use('/recipes', recipesRouter);
router.use('/users', usersRouter);


module.exports = router;
