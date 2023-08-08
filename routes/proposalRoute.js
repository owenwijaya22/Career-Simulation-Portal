import { Router } from 'express';
import {
  createProposal,
  saveProposal,
  getProposal
} from '../controllers/proposalController.js';

const proposalRouter = Router();

proposalRouter.get('/', getProposal).post('/', createProposal).patch('/', saveProposal);

export default proposalRouter;
