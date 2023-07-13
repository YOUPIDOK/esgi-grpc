import {Controller, UseGuards} from '@nestjs/common';
import { ClipperService } from '../service/clipper.service';
import {Clipper, ClipperById, ClipperServiceControllerMethods} from '../stub/clipper/clipper';
import {GrpcNotFoundException} from 'nestjs-grpc-exceptions';
import {AuthGuard} from '../guard/auth.guard';

@Controller()
@ClipperServiceControllerMethods()
export class ClipperController {
  constructor(private readonly appService: ClipperService) {}
  @UseGuards(AuthGuard)
  async findOne(data: ClipperById): Promise<Clipper> {
    const clipper = await this.appService.findById(data.id)

    if (clipper === null) {
      throw new GrpcNotFoundException('Clipper Not Found.');
    }

    return clipper;
  }
}