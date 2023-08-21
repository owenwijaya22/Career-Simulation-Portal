import { Router } from 'express';
import {
  createProposal,
  saveProposal,
  getProposal,
  getProposals,
  unlockProposal,
} from '../controllers/proposalController.js';

const proposalRouter = Router();

proposalRouter
  .get('/getProposal/', getProposal)
  .get('/getProposals/', getProposals)
  .post('/', createProposal)
  .patch('/', saveProposal);

proposalRouter.put('/:id', unlockProposal);

export default proposalRouter;