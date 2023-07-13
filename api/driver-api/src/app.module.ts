import { Module } from '@nestjs/common';
import { DriverController } from './controller/driver.controller';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { grpcConfig } from './config/grpc.config';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './service/prisma.service';
import { AuthService } from './service/auth.service';
import {DriverService} from "./service/driver.service";

@Module({
  imports: [
    GrpcReflectionModule.register(grpcConfig),
    ConfigModule.forRoot(),
  ],
  controllers: [DriverController],
  providers: [DriverService, PrismaService, AuthService],
})
export class AppModule {}
