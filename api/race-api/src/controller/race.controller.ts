import { Controller, HttpStatus, Inject, UseGuards } from '@nestjs/common';
import {
  CreateRaceRequest, CreateRaceResponse, DeleteRaceRequest, DeleteRaceResponse,
  GetRaceRequest,
  GetRaceResponse,
  ListRacesRequest,
  ListRacesResponse, UpdateRaceRequest, UpdateRaceResponse
} from "../stub/race/race";
import {RaceService} from "../service/race.service";
import {AuthGuard} from "../guard/auth.guard";
import {RaceServiceControllerMethods} from "../stub/race/race";
import {GrpcNotFoundException} from "nestjs-grpc-exceptions";

@Controller('race')
@RaceServiceControllerMethods()
export class RaceController {
  constructor(private readonly raceService: RaceService) {}

  async listRaces(request: ListRacesRequest): Promise<ListRacesResponse> {
    const races = await this.raceService.listRaces();

    return {
        races: races
    }
  }

  @UseGuards(AuthGuard)
  async getRace(request: GetRaceRequest): Promise<GetRaceResponse> {
    const race = await this.raceService.getRace(request.raceId);

    if (race === null) {
      throw new GrpcNotFoundException('Race Not Found.');
    }

    return {
        race: race
    };
  }

  @UseGuards(AuthGuard)
  async createRace(request: CreateRaceRequest): Promise<CreateRaceResponse> {
    const race = await this.raceService.createRace(request);

    return {
        race: race
    }
  }

  @UseGuards(AuthGuard)
  async updateRace(request: UpdateRaceRequest): Promise<UpdateRaceResponse> {
    const race = await this.raceService.updateRace(request.race);

    if (race === null) {
      throw new GrpcNotFoundException('Race Not Found.');
    }

    return {
        race: race
    }
  }

  @UseGuards(AuthGuard)
  async deleteRace(request: DeleteRaceRequest): Promise<DeleteRaceResponse> {
    const race = await this.raceService.deleteRace(request.raceId);

    if (race === null) {
      throw new GrpcNotFoundException('Race Not Found.');
    }

    return {
        race: race
    }
  }
}
