import { Router } from 'express';
import { createClue, unlockClue } from '../controllers/clueController.js';

const clueRouter = Router();

/**
 * POST /
 * @summary This endpoint creates a new Clue instance
 * @tags Clue
 * @param {object} request.body.required - Clue info to be created
 * @return {object} 201 - Success response containing the created Clue object - application/json
 * @example request - application/json
 * {
 *    "clue": "New Clue",
 *    "taskId": "TaskID"
 * }
 * @example response - 201 - Example response
 * {
 *   "message": "Clue Created",
 *   "data": {
 *     "clue": {
 *       "_id": "123",
 *       "clue": "New Clue",
 *       "taskId": "TaskID",
 *       "locked": true,
 *       "createdAt": "2023-01-01T00:00:00Z",
 *       "modifiedAt": "2023-01-01T00:00:00Z"
 *     }
 *   }
 * }
 */
clueRouter.route('/').post(createClue);

/**
 * GET /
 * @summary This endpoint unlocks an existing Clue instance
 * @tags Clue
 * @param {string} id.path.required - Clue ID to be unlocked
 * @return {object} 200 - Success response indicating the Clue is unlocked - application/json
 * @example response - 200 - Example response
 * {
 *   "message": "Clue unlocked",
 * }
 */
clueRouter.route('/:id').get(unlockClue);

export default clueRouter;
