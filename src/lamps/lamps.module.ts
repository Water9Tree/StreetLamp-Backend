import { Module } from '@nestjs/common';
import { LampsController } from './lamps.controller';
import { LampsService } from './lamps.service';

@Module({
  controllers: [LampsController],
  providers: [LampsService],
})
export class LampsModule {}
