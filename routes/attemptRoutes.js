import express from 'express';
import {
  getAllAttempts,
  getAttemptById,
  createAttempt,
  updateAttempt,
  deleteAttempt,
} from '../controllers/attemptController.js';

const router = express.Router();

// Routes related to attempts
router.route('/').get(getAllAttempts).post(createAttempt);
router.route('/:id').get(getAttemptById).patch(updateAttempt).delete(deleteAttempt);
router.route('/:id/tasks').patch(updateTask)

export default router;
