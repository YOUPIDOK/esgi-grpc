import {Injectable} from '@nestjs/common';
import {PrismaService} from './prisma.service';
import {Driver} from "../stub/driver/driver";

@Injectable()
export class DriverService {
  constructor(private readonly prisma: PrismaService) {}

  async createDriver(data): Promise<Driver> {
    return this.prisma.driver.create({data});
  }
  async listDrivers(): Promise<Driver[]> {
    return this.prisma.driver.findMany();
  }
  async  getDriver(driverId: number): Promise<Driver> {
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
  async deleteDriver(driverId: number) {
    return this.prisma.driver.delete({
      where: { driverId: driverId },
    });
  }
}
