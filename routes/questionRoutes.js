import { Router } from 'express';
import {
  createQuestion,
  getQuestions,
} from '../controllers/questionController.js';

const questionRouter = Router();

questionRouter.route('/').get(getQuestions);
questionRouter.route('/').post(createQuestion);

export default questionRouter;
