import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { router } from './routes';
import swaggerFile from './swagger.json';
import { AppDataSource } from './data-source';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

const PORT = 3333;

AppDataSource.initialize()
  .then(() => {
    console.log('📦 Banco de dados conectado com sucesso!');

    app.listen(PORT, () =>
      console.log(`Server is running on port: ${PORT} 🚀`),
    );
  })
  .catch((error) => {
    console.error('❌ Error:', error);
  });
