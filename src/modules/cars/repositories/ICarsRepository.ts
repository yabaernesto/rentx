import { ICreateCarsDTO } from '../dtos/ICreateCarDTO';

interface ICarsRepository {
  create(data: ICreateCarsDTO): Promise<void>;
}

export { ICarsRepository };
