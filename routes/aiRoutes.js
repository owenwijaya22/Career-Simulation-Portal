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
 * GET /api/ai
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
 * POST /api/ai
 * @summary This endpoint creates a new AI instance
 * @tags ai
 * @param {object} request.body.required - AI info to be created
 * @param {string} request.body.name - AI name
 * @param {string} request.body.image - AI image URL
 * @param {string} request.body.prompt - AI prompt
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
 *  GET /api/ai/:id
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
 *  PUT /api/ai/:id
 * @summary This endpoint updates an AI by ID
 * @tags ai
 * @param {string} id.path.required - AI ID
 * @param {object} request.body.required - AI info to be updated
* @param {string} request.body.name - Updated AI name
 * @param {string} request.body.image - Updated AI image URL
 * @param {string} request.body.prompt - Updated AI prompt
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
 *  DELETE /api/ai/:id
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
