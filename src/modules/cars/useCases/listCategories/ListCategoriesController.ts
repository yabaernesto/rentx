import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoriesRepository: ListCategoriesUseCase) {}

  handle(request: Request, response: Response) {
    const all = this.listCategoriesRepository.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };
