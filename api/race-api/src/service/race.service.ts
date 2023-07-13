import {Injectable} from '@nestjs/common';
import {PrismaService} from './prisma.service';
import {Race} from "../stub/race/race";

@Injectable()
export class RaceService {
  constructor(private readonly prisma: PrismaService) {}

  async createRace(data): Promise<Race> {
    return this.prisma.race.create({data});
  }
  listRaces(): Promise<Race[]> {
    return this.prisma.race.findMany();
  }
  getRace(raceId: number): Promise<Race> {
    return this.prisma.race.findUnique({
      where: { raceId: raceId },
    });
  }
  async updateRace(data: Race) {
    return this.prisma.race.update({
      where: { raceId: data.raceId },
      data,
    });
  }
  deleteRace(raceId: number) {
    return this.prisma.race.delete({
      where: { raceId: raceId },
    });
  }
}
