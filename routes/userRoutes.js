import { Router } from 'express';
import {
  createUser,
  getAllUsers,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const userRouter = Router();

/**
 * POST /api/users
 * @summary This endpoint creates a new user
 * @tags users
 * @return {object} 201 - Success response - application/json
 */
userRouter.post('/', createUser);

/**
 * GET /api/users
 * @summary This endpoint retrieves all users
 * @tags users
 * @return {object} 200 - Success response - application/json
 */
userRouter.get('/', getAllUsers);

/**
 * GET /api/users/:roomId
 * @summary This endpoint retrieves users by roomId
 * @tags users
 * @param {string} roomId.path - required
 * @return {object} 200 - Success response - application/json
 */
userRouter.get('/:roomId', getUsers);

/**
 * GET /api/users/:id
 * @summary This endpoint retrieves a user by ID
 * @tags users
 * @param {string} id.path - required
 * @return {object} 200 - Success response - application/json
 */
userRouter.get('/:id', getUserById);

/**
 * PUT /api/users/:id
 * @summary This endpoint updates a user by ID
 * @tags users
 * @param {string} id.path - required
 * @return {object} 200 - Success response - application/json
 */
userRouter.put('/:id', updateUser);

/**
 * DELETE /api/users/:id
 * @summary This endpoint deletes a user by ID
 * @tags users
 * @param {string} id.path - required
 * @return {object} 204 - Success response - application/json
 */
userRouter.delete('/:id', deleteUser);

export default userRouter;
