import { Router } from 'express';
import {
  createRoom,
  deleteRoom,
  leaveRoom,
  getAllRooms,
  getRoom,
} from '../controllers/roomController.js';

const roomRouter = Router();

/**
 * GET /api/rooms
 * @summary This endpoint retrieves all rooms
 * @tags rooms
 * @return {object} 200 - Success response - application/json
 */
roomRouter.route('/').get(getAllRooms);

/**
 * POST /api/room
 * @summary This endpoint creates a new room
 * @tags rooms
 * @param {object} request.body.required - The room's data to be created
 * @return {object} 201 - Success response - application/json
 * @example request - application/json
 * {
 *     "user": "648a767797a2f43a47c55cb6",
 *     "prompt": "greetings",
 *     "members": [
 *         "648a767797a2f43a47c55cb6",
 *         "648a77b697a2f43a47c55cb8"
 *     ]
 * }
 * @example response - 201 - Example response
 * {
 *     "status": "success",
 *     "data": {
 *         "room": {
 *             "user": "648a767797a2f43a47c55cb6",
 *             "prompt": "greetings",
 *             "members": [
 *                 "648a767797a2f43a47c55cb6",
 *                 "648a77b697a2f43a47c5   5cb8"
 *             ],
 *             "_id": "64ab6991701d3130a34a563c",
 *             "__v": 0
 *         }
 *     }
 * }
 */
roomRouter.route('/room').post(createRoom);

/**
 * GET /api/room/:roomId
 * @summary This endpoint retrieves a room by ID
 * @tags rooms
 * @param {string} roomId.path - required
 * @return {object} 200 - Success response - application/json
 */
roomRouter.route('/room/:roomId').get(getRoom);

/**
 * DELETE /api/room/:roomId
 * @summary This endpoint deletes a room by ID
 * @tags rooms
 * @param {string} roomId.path - required
 * @return {object} 204 - Success response - application/json
 */
roomRouter.route('/room/:roomId').delete(deleteRoom);

/**
 * PATCH /api/room/:roomId/leave
 * @summary This endpoint allows a user to leave a room
 * @tags rooms
 * @param {string} roomId.path - required
 * @return {object} 200 - Success response - application/json
 */
roomRouter.route('/room/:roomId/leave').patch(leaveRoom);

export default roomRouter;
