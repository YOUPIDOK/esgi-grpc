import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';
import {CLIPPER_PACKAGE_NAME} from '../stub/clipper/clipper';
import * as process from 'process';
import {ServerCredentials} from "@grpc/grpc-js";
import { readFileSync } from 'fs';

export const grpcConfig = addReflectionToGrpcConfig({
  transport: Transport.GRPC,
  options: {
    url: process.env.API_URL,
    package: CLIPPER_PACKAGE_NAME,
    protoPath: join(__dirname, '../proto/clipper/clipper.proto'),
    credentials:  ServerCredentials.createSsl(null, [
      {
        private_key: readFileSync(join(__dirname, '../../', process.env.AUTH_KEY)),
        cert_chain: readFileSync(join(__dirname, '../../', process.env.AUTH_CERT))
      },
    ]),
  },
}) as GrpcOptions;
