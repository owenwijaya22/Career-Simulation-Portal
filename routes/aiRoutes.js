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
 * @summary Retrieves all existing AI instances
 * @tags ai
 * @return {object} 200 - Success response containing an array of AI objects in "data.ais" property, and the total number of AI instances in "results" property - application/json
 * @example response - 200 - example response
 * {
 *   "status": "success",
 *   "results": 2,
 *   "data": {
 *     "ais": [
 *       {
 *         "id": "123",
 *         "name": "AI Name",
 *         "image": "AI Image URL",
 *         "prompt": "AI Prompt"
 *       }
 *     ]
 *   }
 * }
 */

/**
 * POST /api/ai
 * @summary Creates a new AI instance
 * @tags ai
 * @param {object} request.body.required - AI information to be created, must contain "name", "image", and "prompt" properties
 * @return {object} 201 - Success response containing the created AI object in "data.ai" property - application/json
 * @example request - application/json
 * {
 *   "name": "New AI",
 *   "image": "AI Image URL",
 *   "prompt": "AI Prompt"
 * }
 * @example response - 201 - example response
 * {
 *   "status": "success",
 *   "data": {
 *     "ai": {
 *       "id": "123",
 *       "name": "New AI",
 *       "image": "AI Image URL",
 *       "prompt": "AI Prompt"
 *     }
 *   }
 * }
 */
airouter.route('/').get(getAllAIs).post(createAI);

/**
 * GET /api/ai/:id
 * @summary Retrieves a specific AI by its ID
 * @tags ai
 * @param {string} id.path.required - ID of the AI to be retrieved
 * @return {object} 200 - Success response containing the retrieved AI object in "data.ai" property - application/json
 * @example response - 200 - example response
 * {
 *   "status": "success",
 *   "data": {
 *     "ai": {
 *       "id": "123",
 *       "name": "AI Name",
 *       "image": "AI Image URL",
 *       "prompt": "AI Prompt"
 *     }
 *   }
 * }
 */
/**
 * PUT /api/ai/:id
 * @summary Updates a specific AI by its ID
 * @tags ai
 * @param {string} id.path.required - ID of the AI to be updated
 * @param {object} request.body.required - Updated AI information, "name", "image", and/or "prompt" properties can be included
 * @return {object} 200 - Success response containing the updated AI object in "data.ai" property - application/json
 * @example response - 200 - example response
 * {
 *   "status": "success",
 *   "data": {
 *     "ai": {
 *       "id": "123",
 *       "name": "Updated AI Name",
 *       "image": "Updated AI Image URL",
 *       "prompt": "Updated AI Prompt",
 *       "modifiedAt": "2023-01-01T01:00:00Z"
 *     }
 *   }
 * }
 */

/**
 * DELETE /api/ai/:id
 * @summary DeletesSure, here's the updated documentation using express-jsdoc-swagger formatting:

/**
 * GET /api/ai
 * @summary Retrieves all existing AI instances
 * @tags ai
 * @return {object} 200 - Success response containing an array of AI objects in "data.ais" property, and the total number of AI instances in "results" property - application/json
 * @example response - 200 - example response
 * {
 *   "status": "success",
 *   "results": 2,
 *   "data": {
 *     "ais": [
 *       {
 *         "_id": "123",
 *         "name": "AI Name",
 *         "image": "AI Image URL",
 *         "prompt": "AI Prompt"
 *       }
 *     ]
 *   }
 * }
 */

/**
 * POST /api/ai
 * @summary Creates a new AI instance
 * @tags ai
 * @param {object} request.body.required - AI information to be created, must contain "name", "image", and "prompt" properties
 * @return {object} 201 - Success response containing the created AI object in "data.ai" property - application/json
 * @example request - application/json
 * {
 *   "name": "New AI",
 *   "image": "AI Image URL",
 *   "prompt": "AI Prompt"
 * }
 * @example response - 201 - example response
 * {
 *   "status": "success",
 *   "data": {
 *     "ai": {
 *       "_id": "123",
 *       "name": "New AI",
 *       "image": "AI Image URL",
 *       "prompt": "AI Prompt"
 *     }
 *   }
 * }
 */
airouter.route('/').get(getAllAIs).post(createAI);

/**
 * GET /api/ai/:id
 * @summary Retrieves a specific AI by its ID
 * @tags ai
 * @param {string} id.path.required - ID of the AI to be retrieved
 * @return {object} 200 - Success response containing the retrieved AI object in "data.ai" property - application/json
 * @example response - 200 - example response
 * {
 *   "status": "success",
 *   "data": {
 *     "ai": {
 *       "_id": "123",
 *       "name": "AI Name",
 *       "image": "AI Image URL",
 *       "prompt": "AI Prompt"
 *     }
 *   }
 * }
 */
/**
 * PUT /api/ai/:id
 * @summary Updates a specific AI by its ID
 * @tags ai
 * @param {string} id.path.required - ID of the AI to be updated
 * @param {object} request.body.required - Updated AI information, "name", "image", and/or "prompt" properties can be included
 * @return {object} 200 - Success response containing the updated AI object in "data.ai" property - application/json
 * @example response - 200 - example response
 * {
 *   "status": "success",
 *   "data": {
 *     "ai": {
 *       "_id": "123",
 *       "name": "Updated AI Name",
 *       "image": "Updated AI Image URL",
 *       "prompt": "Updated AI Prompt",
 *       "modifiedAt": "2023-01-01T01:00:00Z"
 *     }
 *   }
 * }
 */
/**
 * DELETE /api/ai/:id
 * @summary Deletesa specific AI by its ID
 * @tags ai
 * @param {string} id.path.required - ID of the AI to be deleted
 * @return {object} 204 - Success response with no content - application/json
 * @example response - 204 - example response
 * {
 *   "status": "success",
 *   "data": null
 * }
 */
airouter.route('/:id').get(getAIById).put(updateAI).delete(deleteAI);

export default airouter;
