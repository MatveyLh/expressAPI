import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import statisticRoute from './routes/statisticRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
dotenv.config();

app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Wow! You are doing SoftTeco frontend task. We believe that you will succeed!! :)');
});

app.use('/user', userRoutes);
app.use('/statistic', statisticRoute);

app.listen(process.env.PORT || 3000, () => {
  console.info(`Server started at http://localhost:${port}`);
});
