import { Module } from '@nestjs/common';
import { LampsController } from './lamps.controller';
import { LampsService } from './lamps.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Lamp, LampSchema } from './entities/lamp.entity';
import { LampsRepository } from './lamps.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Lamp.name, schema: LampSchema }]),
  ],
  controllers: [LampsController],
  providers: [LampsService, LampsRepository],
})
export class LampsModule {}
