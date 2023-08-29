import { Router } from 'express';
import {
  getConversationsByName,
  createConversation,
  getAllConversations,
  saveConversation
} from '../controllers/officeConversationController.js';

const officeConvoRouter = Router();

/**
 * GET /api/officeconvo
 * @summary This endpoint retrieves all conversations
 * @tags conversations
 * @return {object} 200 - Success response - application/json
 */
officeConvoRouter.route('/').get(getAllConversations);
/**
 * GET /api/officeconvo/{name}
 * @summary This endpoint retrieves all conversations for a specific name eg. boss1, boss2 etc.
 * @tags conversations
 * @param {string} name.path - required
 * @return {object} 200 - Success response - application/json
 */
officeConvoRouter.route('/:name').get(getConversationsByName);
/**
 * POST /api/officeconvo
 * @summary This endpoint creates a new conversation
 * @tags conversation
 * @param {object} request.body.required - Chat info
 * @param {string} request.body.required.chat - The Chat
 * @param {array<object>} request.body.required.choices - Array of choices
 * @param {string} request.body.required.choices.message - The choice message
 * @param {number} request.body.required.choices.nextId - The nextId of the choice
 * @return {object} 201 - Success response - application/json
 * @example request - application/json
 */
officeConvoRouter.route('/').post(createConversation);
officeConvoRouter.route('/').patch(saveConversation);

export default officeConvoRouter;