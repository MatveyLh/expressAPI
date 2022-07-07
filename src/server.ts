import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import swaggerDocument from '../swagger.json';
import statisticRoute from './routes/statisticRoutes';
import userRoutes from './routes/userRoutes';
import { Database } from './database';

const swaggerUi = require('swagger-ui-express');
const cors = require('cors');

const app = express();
dotenv.config();

// Init global instance for database
Database.getInstance();

app.use(cors({ credentials: false }));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/docs', swaggerUi.serve);

app.get('/docs', swaggerUi.setup(swaggerDocument));
app.get('/', (req: Request, res: Response) => {
  res.send('Wow! You are doing SoftTeco frontend task. We believe that you will succeed!! :)');
});

app.use('/user', userRoutes);
app.use('/statistic', statisticRoute);

app.listen(process.env.PORT || 3000, () => {
  console.info(`Server started at http://localhost:${process.env.PORT || 3000}`);
});
