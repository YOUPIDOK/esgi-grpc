import {Injectable} from '@nestjs/common';
import {PrismaService} from './prisma.service';
import {Car} from "../stub/car/car";

@Injectable()
export class CarService {
  constructor(private readonly prisma: PrismaService) {}

  async createCar(data): Promise<Car> {
    return this.prisma.car.create({data});
  }
  async listCars(): Promise<Car[]> {
    return this.prisma.car.findMany();
  }
  async getCar(carId: number): Promise<Car> {
    return this.prisma.car.findUnique({
      where: { carId: carId },
    });
  }
  async updateCar(data: Car) {
    return this.prisma.car.update({
      where: { carId: data.carId },
      data,
    });
  }
  async deleteCar(carId: number) {
    return this.prisma.car.delete({
      where: { carId: carId },
    });
  }
}
