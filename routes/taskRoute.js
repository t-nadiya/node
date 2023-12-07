import express from 'express';
import * as taskController from '../controllers/tasksController.js';
import checkAuth from '../middleware/checkAuth.js';
import checkAdmin from '../middleware/checkAdmin.js';

const router = express.Router();

router.use(checkAuth);

router.post('/task', taskController.createTask);
router.get('/tasks', taskController.getTasksByUserId);
router.get('/tasks/all', checkAdmin, taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

export default router;