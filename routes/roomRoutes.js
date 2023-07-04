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
 * @return {object} 201 - Success response - application/json
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
