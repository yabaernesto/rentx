import { Router } from 'express';

import { CreateSpecificationsService } from '../modules/cars/services/CreateSpecificationsService';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const specificationsService = new CreateSpecificationsService(
    specificationsRepository,
  );

  specificationsService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
