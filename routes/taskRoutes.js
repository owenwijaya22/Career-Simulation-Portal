const express = require('express');
const router = express.Router();
const taskController = require('./taskController');

router.post('/tasks', taskController.createTask);
router.get('/users/:userId/tasks', taskController.getUserTasks);
router.get('/tasks/:id', taskController.getTask);
router.patch('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
