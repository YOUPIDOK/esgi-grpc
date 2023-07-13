import {Injectable} from '@nestjs/common';
import {PrismaService} from './prisma.service';
import {Race} from "../stub/race/race";

@Injectable()
export class RaceService {
  constructor(private readonly prisma: PrismaService) {}

  async createRace(data): Promise<Race> {
    return this.prisma.race.create({data});
  }
  async listRaces(): Promise<Race[]> {
    return this.prisma.race.findMany();
  }
  async getRace(raceId: number): Promise<Race> {
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
  async deleteRace(raceId: number) {
    return this.prisma.race.delete({
      where: { raceId: raceId },
    });
  }
}
