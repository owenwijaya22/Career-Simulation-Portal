const userRouter = require('express').Router();
const {
  createUser,
  getAllUsers,
  getUsers,
} = require('../controllers/userController');

userRouter.get('/', getAllUsers);
userRouter.get('/:roomId', getUsers);
userRouter.route('/user').post(createUser);

module.exports = userRouter;
