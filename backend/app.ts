import express from 'express';
import userRoutes from './src/modules/users/user.routes';
import { loggerMiddleware } from './src/shared/middlewares';

const app = express();

app.use(express.json());
app.use(loggerMiddleware);
app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('Backend rodando'));

export default app;
