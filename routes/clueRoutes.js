import { Router } from 'express';
import { createClue, unlockClue } from '../controllers/clueController.js';

const clueRouter = Router();

clueRouter.route('/').get(unlockClue).post(createClue);

export default clueRouter;
