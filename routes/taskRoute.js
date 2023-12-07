import express from 'express';
import * as taskController from '../controllers/tasksController.js';
import checkAuth from '../middleware/checkAuth.js';
import checkAdmin from '../middleware/checkAdmin.js';

const router = express.Router();

router.use(checkAuth);

/**
 * @openapi
 * '/api/task':
 *   post:
 *     tags:
 *      - Task
 *     summary: Create a task
 *     security:
 *      - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 default: Buy a book
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */

router.post('/task', taskController.createTask);

/**
 * @openapi
 * '/api/tasks':
 *   get:
 *     tags:
 *       - Task
 *     summary: Get tasks
 *     security:
 *       - basicAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   description:
 *                     type: string
 *                   completed:
 *                     type: boolean
 *                   createdBy:
 *                     type: string
 *       400:
 *         description: Bad Request
 */
router.get('/tasks', taskController.getTasksByUserId);
router.get('/tasks/all', checkAdmin, taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

export default router;