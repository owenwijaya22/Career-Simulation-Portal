const { createUser, getAllUsers, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const userRouter = require('express').Router();

// create a new user
userRouter.post('/', createUser);
// fetch all users
userRouter.get('/', getAllUsers);
// fetch users by roomId
userRouter.get('/:roomId', getUsers);
// fetch a user by ID
userRouter.get('/:id', getUserById);
// update a user by ID
userRouter.put('/:id', updateUser);
// delete a user by ID
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
