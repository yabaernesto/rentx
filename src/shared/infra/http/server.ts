import 'reflect-metadata';
import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';

import '../../container';
import { AppError } from '../../errors/AppError';

import swaggerFile from '../../../swagger.json';
import { AppDataSource } from '../../../data-source';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'Error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

const PORT = 3333;

AppDataSource.initialize()
  .then(() => {
    console.log('📦 Banco de dados conectado com sucesso!');

    app.listen(PORT, () =>
      console.log(`Servidor rodando na porta: ${PORT} 🚀`),
    );
  })
  .catch((error) => {
    console.error('❌ Error:', error);
  });
