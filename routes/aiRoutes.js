import { Router } from 'express';
import {
  createAI,
  getAllAIs,
  getAIById,
  updateAI,
  deleteAI,
} from '../controllers/aiController.js';

const airouter = Router();

airouter.route('/').get(getAllAIs).post(createAI);
airouter.route('/:id').get(getAIById).put(updateAI).delete(deleteAI);

export default airouter;
