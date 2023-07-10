import { Router } from 'express';
import {
  createUser,
  getAllUsers,
  getUsers,
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
 * @example response - 200 - Returns an array of user objects.
 * {
 *   "status": "success",
 *   "results": 2,
 *   "data": {
 *     "users": [
 *       {
 *         "tasks": [],
 *         "_id": "64a3c4a23510c42f08bb4344",
 *         "name": "test",
 *         "email": "testupdated@example.com",
 *         "password": "newsecuredpass",
 *         "roomId": "64a3c4a23510c42f08bb4343"
 *       },
 *       {
 *         "_id": "64ab69fb2a7b45ac61819ef3",
 *         "email": "johndoeupdated@example.com",
 *         "password": "newsecurepassword123",
 *         "tasks": [],
 *         "__v": 0,
 *         "roomId": "64a3c4a23510c42f08bb4343"
 *       }
 *     ]
 *   }
 * }
 */
userRouter.get('/', getAllUsers);

/**
 * GET /api/users/{roomId}
 * @summary This endpoint retrieves users by roomId. It returns the users who are part of the given room.
 * @tags users
 * @param {string} roomId.path.required - Room ID to find users.
 * @return {object} 200 - An array of user objects for a specific room.
 * @example response - 200 - Returns an array of user objects for a specific room.
 * {
 *   "status": "success",
 *   "results": 2,
 *   "data": {
 *     "users": [
 *       {
 *         "tasks": [],
 *         "_id": "64a3c4a23510c42f08bb4344",
 *         "name": "test",
 *         "email": "testupdated@example.com",
 *         "password": "newsecuredpass",
 *         "roomId": "64a3c4a23510c42f08bb4343"
 *       },
 *       {
 *         "_id": "64ab69fb2a7b45ac61819ef3",
 *         "email": "johndoeupdated@example.com",
 *         "password": "newsecurepassword123",
 *         "tasks": [],
 *         "__v": 0,
 *         "roomId": "64a3c4a23510c42f08bb4343"
 *       }
 *     ]
 *   }
 * }
 */
userRouter.get('/:roomId', getUsers);

/**
 * PUT /api/users/{id}
 * @summary This endpoint updates a user by ID.
 * @tags users
 * @param {string} id.path.required - User ID to update.
 * @param {object} request.body.required - The new data for the user. Example: "64ab69fb2a7b45ac61819ef3"
 * @return {object} 200 - Returns the updated user object.
 * @example request - application/json
 * {
 *    "email": "johndoeupdated@example.com",
 *    "password": "newsecurepassword123"
 * }
 */
userRouter.put('/:id', updateUser);

/**
 * DELETE /api/users/{id}
 * @summary This endpoint deletes a user by ID.
 * @tags users
 * @param {string} id.path.required - User ID to delete.
 * @return {object} 204 - Returns success status with no content.
 */
userRouter.delete('/:id', deleteUser);

export default userRouter;
