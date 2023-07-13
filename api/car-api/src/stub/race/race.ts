/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "race";

/** ****************************************************** MESSAGES **************************************************** */
export interface Race {
  raceId?: number | undefined;
  name?: string | undefined;
}

/** ******************************************** REQUESTS / RESONSES *************************************************** */
export interface ListRacesRequest {
}

export interface ListRacesResponse {
  races?: Race[] | undefined;
}

export interface GetRaceRequest {
  raceId?: number | undefined;
}

export interface GetRaceResponse {
  race?: Race | undefined;
}

export interface CreateRaceRequest {
  name?: string | undefined;
}

export interface CreateRaceResponse {
  race?: Race | undefined;
}

export interface UpdateRaceRequest {
  race?: Race | undefined;
}

export interface UpdateRaceResponse {
  race?: Race | undefined;
}

export interface DeleteRaceRequest {
  raceId?: number | undefined;
}

export interface DeleteRaceResponse {
  race?: Race | undefined;
}

export const RACE_PACKAGE_NAME = "race";

/** **************************************************** SERVICES ****************************************************** */

export interface RaceServiceClient {
  listRaces(request: ListRacesRequest, metadata?: Metadata): Observable<ListRacesResponse>;

  getRace(request: GetRaceRequest, metadata?: Metadata): Observable<GetRaceResponse>;

  createRace(request: CreateRaceRequest, metadata?: Metadata): Observable<CreateRaceResponse>;

  updateRace(request: UpdateRaceRequest, metadata?: Metadata): Observable<UpdateRaceResponse>;

  deleteRace(request: DeleteRaceRequest, metadata?: Metadata): Observable<DeleteRaceResponse>;
}

/** **************************************************** SERVICES ****************************************************** */

export interface RaceServiceController {
  listRaces(
    request: ListRacesRequest,
    metadata?: Metadata,
  ): Promise<ListRacesResponse> | Observable<ListRacesResponse> | ListRacesResponse;

  getRace(
    request: GetRaceRequest,
    metadata?: Metadata,
  ): Promise<GetRaceResponse> | Observable<GetRaceResponse> | GetRaceResponse;

  createRace(
    request: CreateRaceRequest,
    metadata?: Metadata,
  ): Promise<CreateRaceResponse> | Observable<CreateRaceResponse> | CreateRaceResponse;

  updateRace(
    request: UpdateRaceRequest,
    metadata?: Metadata,
  ): Promise<UpdateRaceResponse> | Observable<UpdateRaceResponse> | UpdateRaceResponse;

  deleteRace(
    request: DeleteRaceRequest,
    metadata?: Metadata,
  ): Promise<DeleteRaceResponse> | Observable<DeleteRaceResponse> | DeleteRaceResponse;
}

export function RaceServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["listRaces", "getRace", "createRace", "updateRace", "deleteRace"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("RaceService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("RaceService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const RACE_SERVICE_NAME = "RaceService";
