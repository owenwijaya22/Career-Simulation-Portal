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
 *   "question": "What is the color of the sky?",
 *   "task_id": "60e73bdf5b3c593b2c5b191e",
 *   "choices": [
 *     {
 *       "value": "Blue",
 *       "order": 1
 *     },
 *     {
 *       "value": "Green",
 *       "order": 2
 *     },
 *     {
 *       "value": "Red",
 *       "order": 3
 *     },
 *     {
 *       "value": "Yellow",
 *       "order": 4
 *     }
 *   ]
 * }
 */
questionRouter.route('/').post(createQuestion);

export default questionRouter;
