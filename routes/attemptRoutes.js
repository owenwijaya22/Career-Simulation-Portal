import express from 'express';
import {
  getAllAttempts,
  getAttemptById,
  createAttempt,
  updateAttempt,
  deleteAttempt,
  createTask,
  completeTask,
} from '../controllers/attemptController.js';

const router = express.Router();

// Routes related to attempts
router.route('/').get(getAllAttempts).post(createAttempt);
router.route('/:id').get(getAttemptById).patch(updateAttempt).delete(deleteAttempt);

// Route to create a task
router.route('/task').post(createTask);

// Route to complete a task
router.route('/:id/task/:taskId').patch(completeTask);

export default router;
