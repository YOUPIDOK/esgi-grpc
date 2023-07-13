/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "car";

/** ****************************************************** MESSAGES **************************************************** */
export interface Car {
  carId?: number | undefined;
  model?: string | undefined;
  brand?: string | undefined;
}

/** ******************************************** REQUESTS / RESONSES *************************************************** */
export interface ListCarsRequest {
}

export interface ListCarsResponse {
  cars?: Car[] | undefined;
}

export interface GetCarRequest {
  carId?: number | undefined;
}

export interface GetCarResponse {
  car?: Car | undefined;
}

export interface CreateCarRequest {
  model?: string | undefined;
  brand?: string | undefined;
}

export interface CreateCarResponse {
  car?: Car | undefined;
}

export interface UpdateCarRequest {
  car?: Car | undefined;
}

export interface UpdateCarResponse {
  car?: Car | undefined;
}

export interface DeleteCarRequest {
  carId?: number | undefined;
}

export interface DeleteCarResponse {
  car?: Car | undefined;
}

export const CAR_PACKAGE_NAME = "car";

/** **************************************************** SERVICES ****************************************************** */

export interface CarServiceClient {
  listCars(request: ListCarsRequest, metadata?: Metadata): Observable<ListCarsResponse>;

  getCar(request: GetCarRequest, metadata?: Metadata): Observable<GetCarResponse>;

  createCar(request: CreateCarRequest, metadata?: Metadata): Observable<CreateCarResponse>;

  updateCar(request: UpdateCarRequest, metadata?: Metadata): Observable<UpdateCarResponse>;

  deleteCar(request: DeleteCarRequest, metadata?: Metadata): Observable<DeleteCarResponse>;
}

/** **************************************************** SERVICES ****************************************************** */

export interface CarServiceController {
  listCars(
    request: ListCarsRequest,
    metadata?: Metadata,
  ): Promise<ListCarsResponse> | Observable<ListCarsResponse> | ListCarsResponse;

  getCar(
    request: GetCarRequest,
    metadata?: Metadata,
  ): Promise<GetCarResponse> | Observable<GetCarResponse> | GetCarResponse;

  createCar(
    request: CreateCarRequest,
    metadata?: Metadata,
  ): Promise<CreateCarResponse> | Observable<CreateCarResponse> | CreateCarResponse;

  updateCar(
    request: UpdateCarRequest,
    metadata?: Metadata,
  ): Promise<UpdateCarResponse> | Observable<UpdateCarResponse> | UpdateCarResponse;

  deleteCar(
    request: DeleteCarRequest,
    metadata?: Metadata,
  ): Promise<DeleteCarResponse> | Observable<DeleteCarResponse> | DeleteCarResponse;
}

export function CarServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["listCars", "getCar", "createCar", "updateCar", "deleteCar"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("CarService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("CarService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CAR_SERVICE_NAME = "CarService";
