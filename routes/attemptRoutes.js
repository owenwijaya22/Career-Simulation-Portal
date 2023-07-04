import express from 'express';
import {
  getAllAttempts,
  getAttemptById,
  createAttempt,
  updateAttempt,
  deleteAttempt,
} from '../controllers/attemptController.js';

const router = express.Router();

/**
 * GET /api/attempts
 * @summary This endpoint retrieves all attempts
 * @tags attempts
 * @return {object} 200 - Success response - application/json
 */
/**
 * POST /api/attempts
 * @summary This endpoint creates a new attempt
 * @tags attempts
 * @return {object} 201 - Success response - application/json
 */
router.route('/').get(getAllAttempts).post(createAttempt);

/**
 * GET /api/attempts/:id
 * @summary This endpoint retrieves an attempt by ID
 * @tags attempts
 * @param {string} id.path - required
 * @return {object} 200 - Success response - application/json
 */
/**
 * PATCH /api/attempts/:id
 * @summary This endpoint updates an attempt by ID
 * @tags attempts
 * @param {string} id.path - required
 * @return {object} 200 - Success response - application/json
 */
/**
 * DELETE /api/attempts/:id
 * @summary This endpoint deletes an attempt by ID
 * @tags attempts
 * @param {string} id.path - required
 * @return {object} 204 - Success response - application/json
 */
router.route('/:id').get(getAttemptById).patch(updateAttempt).delete(deleteAttempt);

export default router;
