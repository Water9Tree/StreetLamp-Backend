import { Module } from '@nestjs/common';
import { GeneratorService } from './generator.service';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { Lamp, LampSchema } from '../lamps/entities/lamp.entity';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MongooseModule.forFeature([{ name: Lamp.name, schema: LampSchema }]),
  ],
  providers: [GeneratorService],
})
export class GeneratorModule {}
