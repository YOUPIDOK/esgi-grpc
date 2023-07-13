import { Controller, UseGuards } from '@nestjs/common';
import {
  CreateRaceParticipationRequest,
  CreateRaceParticipationResponse,
  DeleteRaceParticipationRequest,
  DeleteRaceParticipationResponse,
  GetRaceParticipationRequest,
  GetRaceParticipationResponse,
  ListRaceParticipationsRequest,
  ListRaceParticipationsResponse,
  RaceParticipationServiceControllerMethods,
  UpdateRaceParticipationRequest, UpdateRaceParticipationResponse,
} from "../stub/race/race";
import {AuthGuard} from "../guard/auth.guard";
import {GrpcNotFoundException} from "nestjs-grpc-exceptions";
import {RaceParticipationService} from "../service/race.participation.service";

@Controller('race_participation')
@RaceParticipationServiceControllerMethods()
export class RaceParticipationController {
  constructor(private readonly raceParticipationService: RaceParticipationService) {}

  @UseGuards(AuthGuard)
  async listRaceParticipations(request: ListRaceParticipationsRequest): Promise<ListRaceParticipationsResponse> {
    const raceParticipations = await this.raceParticipationService.listRaceParticipations();

    return {
      raceParticipations: raceParticipations
    }
  }

  @UseGuards(AuthGuard)
  async getRaceParticipation(request: GetRaceParticipationRequest): Promise<GetRaceParticipationResponse> {
    const raceParticipation = await this.raceParticipationService.getRaceParticipation(request.raceParticipationId);

    if (raceParticipation === null) {
      throw new GrpcNotFoundException('Race participation Not Found.');
    }

    return {
      raceParticipation: raceParticipation
    };
  }

  @UseGuards(AuthGuard)
  async createRaceParticipation(request: CreateRaceParticipationRequest): Promise<CreateRaceParticipationResponse> {
    const raceParticipation = await this.raceParticipationService.createRaceParticipation(request);

    // TODO : carId, raceId and diverId validation

    return {
      raceParticipation: raceParticipation
    }
  }

  @UseGuards(AuthGuard)
  async updateRaceParticipation(request: UpdateRaceParticipationRequest): Promise<UpdateRaceParticipationResponse> {
    const raceParticipation = await this.raceParticipationService.updateRaceParticipation(request.raceParticipation);

    if (raceParticipation === null) {
      throw new GrpcNotFoundException('Race participation Not Found.');
    }

    // TODO : carId, raceId and diverId validation

    return {
      raceParticipation: raceParticipation
    }
  }

  @UseGuards(AuthGuard)
  async deleteRaceParticipation(request: DeleteRaceParticipationRequest): Promise<DeleteRaceParticipationResponse> {
    const raceParticipation = await this.raceParticipationService.deleteRaceParticipation(request.raceParticipationId);

    if (raceParticipation === null) {
      throw new GrpcNotFoundException('Race participation Not Found.');
    }

    return {
      raceParticipation: raceParticipation
    }
  }
}
