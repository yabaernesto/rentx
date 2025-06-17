import { Car } from '../infra/typeorm/entities/Car';
import { ICreateCarsDTO } from '../dtos/ICreateCarDTO';

interface ICarsRepository {
  create(data: ICreateCarsDTO): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
}

export { ICarsRepository };
