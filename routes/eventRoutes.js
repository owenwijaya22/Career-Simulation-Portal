import { Router } from 'express';

import {
  triggerEvent,
  // createEvent,
} from '../controllers/eventController/index.js';

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

 *   "message": "Event Created",
 *   "data": {
 *     "event": {
 *       "_id": "60e73bdf5b3c593b2c5b191e",
 *       "choiceId": "64a3b774f4e449afdd7938b8",
 *       "next_question_id": "60e73bdf5b3c593b2c5b191c",
 *       "next_task_id": "64a38f2f863a68a02809c0bc",
 *       "next_clue_id": "60e73bdf5b3c593b2c5b191a"
 *     }
 *   }
 * }
 */
eventRouter.post('/', triggerEvent);

/**
 * GET /api/events
 * @summary This endpoint triggers an event based on a choice
 * @tags events
 * @param {string} request.body.choiceId.required - Choice ID
 * @return {object} 200 - Success response - application/json
 * @example request - application/json
 * {
 *  "choiceId": "64a3b774f4e449afdd7938b8"
 * }
 * @example response - 200 - Example response
 *   {
 *       "message": "Event triggered",
 *       "data": [
 *           {
 *               "nextMoveType": "task",
 *               "nextMove": {
 *                   "_id": "64a38f2f863a68a02809c0bc",
 *                   "title": "Market Research",
 *                   "description": "Conduct market research to identify new business opportunities",
 *                   "completed": false,
 *                   "company": "64a3c5123510c42f08bb4345",
 *                   "taskType": "Business Development",
 *                   "templates": [
 *                       {
 *                           "name": "Planning",
 *                           "desc": "Outline the objective, scope, and methods for the research",
 *                           "order": 1,
 *                           "_id": "64a38f2f863a68a02809c0bd"
 *                       },
 *                       {
 *                           "name": "Data Collection",
 *                           "desc": "Collect data from various sources",
 *                           "order": 2,
 *                           "_id": "64a38f2f863a68a02809c0c0"
 *                       },
 *                       {
 *                           "name": "Analysis",
 *                           "desc": "Analyze the data to extract insights",
 *                           "order": 3,
 *                           "_id": "64a38f2f863a68a02809c0c3"
 *                       },
 *                       {
 *                           "name": "Reporting",
 *                           "desc": "Compile the findings into a report",
 *                           "order": 4,
 *                           "_id": "64a38f2f863a68a02809c0c6"
 *                       }
 *                   ],
 *                   "createdAt": "2023-07-04T03:17:03.717Z",
 *                   "updatedAt": "2023-07-04T03:17:03.717Z",
 *                   "__v": 0
 *               }
 *           }
 *       ]
 *   }
 */
// eventRouter.get('/', triggerEvent);

export default eventRouter;
