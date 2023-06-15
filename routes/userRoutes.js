const {createUser, getAllUsers} = require('../controllers/userController');
const userRouter = require('express').Router();


userRouter.get('/', getAllUsers);
userRouter.route('/user').post(createUser);

module.exports = userRouter;