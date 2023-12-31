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
import {GrpcInternalException, GrpcInvalidArgumentException, GrpcNotFoundException} from "nestjs-grpc-exceptions";
import {RaceParticipationService} from "../service/race.participation.service";
import {RaceService} from "../service/race.service";

@Controller('race_participation')
@RaceParticipationServiceControllerMethods()
export class RaceParticipationController {
  constructor(
      private readonly raceParticipationService: RaceParticipationService,
      private readonly raceService: RaceService
  ) {}

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

    // Race validation
    const race = await this.raceService.getRace(request.raceId);
    if (race === null) {
      throw new GrpcInvalidArgumentException('The argument "raceId" is not valid.')
    }

    // Car validation
    // Call API

    // Driver validation
    // Call API

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

    const race = await this.raceService.getRace(request.raceParticipation.raceId);
    if (race === null) {
      throw new GrpcInvalidArgumentException('The argument "raceId" is not valid.')
    }

    // Car validation
    // Call API

    // Driver validation
    // Call API

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
