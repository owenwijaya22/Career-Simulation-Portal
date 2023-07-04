import { Router } from 'express';
import {
  createTask,
  getCompanyTasks,
  getTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

const taskRouter = Router();

taskRouter.post('/', createTask);
taskRouter.get('/company/:companyId', getCompanyTasks);
taskRouter.get('/:id', getTask);
taskRouter.patch('/:id', updateTask);
taskRouter.delete('/:id', deleteTask);


export default taskRouter;
