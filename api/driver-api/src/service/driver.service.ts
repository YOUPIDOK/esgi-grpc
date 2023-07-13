import {Injectable} from '@nestjs/common';
import {PrismaService} from './prisma.service';
import {Driver} from "../stub/driver/driver";

@Injectable()
export class DriverService {
  constructor(private readonly prisma: PrismaService) {}

  async createDriver(data): Promise<Driver> {
    return this.prisma.driver.create({data});
  }
  listDrivers(): Promise<Driver[]> {
    return this.prisma.driver.findMany();
  }
  getDriver(driverId: number): Promise<Driver> {
    return this.prisma.driver.findUnique({
      where: { driverId: driverId },
    });
  }
  async updateDriver(data: Driver) {
    return this.prisma.driver.update({
      where: { driverId: data.driverId },
      data,
    });
  }
  deleteDriver(driverId: number) {
    return this.prisma.driver.delete({
      where: { driverId: driverId },
    });
  }
}
