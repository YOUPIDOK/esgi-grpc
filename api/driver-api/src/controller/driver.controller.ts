import { Controller, HttpStatus, Inject, UseGuards } from '@nestjs/common';
import {
  CreateDriverRequest, CreateDriverResponse, DeleteDriverRequest, DeleteDriverResponse,
  GetDriverRequest,
  GetDriverResponse,
  ListDriversRequest,
  ListDriversResponse, UpdateDriverRequest, UpdateDriverResponse
} from "../stub/driver/driver";
import {DriverService} from "../service/driver.service";
import {AuthGuard} from "../guard/auth.guard";
import {DriverServiceControllerMethods} from "../stub/driver/driver";
import {GrpcNotFoundException} from "nestjs-grpc-exceptions";

@Controller('driver')
@DriverServiceControllerMethods()
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  async listDrivers(request: ListDriversRequest): Promise<ListDriversResponse> {
    const drivers = await this.driverService.listDrivers();

    return {
        drivers: drivers
    }
  }

  @UseGuards(AuthGuard)
  async getDriver(request: GetDriverRequest): Promise<GetDriverResponse> {
    const driver = await this.driverService.getDriver(request.driverId);

    if (driver === null) {
      throw new GrpcNotFoundException('Driver Not Found.');
    }

    return {
        driver: driver
    };
  }

  @UseGuards(AuthGuard)
  async createDriver(request: CreateDriverRequest): Promise<CreateDriverResponse> {
    const driver = await this.driverService.createDriver(request);

    return {
        driver: driver
    }
  }

  @UseGuards(AuthGuard)
  async updateDriver(request: UpdateDriverRequest): Promise<UpdateDriverResponse> {
    const driver = await this.driverService.updateDriver(request.driver);

    if (driver === null) {
      throw new GrpcNotFoundException('Driver Not Found.');
    }

    return {
        driver: driver
    }
  }

  @UseGuards(AuthGuard)
  async deleteDriver(request: DeleteDriverRequest): Promise<DeleteDriverResponse> {
    const driver = await this.driverService.deleteDriver(request.driverId);

    if (driver === null) {
      throw new GrpcNotFoundException('Driver Not Found.');
    }

    return {
        driver: driver
    }
  }
}
