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
 * @param {object} request.body.required - task info
 * @param {string} request.body.required.title - title of task
 * @param {string} request.body.description - description of task
 * @param {boolean} request.body.completed - task completion status
 * @param {string} request.body.required.company - company id
 * @param {string} request.body.required.taskType - type of task
 * @param {array<object>} request.body.required.templates - array of template objects
 * @param {string} request.body.required.templates.name - name of template
 * @param {string} request.body.required.templates.desc - description of template
 * @param {number} request.body.required.templates.order - order of template
 * @return {object} 201 - Success response - application/json
 * @return {object} 400 - Bad request response
 * @return {object} 500 - Unexpected error response
 * @example request - application/json
 * {
 *   "title": "Market Research",
 *   "description": "Conduct market research to identify new business opportunities",
 *   "completed": false,
 *   "company": "60ddc9738541973b9caed210",
 *   "taskType": "Business Development",
 *   "templates": [
 *     {
 *       "name": "Planning",
 *       "desc": "Outline the objective, scope, and methods for the research",
 *       "order": 1
 *     },
 *     {
 *       "name": "Data Collection",
 *       "desc": "Collect data from various sources",
 *       "order": 2
 *     },
 *     {
 *       "name": "Analysis",
 *       "desc": "Analyze the data to extract insights",
 *       "order": 3
 *     },
 *     {
 *       "name": "Reporting",
 *       "desc": "Compile the findings into a report",
 *       "order": 4
 *     }
 *   ]
 * }
 */
router.route('/').post(createTask);

/**
 * GET /api/tasks/company/{companyId}
 * @summary This endpoint retrieves all tasks for a specific company
 * @tags tasks
 * @param {string} companyId.path - required
 * @return {object} 200 - Success response - application/json
 */
router.get('/company/:companyId', getCompanyTasks);

/**
 * GET /api/tasks/{id}
 * @summary This endpoint retrieves a task by ID
 * @tags tasks
 * @param {string} id.path - required
 * @return {object} 200 - Success response - application/json
 */
router.get('/:id', getTask);

/**
 * PATCH /api/tasks/{id}
 * @summary This endpoint updates a task by ID
 * @tags tasks
 * @param {string} id.path - required
 * @return {object} 200 - Success response - application/json
 */
router.patch('/:id', updateTask);

/**
 * DELETE /api/tasks/{id}
 * @summary This endpoint deletes a task by ID
 * @tags tasks
 * @param {string} id.path - required
 * @return {object} 204 - Success response - application/json
 */
router.delete('/:id', deleteTask);

export default router;
