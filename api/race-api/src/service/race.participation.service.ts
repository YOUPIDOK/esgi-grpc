import {Injectable} from '@nestjs/common';
import {PrismaService} from './prisma.service';

@Injectable()
export class RaceParticipationService {
  constructor(private readonly prisma: PrismaService) {}
}
