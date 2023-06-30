import { Router } from 'express';
import {
  createTask,
  getUserTasks,
  getTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

const taskRouter = Router();

taskRouter.post('/tasks', createTask);
taskRouter.get('/users/:userId/tasks', getUserTasks);
taskRouter.get('/tasks/:id', getTask);
taskRouter.patch('/tasks/:id', updateTask);
taskRouter.delete('/tasks/:id', deleteTask);

export default taskRouter;
