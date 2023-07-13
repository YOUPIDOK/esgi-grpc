import { Controller, HttpStatus, Inject, UseGuards } from '@nestjs/common';
import {
  CreateCarRequest, CreateCarResponse, DeleteCarRequest, DeleteCarResponse,
  GetCarRequest,
  GetCarResponse,
  ListCarsRequest,
  ListCarsResponse, UpdateCarRequest, UpdateCarResponse
} from "../stub/car/car";
import {CarService} from "../service/car.service";
import {AuthGuard} from "../guard/auth.guard";
import {CarServiceControllerMethods} from "../stub/car/car";
import {GrpcNotFoundException} from "nestjs-grpc-exceptions";

@Controller('car')
@CarServiceControllerMethods()
export class CarController {
  constructor(private readonly carService: CarService) {}

  @UseGuards(AuthGuard)
  async listCars(request: ListCarsRequest): Promise<ListCarsResponse> {
    const cars = await this.carService.listCars();

    return {
        cars: cars
    }
  }

  @UseGuards(AuthGuard)
  async getCar(request: GetCarRequest): Promise<GetCarResponse> {
    const car = await this.carService.getCar(request.carId);

    if (car === null) {
      throw new GrpcNotFoundException('Car Not Found.');
    }

    return {
        car: car
    };

  }

  @UseGuards(AuthGuard)
  async createCar(request: CreateCarRequest): Promise<CreateCarResponse> {
    const car = await this.carService.createCar(request);

    return {
        car: car
    }
  }

  @UseGuards(AuthGuard)
  async updateCar(request: UpdateCarRequest): Promise<UpdateCarResponse> {
    const car = await this.carService.updateCar(request.car);

    if (car === null) {
      throw new GrpcNotFoundException('Car Not Found.');
    }

    return {
        car: car
    }
  }

  @UseGuards(AuthGuard)
  async deleteCar(request: DeleteCarRequest): Promise<DeleteCarResponse> {
    const car = await this.carService.deleteCar(request.carId);

    if (car === null) {
      throw new GrpcNotFoundException('Car Not Found.');
    }

    return {
        car: car
    }
  }
}
