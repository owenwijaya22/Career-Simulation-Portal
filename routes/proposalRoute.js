import { Router } from 'express';
import {
  createProposal,
  saveProposal,
} from '../controllers/proposalController.js';

const proposalRouter = Router();

proposalRouter.post('/', createProposal).patch('/', saveProposal);
