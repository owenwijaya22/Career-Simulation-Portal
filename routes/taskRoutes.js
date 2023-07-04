import { Router } from 'express';
import {
  createTask,
  getCompanyTasks,
  getTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

const router = Router();

/**
 * POST /api/tasks
 * @summary This endpoint creates a new task
 * @tags tasks
 * @return {object} 201 - Success response - application/json
 */
router.post('/', createTask);

/**
 * GET /api/tasks/company/:companyId
 * @summary This endpoint retrieves all tasks for a specific company
 * @tags tasks
 * @param {string} companyId.path - required
 * @return {object} 200 - Success response - application/json
 */
router.get('/company/:companyId', getCompanyTasks);

/**
 * GET /api/tasks/:id
 * @summary This endpoint retrieves a task by ID
 * @tags tasks
 * @param {string} id.path - required
 * @return {object} 200 - Success response - application/json
 */
router.get('/:id', getTask);

/**
 * PATCH /api/tasks/:id
 * @summary This endpoint updates a task by ID
 * @tags tasks
 * @param {string} id.path - required
 * @return {object} 200 - Success response - application/json
 */
router.patch('/:id', updateTask);

/**
 * DELETE /api/tasks/:id
 * @summary This endpoint deletes a task by ID
 * @tags tasks
 * @param {string} id.path - required
 * @return {object} 204 - Success response - application/json
 */
router.delete('/:id', deleteTask);

export default router;
