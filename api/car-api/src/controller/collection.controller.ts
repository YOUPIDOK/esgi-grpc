import {Controller, UseGuards} from '@nestjs/common';
import {
  Collection,
  CollectionById,
  CollectionServiceControllerMethods
} from '../stub/clipper/clipper';
import {GrpcNotFoundException} from 'nestjs-grpc-exceptions';
import {AuthGuard} from '../guard/auth.guard';
import {CollectionService} from "../service/collection.service";
// import {Collection} from "../entity/Collection";

@Controller()
@CollectionServiceControllerMethods()
export class CollectionController {
  constructor(private readonly appService: CollectionService) {}
  @UseGuards(AuthGuard)
  async findOne(data: CollectionById): Promise<Collection> {
    const collection = await this.appService.findById(data.id)

    if (collection === null) {
      throw new GrpcNotFoundException('Collection Not Found.');
    }

    return collection ;
  }
}
