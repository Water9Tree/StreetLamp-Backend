import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Lamp } from './entities/lamp.entity';
import { LampsService } from './lamps.service';
import { CreateLampDto } from './dtos/create-lamp.dto';
import { UpdateLampDto } from './dtos/update-lamp.dto';

@Controller('lamps')
export class LampsController {
  constructor(private readonly lampsService: LampsService) {}

  @Get()
  getLamps(@Query('status') status: 'light' | 'dark' | null): Lamp[] {
    return this.lampsService.getLamps(status);
  }

  @Get(':lampId')
  getLampById(@Param('lampId') lampId: number): Lamp {
    return this.lampsService.getLampById(lampId);
  }

  @Post()
  createLamp(@Body() lampData: CreateLampDto) {
    return this.lampsService.createLamp(lampData);
  }

  @Patch(':lampId')
  updateLamp(
    @Param('lampId') lampId: number,
    @Body() updatedLampData: UpdateLampDto,
  ) {
    return this.lampsService.updateLamp(lampId, updatedLampData);
  }

  @Delete(':lampId')
  deleteLamp(@Param('lampId') lampId: number) {
    return this.lampsService.deleteLamp(lampId);
  }
}
