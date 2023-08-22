import { Router } from 'express';
import {
  createRoom,
  deleteRoom,
  leaveRoom,
  getAllRooms,
  getRoom,
  getUsers,
} from '../controllers/roomController.js';

const roomRouter = Router();

/**
 * GET /api/rooms
 * @summary This endpoint retrieves all rooms
 * @tags rooms
 * @param {string} attemptId.path - required
 * @return {object} 200 - Success response - application/json
 */
roomRouter.route('/:attemptId').get(getAllRooms);

/**
 * GET /api/rooms/{roomId}
 * @summary This endpoint retrieves users by roomId. It returns the users who are part of the given room. Example: "64a3c4a23510c42f08bb4343"
 * @tags rooms
 * @param {string} roomId.path.required - Room ID to find users.
 * @return {object} 200 - An array of user objects for a specific room.
 * @example response - 200 - Returns an array of user objects for a specific room.
 * {

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
roomRouter.route('/:roomId').get(getUsers);

/**
 * GET /api/rooms/room/{roomId}
 * @summary This endpoint retrieves a room by ID
 * @tags rooms
 * @param {string} roomId.path - required
 * @return {object} 200 - Success response - application/json
 */
roomRouter.route('/room/:roomId').get(getRoom);

/**
 * POST /api/rooms
 * @summary This endpoint creates a new room
 * @tags rooms
 * @param {object} request.body.required - The room's data to be created
 * @return {object} 201 - Success response - application/json
 * @example request - application/json
 * {
 *     "userId": "64a3c4a23510c42f08bb4344",
 *     "npcId": "64c7308c2a2eb9b761071dbf",
 *     "company": "64a3c5123510c42f08bb4345"
 * }
 * @example response - 201 - Example response
 * {
 *         "room": {
 *             "userId": "648a767797a2f43a47c55cb6",
 *             "prompt": "greetings",
 *             "members": [
 *                 "648a767797a2f43a47c55cb6",
 *                 "648a77b697a2f43a47c5   5cb8"
 *             ],
 *             "_id": "64ab6991701d3130a34a563c",
 *             "__v": 0
 *         }
 *     }
 */
roomRouter.route('/').post(createRoom);

/**
 * DELETE /api/room/{roomId}
 * @summary This endpoint deletes a room by ID
 * @tags rooms
 * @param {string} roomId.path - required
 * @return {object} 204 - Success response - application/json
 */
roomRouter.route('/:roomId').delete(deleteRoom);

/**
 * PATCH /api/rooms/{roomId}/leave
 * @summary This endpoint allows a user to leave a room
 * @tags rooms
 * @param {string} roomId.path - required
 * @return {object} 200 - Success response - application/json
 */
roomRouter.route('/room/:roomId/leave').patch(leaveRoom);

export default roomRouter;
