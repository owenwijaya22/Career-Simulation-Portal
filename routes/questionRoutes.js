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
 * @return {object} 201 - Success response - application/json
 */
questionRouter.route('/').post(createQuestion);

export default questionRouter;
