import { Module } from '@nestjs/common';
import { ClipperController } from './controller/clipper.controller';
import { ClipperService } from './service/clipper.service';
import {GrpcReflectionModule} from 'nestjs-grpc-reflection';
import {grpcConfig} from './config/grpc.config';
import {ConfigModule} from '@nestjs/config';
import {PrismaService} from './service/prisma.service';
import {AuthService} from './service/auth.service';
import {CollectionService} from "./service/collection.service";
import {CollectionController} from "./controller/collection.controller";

@Module({
  imports: [
    GrpcReflectionModule.register(grpcConfig),
    ConfigModule.forRoot(),
  ],
  controllers: [ClipperController, CollectionController],
  providers: [ClipperService, CollectionService, PrismaService, AuthService],
})
export class AppModule {}
