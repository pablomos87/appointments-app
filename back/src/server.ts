import express from 'express';
import router from './routes';
import morgan from 'morgan';
import cors from 'cors';
import { Request, Response, NextFunction } from 'express';

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());
server.use(router);

server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  });

export default server;
