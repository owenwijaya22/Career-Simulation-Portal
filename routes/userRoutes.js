const {createUser, getAllUsers, getUsers} = require('../controllers/userController');
const userRouter = require('express').Router();


userRouter.get('/', getAllUsers);
userRouter.get('/:roomId', getUsers);
userRouter.route('/user').post(createUser);

module.exports = userRouter;