/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Clipper";

export interface ClipperById {
  id?: number;
}

export interface CollectionById {
  id?: number;
}

export interface Clipper {
  id?: number;
  collectionId?: number;
  number?: number;
  nbExemplary?: number;
  imageFilename?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
  collection?: Collection;
}

export interface Collection {
  id?: number;
  userId?: number;
  name?: string;
  nbClipper?: number;
  clipperType?: string;
  isOfficial?: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
  clippers?: Clipper[];
}

export const CLIPPER_PACKAGE_NAME = "Clipper";

export interface ClipperServiceClient {
  findOne(request: ClipperById, metadata?: Metadata): Observable<Clipper>;
}

export interface ClipperServiceController {
  findOne(request: ClipperById, metadata?: Metadata): Promise<Clipper> | Observable<Clipper> | Clipper;
}

export function ClipperServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findOne"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ClipperService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ClipperService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CLIPPER_SERVICE_NAME = "ClipperService";

export interface CollectionServiceClient {
  findOne(request: CollectionById, metadata?: Metadata): Observable<Collection>;
}

export interface CollectionServiceController {
  findOne(request: CollectionById, metadata?: Metadata): Promise<Collection> | Observable<Collection> | Collection;
}

export function CollectionServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findOne"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("CollectionService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("CollectionService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const COLLECTION_SERVICE_NAME = "CollectionService";
