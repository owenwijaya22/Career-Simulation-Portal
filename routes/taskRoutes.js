import { Router } from 'express';
import {
  createTask,
  getUserTasks,
  getTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

const taskRouter = Router();

taskRouter.post('/', createTask);
taskRouter.get('/user/:userId', getUserTasks);
taskRouter.get('/:id', getTask);
taskRouter.patch('/:id', updateTask);
taskRouter.delete('/:id', deleteTask);


export default taskRouter;
