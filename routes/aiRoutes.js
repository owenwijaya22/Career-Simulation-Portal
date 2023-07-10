import { Router } from 'express';
import {
  createAI,
  getAllAIs,
  getAIById,
  updateAI,
  deleteAI,
} from '../controllers/aiController.js';

const airouter = Router();

/**
 * GET /api/ai-user
 * @summary This endpoint retrieves all AI instances
 * @tags ai
 * @return {object} 200 - Success response containing an array of AI objects - application/json
 * @example response - 200 - Example response
 * {
 *   "status": "success",
 *   "results": 2,
 *   "data": {
 *     "ais": [
 *       {
 *         "_id": "123",
 *         "name": "AI Name",
 *         "image": "AI Image URL",
 *         "prompt": "AI Prompt",
 *         "createdAt": "2023-01-01T00:00:00Z",
 *         "modifiedAt": "2023-01-01T00:00:00Z"
 *       }
 *     ]
 *   }
 * }
 */
airouter.route('/').get(getAllAIs)

/**
 * POST /api/ai-user
 * @summary This endpoint creates a new AI instance
 * @tags ai
 * @param {object} request.body.required - AI info to be created
 * @return {object} 201 - Success response containing the created AI object - application/json
 * @example request - application/json
 * {
 *    "name": "New AI",
 *    "image": "AI Image URL",
 *    "prompt": "AI Prompt"
 * }
 * @example response - 201 - Example response
 * {
 *   "status": "success",
 *   "data": {
 *     "ai": {
 *       "_id": "123",
 *       "name": "New AI",
 *       "image": "AI Image URL",
 *       "prompt": "AI Prompt",
 *       "createdAt": "2023-01-01T00:00:00Z",
 *       "modifiedAt": "2023-01-01T00:00:00Z"
 *     }
 *   }
 * }
 */
airouter.route('/').post(createAI);


/**
 *  GET /api/ai-user/:id
 * @summary This endpoint retrieves an AI by ID
 * @tags ai
 * @param {string} id.path.required - AI ID
 * @return {object} 200 - Success response containing the retrieved AI object - application/json
 * @example response - 200 - Example response
 * {
 *   "status": "success",
 *   "data": {
 *     "ai": {
 *       "_id": "123",
 *       "name": "AI Name",
 *       "image": "AI Image URL",
 *       "prompt": "AI Prompt",
 *       "createdAt": "2023-01-01T00:00:00Z",
 *       "modifiedAt": "2023-01-01T00:00:00Z"
 *     }
 *   }
 * }
 */
/**
 *  PUT /api/ai-user/:id
 * @summary This endpoint updates an AI by ID
 * @tags ai
 * @param {string} id.path.required - AI ID
 * @return {object} 200 - Success response containing the updated AI object - application/json
 * @example response - 200 - Example response
 * {
 *   "status": "success",
 *   "data": {
 *     "ai": {
 *       "_id": "123",
 *       "name": "Updated AI Name",
 *       "image": "Updated AI Image URL",
 *       "prompt": "Updated AI Prompt",
 *       "createdAt": "2023-01-01T00:00:00Z",
 *       "modifiedAt": "2023-01-01T01:00:00Z"
 *     }
 *   }
 * }
 */
/**
 *  DELETE /api/ai-user/:id
 * @summary This endpoint deletes an AI by ID
 * @tags ai
 * @param {string} id.path.required - AI ID
 * @return {object} 204 - Success response with no content - application/json
 * @example response - 204 - Example response
 * {
 *   "status": "success",
 *   "data": null
 * }
 */
airouter.route('/:id').get(getAIById).put(updateAI).delete(deleteAI);

export default airouter;
