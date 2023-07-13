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

export interface RaceParticipation {
  raceId?: number | undefined;
  driverId?: number | undefined;
  carId?: number | undefined;
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

export interface ListRaceParticipationsRequest {
}

export interface ListRaceParticipationsResponse {
  raceParticipations?: RaceParticipation[] | undefined;
}

export interface GetRaceParticipationRequest {
  raceId?: number | undefined;
  driverId?: number | undefined;
}

export interface GetRaceParticipationResponse {
  raceParticipation?: RaceParticipation | undefined;
}

export interface CreateRaceParticipationRequest {
  raceId?: number | undefined;
  driverId?: number | undefined;
  carId?: number | undefined;
}

export interface CreateRaceParticipationResponse {
  raceParticipation?: RaceParticipation | undefined;
}

export interface UpdateCarOfDriverRequest {
  raceId?: number | undefined;
  driverId?: number | undefined;
  carId?: number | undefined;
}

export interface UpdateCarOfDriverResponse {
  raceParticipation?: RaceParticipation | undefined;
}

export interface DeleteRaceParticipationRequest {
  raceId?: number | undefined;
  driverId?: number | undefined;
}

export interface DeleteRaceParticipationResponse {
  raceParticipation?: RaceParticipation | undefined;
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

export interface RaceParticipationServiceClient {
  listRaceParticipations(
    request: ListRaceParticipationsRequest,
    metadata?: Metadata,
  ): Observable<ListRaceParticipationsResponse>;

  getRaceParticipation(
    request: GetRaceParticipationRequest,
    metadata?: Metadata,
  ): Observable<GetRaceParticipationResponse>;

  createRaceParticipation(
    request: CreateRaceParticipationRequest,
    metadata?: Metadata,
  ): Observable<CreateRaceParticipationResponse>;

  updateCarOfDriver(request: UpdateCarOfDriverRequest, metadata?: Metadata): Observable<UpdateCarOfDriverResponse>;

  deleteRaceParticipation(
    request: DeleteRaceParticipationRequest,
    metadata?: Metadata,
  ): Observable<DeleteRaceParticipationResponse>;
}

export interface RaceParticipationServiceController {
  listRaceParticipations(
    request: ListRaceParticipationsRequest,
    metadata?: Metadata,
  ):
    | Promise<ListRaceParticipationsResponse>
    | Observable<ListRaceParticipationsResponse>
    | ListRaceParticipationsResponse;

  getRaceParticipation(
    request: GetRaceParticipationRequest,
    metadata?: Metadata,
  ): Promise<GetRaceParticipationResponse> | Observable<GetRaceParticipationResponse> | GetRaceParticipationResponse;

  createRaceParticipation(
    request: CreateRaceParticipationRequest,
    metadata?: Metadata,
  ):
    | Promise<CreateRaceParticipationResponse>
    | Observable<CreateRaceParticipationResponse>
    | CreateRaceParticipationResponse;

  updateCarOfDriver(
    request: UpdateCarOfDriverRequest,
    metadata?: Metadata,
  ): Promise<UpdateCarOfDriverResponse> | Observable<UpdateCarOfDriverResponse> | UpdateCarOfDriverResponse;

  deleteRaceParticipation(
    request: DeleteRaceParticipationRequest,
    metadata?: Metadata,
  ):
    | Promise<DeleteRaceParticipationResponse>
    | Observable<DeleteRaceParticipationResponse>
    | DeleteRaceParticipationResponse;
}

export function RaceParticipationServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "listRaceParticipations",
      "getRaceParticipation",
      "createRaceParticipation",
      "updateCarOfDriver",
      "deleteRaceParticipation",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("RaceParticipationService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("RaceParticipationService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const RACE_PARTICIPATION_SERVICE_NAME = "RaceParticipationService";
