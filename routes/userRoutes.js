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
 * @summary This endpoint creates a new user.
 * @tags users
 * @param {object} request.body.required - The user details to create.
 * @return {object} 201 - Returns the created user object.
 * @example request - application/json
 * {
 *    "email": "johndoe@example.com",
 *    "password": "securepassword123"
 * }
 * @example response - 201 - Returns the created user object.
 * {
 *   "status": "success",
 *   "data": {
 *     "user": {
 *       "email": "johndoe@example.com",
 *       "password": "securepassword123",
 *       "tasks": [],
 *       "_id": "64ab69fb2a7b45ac61819ef3",
 *       "__v": 0
 *     }
 *   }
 * }
 */
userRouter.post('/', createUser);

/**
 * GET /api/users
 * @summary This endpoint retrieves all users.
 * @tags users
 * @return {object} 200 - An array of user objects.
 */
userRouter.get('/', getAllUsers);

/**
 * GET /api/users/:roomId
 * @summary This endpoint retrieves users by roomId. It returns the users who are part of the given room.
 * @tags users
 * @param {string} roomId.path.required - Room ID to find users.
 * @return {object} 200 - An array of user objects for a specific room.
 */
userRouter.get('/:roomId', getUsers);

/**
 * GET /api/users/:id
 * @summary This endpoint retrieves a user by ID. It returns the user that matches the given ID.
 * @tags users
 * @param {string} id.path.required - User ID to retrieve.
 * @return {object} 200 - The user object for the specific ID.
 */
userRouter.get('/:id', getUserById);

/**
 * PUT /api/users/:id
 * @summary This endpoint updates a user by ID.
 * @tags users
 * @param {string} id.path.required - User ID to update.
 * @param {object} request.body.required - The new data for the user.
 * @param {string} request.body.email - The new email for the user.
 * @param {string} request.body.password - The new password for the user.
 * @return {object} 200 - Returns the updated user object.
 * @example request - application/json
 * {
 *    "email": "johndoeupdated@example.com",
 *    "password": "newsecurepassword123"
 * }
 */
userRouter.put('/:id', updateUser);

/**
 * DELETE /api/users/:id
 * @summary This endpoint deletes a user by ID.
 * @tags users
 * @param {string} id.path.required - User ID to delete.
 * @return {object} 204 - Returns success status with no content.
 */
userRouter.delete('/:id', deleteUser);

export default userRouter;
