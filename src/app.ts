import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import error from './middleware/error';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const baseUrl = '/api';
app.use(baseUrl, userRoutes);

app.use(error);

export default app;