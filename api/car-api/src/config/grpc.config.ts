import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';
import {CAR_PACKAGE_NAME} from '../stub/car/car';
import * as process from 'process';
import {ServerCredentials} from "@grpc/grpc-js";
import { readFileSync } from 'fs';

export const grpcConfig = addReflectionToGrpcConfig({
  transport: Transport.GRPC,
  options: {
    url: process.env.API_URL,
    package: CAR_PACKAGE_NAME,
    protoPath: join(__dirname, '../proto/car/car.proto'),
    credentials:  ServerCredentials.createSsl(null, [
      {
        private_key: readFileSync(join(__dirname, '../../', process.env.AUTH_KEY)),
        cert_chain: readFileSync(join(__dirname, '../../', process.env.AUTH_CERT))
      },
    ]),
  },
}) as GrpcOptions;
