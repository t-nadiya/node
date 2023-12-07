import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';

import authRouter from './routes/authRoute.js';
import taskRouter from './routes/taskRoute.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', authRouter);
app.use('/api', taskRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});