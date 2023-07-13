import { Module } from '@nestjs/common';
import { RaceController } from './controller/race.controller';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { grpcConfig } from './config/grpc.config';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './service/prisma.service';
import { AuthService } from './service/auth.service';
import {RaceService} from "./service/race.service";

@Module({
  imports: [
    GrpcReflectionModule.register(grpcConfig),
    ConfigModule.forRoot(),
  ],
  controllers: [RaceController],
  providers: [RaceService, PrismaService, AuthService],
})
export class AppModule {}
