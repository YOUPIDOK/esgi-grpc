import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {Collection} from "../entity/Collection";

@Injectable()
export class CollectionService {
  constructor(private prisma: PrismaService) {}

  findById(id: number): Promise<Collection> {
    return this.prisma.collection.findUnique({
      where: { id }
    });
  }
}