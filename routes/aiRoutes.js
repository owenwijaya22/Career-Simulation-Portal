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
 * @summary This endpoint retrieves all AIs
 * @tags ai
 * @return {object} 200 - Success response - application/json
 */
/**
 * POST /api/ai
 * @summary This endpoint creates a new AI
 * @tags ai
 * @return {object} 201 - Success response - application/json
 */
airouter.route('/').get(getAllAIs).post(createAI);

/**
 * GET /api/ai/:id
 * @summary This endpoint retrieves an AI by ID
 * @tags ai
 * @param {string} id.path - required
 * @return {object} 200 - Success response - application/json
 */
/**
 * PUT /api/ai/:id
 * @summary This endpoint updates an AI by ID
 * @tags ai
 * @param {string} id.path - required
 * @return {object} 200 - Success response - application/json
 */
/**
 * DELETE /api/ai/:id
 * @summary This endpoint deletes an AI by ID
 * @tags ai
 * @param {string} id.path - required
 * @return {object} 204 - Success response - application/json
 */
airouter.route('/:id').get(getAIById).put(updateAI).delete(deleteAI);

export default airouter;
