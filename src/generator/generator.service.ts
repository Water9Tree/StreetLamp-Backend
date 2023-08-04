import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Lamp, LampDocument } from '../lamps/entities/lamp.entity';
import { Model } from 'mongoose';

@Injectable()
export class GeneratorService {
  private readonly logger = new Logger(GeneratorService.name);
  private readonly possibleStatus = ['light', 'dark'];

  constructor(@InjectModel(Lamp.name) private lampModel: Model<LampDocument>) {}

  @Cron(CronExpression.EVERY_SECOND)
  handleCron() {
    this.logger.debug('Called when every second!');
    this.lampModel.find({}).then(async (lamps) => {
      if (lamps.length == 0) return;

      const randomLampNumber = Math.floor(Math.random() * lamps.length);
      if (lamps[randomLampNumber]?.status == null) return;
      const currentStatus = lamps[randomLampNumber]?.status;
      console.log(lamps);
      await this.lampModel.findOneAndUpdate(
        {
          _id: lamps[randomLampNumber]._id,
        },
        {
          $set: {
            status: this.changeStatusRandomly(currentStatus),
          },
        },
      );
    });
  }

  changeStatusRandomly(status: string): string {
    try {
      if (Math.floor(Math.random() * 2) == 1) {
        const changedStatus = this.possibleStatus.filter((s) => s != status)[0];
        // this.logger.log(`status changed! ${status} => ${changedStatus}`);
        // 10% 확률로 가로등 현재 상태 변경
        return changedStatus;
      }
      return status;
    } catch (ignore) {
      return status;
    }
  }
}
