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
import { LampsService } from './lamps.service';
import { CreateLampDto } from './dtos/create-lamp.dto';
import { UpdateLampDto } from './dtos/update-lamp.dto';
import { ObjectId } from 'mongoose';

@Controller('lamps')
export class LampsController {
  constructor(private readonly lampsService: LampsService) {}

  @Get()
  getLamps(@Query('status') status: 'light' | 'dark' | null) {
    return this.lampsService.getLamps(status);
  }

  @Get(':lampId')
  getLampById(@Param('lampId') lampId: ObjectId) {
    return this.lampsService.getLampById(lampId);
  }

  @Post()
  createLamp(@Body() lampData: CreateLampDto) {
    return this.lampsService.createLamp(lampData);
  }

  @Patch(':lampId')
  updateLamp(
    @Param('lampId') lampId: ObjectId,
    @Body() updatedLampData: UpdateLampDto,
  ) {
    return this.lampsService.updateLamp(lampId, updatedLampData);
  }

  @Delete(':lampId')
  deleteLamp(@Param('lampId') lampId: ObjectId) {
    return this.lampsService.deleteLamp(lampId);
  }
}
