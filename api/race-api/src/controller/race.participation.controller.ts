import { Controller, HttpStatus, Inject, UseGuards } from '@nestjs/common';
import {
  CreateRaceRequest, CreateRaceResponse, DeleteRaceRequest, DeleteRaceResponse,
  GetRaceRequest,
  GetRaceResponse,
  ListRacesRequest,
  ListRacesResponse, RaceParticipationServiceControllerMethods, UpdateRaceRequest, UpdateRaceResponse
} from "../stub/race/race";
import {RaceService} from "../service/race.service";
import {AuthGuard} from "../guard/auth.guard";
import {RaceServiceControllerMethods} from "../stub/race/race";
import {GrpcNotFoundException} from "nestjs-grpc-exceptions";
import {RaceParticipationService} from "../service/race.participation.service";

@Controller('race.participation')
@RaceParticipationServiceControllerMethods()
export class RaceController {
  constructor(private readonly raceParticipationService: RaceParticipationService) {}
}
