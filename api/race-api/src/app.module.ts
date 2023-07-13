import { Module } from '@nestjs/common';
import { RaceController } from './controller/race.controller';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { grpcConfig } from './config/grpc.config';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './service/prisma.service';
import { AuthService } from './service/auth.service';
import {RaceService} from "./service/race.service";
import {RaceParticipationController} from "./controller/race.participation.controller";
import {RaceParticipationService} from "./service/race.participation.service";

@Module({
  imports: [
    GrpcReflectionModule.register(grpcConfig),
    ConfigModule.forRoot(),
  ],
  controllers: [RaceController, RaceParticipationController],
  providers: [RaceService, RaceParticipationService, PrismaService, AuthService],
})
export class AppModule {}
