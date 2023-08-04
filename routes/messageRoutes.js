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
 * @param {object} request.body.required - The messages's data to be created 
 * @return {object} 201 - Success response - application/json
 * @example request - application/json
 * {
 *    "message": "give me some advice now",
 *    "roomId": "64cb48a25d3f001c83d7cf74",
 *    "senderType": "USER",
 *    "sender": "64a3c4a23510c42f08bb4344",
 *    "npcId": "64c7308c2a2eb9b761071dbf"
 * }
 */
messageRouter.route('/').post(addMessage);

export default messageRouter;
