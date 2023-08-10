import { Router } from 'express';
import {
  createQuestion,
  getQuestions,
} from '../controllers/questionController.js';

const questionRouter = Router();

/**
 * GET /api/questions
 * @summary This endpoint retrieves all questions
 * @tags questions
 * @return {object} 200 - Success response - application/json
 */
questionRouter.route('/').get(getQuestions);

/**
 * POST /api/questions
 * @summary This endpoint creates a new question
 * @tags questions
 * @param {object} request.body.required - Question info
 * @param {string} request.body.required.question - The question
 * @param {string} request.body.required.task_id - ID of the task the question belongs to
 * @param {array<object>} request.body.required.choices - Array of choices
 * @param {string} request.body.required.choices.value - The choice value
 * @param {number} request.body.required.choices.order - The order of the choice
 * @return {object} 201 - Success response - application/json
 * @example request - application/json
 * {
 *   "question": "What are the unmet needs or pain points of the target market?",
 *   "npcId": "64c7308c2a2eb9b761071dbf",
 *   "choices": [
 *     {
 *       "value": "Managing inventory efficiently",
 *       "rating": 1
 *     },
 *     {
 *       "value": "Finding reliable freelance professionals",
 *       "rating": 2
 *     },
 *     {
 *       "value": "Having an app that integrates personalized recommendations",
 *       "rating": 3
 *     }
 *   ]
 * }
 */
questionRouter.route('/').post(createQuestion);

export default questionRouter;
