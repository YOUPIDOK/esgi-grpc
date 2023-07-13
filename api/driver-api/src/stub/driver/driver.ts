/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "driver";

/** ****************************************************** MESSAGES **************************************************** */
export interface Driver {
  driverId?: number | undefined;
  email?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
}

/** ******************************************** REQUESTS / RESONSES *************************************************** */
export interface ListDriversRequest {
}

export interface ListDriversResponse {
  drivers?: Driver[] | undefined;
}

export interface GetDriverRequest {
  driverId?: number | undefined;
}

export interface GetDriverResponse {
  driver?: Driver | undefined;
}

export interface CreateDriverRequest {
  email?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
}

export interface CreateDriverResponse {
  driver?: Driver | undefined;
}

export interface UpdateDriverRequest {
  driver?: Driver | undefined;
}

export interface UpdateDriverResponse {
  driver?: Driver | undefined;
}

export interface DeleteDriverRequest {
  driverId?: number | undefined;
}

export interface DeleteDriverResponse {
  driver?: Driver | undefined;
}

export const DRIVER_PACKAGE_NAME = "driver";

/** **************************************************** SERVICES ****************************************************** */

export interface DriverServiceClient {
  listDrivers(request: ListDriversRequest, metadata?: Metadata): Observable<ListDriversResponse>;

  getDriver(request: GetDriverRequest, metadata?: Metadata): Observable<GetDriverResponse>;

  createDriver(request: CreateDriverRequest, metadata?: Metadata): Observable<CreateDriverResponse>;

  updateDriver(request: UpdateDriverRequest, metadata?: Metadata): Observable<UpdateDriverResponse>;

  deleteDriver(request: DeleteDriverRequest, metadata?: Metadata): Observable<DeleteDriverResponse>;
}

/** **************************************************** SERVICES ****************************************************** */

export interface DriverServiceController {
  listDrivers(
    request: ListDriversRequest,
    metadata?: Metadata,
  ): Promise<ListDriversResponse> | Observable<ListDriversResponse> | ListDriversResponse;

  getDriver(
    request: GetDriverRequest,
    metadata?: Metadata,
  ): Promise<GetDriverResponse> | Observable<GetDriverResponse> | GetDriverResponse;

  createDriver(
    request: CreateDriverRequest,
    metadata?: Metadata,
  ): Promise<CreateDriverResponse> | Observable<CreateDriverResponse> | CreateDriverResponse;

  updateDriver(
    request: UpdateDriverRequest,
    metadata?: Metadata,
  ): Promise<UpdateDriverResponse> | Observable<UpdateDriverResponse> | UpdateDriverResponse;

  deleteDriver(
    request: DeleteDriverRequest,
    metadata?: Metadata,
  ): Promise<DeleteDriverResponse> | Observable<DeleteDriverResponse> | DeleteDriverResponse;
}

export function DriverServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["listDrivers", "getDriver", "createDriver", "updateDriver", "deleteDriver"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("DriverService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("DriverService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const DRIVER_SERVICE_NAME = "DriverService";
