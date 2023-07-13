import { Module } from '@nestjs/common';
import { CarController } from './controller/car.controller';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { grpcConfig } from './config/grpc.config';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './service/prisma.service';
import { AuthService } from './service/auth.service';
import {CarService} from "./service/car.service";

@Module({
  imports: [
    GrpcReflectionModule.register(grpcConfig),
    ConfigModule.forRoot(),
  ],
  controllers: [CarController],
  providers: [CarService, PrismaService, AuthService],
})
export class AppModule {}
