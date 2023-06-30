const router = require('express').Router();
const {
  createUser,
  getAllUsers,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

// create a new user
router.post('/', createUser);
// fetch all users
router.get('/', getAllUsers);
// fetch users by roomId
router.get('/:roomId', getUsers);
// fetch a user by ID
router.get('/:id', getUserById);
// update a user by ID
router.put('/:id', updateUser);
// delete a user by ID
router.delete('/:id', deleteUser);

module.exports = userRouter;
