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
router.route('/').get(getAllAttempts);

/**
 * POST /api/attempts
 * @summary This endpoint creates a new attempt
 * @tags attempts
 * @param {object} request.body.required - attempt info
 * @return {object} 201 - Success response - application/json
 * @return {object} 400 - Bad request response
 * @return {object} 500 - Unexpected error response
 * @example request - application/json
 * {
 *   "userId": "60ddc9738541973b9caed209",
 *   "companyId": "60ddc9738541973b9caed210",
 *   "startTime": "2023-07-04T10:30:00Z",
 *   "endTime": "2023-07-04T12:00:00Z",
 *   "taskIds": [
 *     {
 *       "taskId": "64a38f2f863a68a02809c0bc",
 *       "complete": false
 *     }
 *   ]
 * }
 */
router.route('/').post(createAttempt);

/**
 * GET /api/attempts/{id}
 * @summary This endpoint retrieves an attempt by ID
 * @tags attempts
 * @param {string} id.path - required
 * @return {object} 200 - Success response - application/json
 */
/**
 * PATCH /api/attempts/{id}
 * @summary This endpoint updates an attempt by ID
 * @tags attempts
 * @param {string} id.path - required
 * @return {object} 200 - Success response - application/json
 */
/**
 * DELETE /api/attempts/{id}
 * @summary This endpoint deletes an attempt by ID
 * @tags attempts
 * @param {string} id.path - required
 * @return {object} 204 - Success response - application/json
 */
router
  .route('/:id')
  .get(getAttemptById)
  .patch(updateAttempt)
  .delete(deleteAttempt);

export default router;
