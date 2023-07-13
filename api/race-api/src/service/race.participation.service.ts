import {Injectable} from '@nestjs/common';
import {PrismaService} from './prisma.service';
import {RaceParticipation} from "../stub/race/race";

@Injectable()
export class RaceParticipationService {
  constructor(private readonly prisma: PrismaService) {}

  async createRaceParticipation(data): Promise<RaceParticipation> {
    return this.prisma.race_participation.create({data});
  }

  async listRaceParticipations(): Promise<RaceParticipation[]> {
    return this.prisma.race_participation.findMany();
  }

  async getRaceParticipation(raceParticipationId: number): Promise<RaceParticipation> {
    return this.prisma.race_participation.findUnique({
      where: { raceParticipationId: raceParticipationId },
    });
  }

  async updateRaceParticipation(data: RaceParticipation):  Promise<RaceParticipation> {
    return  this.prisma.race_participation.update({
      where: { raceParticipationId: data.raceParticipationId }, data
    })
  }
  async deleteRaceParticipation(raceParticipationId: number):  Promise<RaceParticipation> {
    return this.prisma.race_participation.delete({
      where: { raceParticipationId: raceParticipationId },
    });
  }
}
