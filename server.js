import express from 'express';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import './config/db.js';


// Routes
import authRouter from './routes/authRoute.js';
import taskRouter from './routes/taskRoute.js';
import swaggerSpec from './config/swagger.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/api', authRouter);
app.use('/api', taskRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});