import { Router } from 'express';
import { getAllMessage, addMessage } from '../controllers/messageController.js';

const messageRouter = Router();

/**
 * GET /api/messages/{roomId}
 * @summary This endpoint retrieves all messages for a specific room
 * @tags messages
 * @param {string} roomId.path - required
 * @return {object} 200 - Success response - application/json
 */
messageRouter.route('/:roomId').get(getAllMessage);

/**
 * POST /api/messages
 * @summary This endpoint adds a new message
 * @tags messages
 * @return {object} 201 - Success response - application/json
 */
messageRouter.route('/').post(addMessage);

export default messageRouter;
