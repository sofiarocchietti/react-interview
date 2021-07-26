const {Router} = require('express');
const { addNewUser, getAllUsers, verifyUser } = require('../controllers/users')
const router = Router();

router.post('/', addNewUser);
router.get('/', getAllUsers);
router.get('/user', verifyUser);

module.exports= router; 