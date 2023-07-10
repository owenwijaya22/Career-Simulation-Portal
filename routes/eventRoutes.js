import { Router } from 'express';

import { triggerEvent, createEvent } from '../controllers/eventController.js';

const eventRouter = Router();

/**
 * POST /api/events
 * @summary This endpoint creates a new event
 * @tags events
 * @param {object} request.body.required - Event info 
 * @return {object} 201 - Success response - application/json
 * @example request - application/json
 * {
 *   "choiceId": "60e73bdf5b3c593b2c5b191d",
 *   "next_question_id": "60e73bdf5b3c593b2c5b191c",
 *   "next_task_id": "60e73bdf5b3c593b2c5b191b",
 *   "next_clue_id": "60e73bdf5b3c593b2c5b191a"
 * }
 * @example response - 201 - Example response
 * {
 *   "status": "success",
 *   "message": "Event Created",
 *   "data": {
 *     "event": {
 *       "_id": "60e73bdf5b3c593b2c5b191e",
 *       "choiceId": "60e73bdf5b3c593b2c5b191d",
 *       "next_question_id": "60e73bdf5b3c593b2c5b191c",
 *       "next_task_id": "60e73bdf5b3c593b2c5b191b",
 *       "next_clue_id": "60e73bdf5b3c593b2c5b191a"
 *     }
 *   }
 * }
 */
eventRouter.post('/', createEvent);

/**
 * GET /api/events
 * @summary This endpoint triggers an event based on a choice
 * @tags events
 * @param {string} request.body.choiceId.required - Choice ID
 * @return {object} 200 - Success response - application/json
 * @example response - 200 - Example response
 * {
 *   "status": "success",
 *   "message": "Event triggered",
 *   "data": [
 *     {
 *       "nextMoveType": "task",
 *       "nextMove": {
 *         "_id": "60e73bdf5b3c593b2c5b191b",
 *         "title": "Next Task Title",
 *         "description": "Next Task Description"
 *       }
 *     }
 *   ]
 * }
 */
eventRouter.get('/', triggerEvent);

export default eventRouter;
