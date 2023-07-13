import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {Clipper} from "../stub/clipper/clipper";

@Injectable()
export class ClipperService {
  constructor(private prisma: PrismaService) {}

  findById(id: number): Promise<Clipper> {
    return this.prisma.clipper.findUnique({
      where: { id }
    });
  }
}