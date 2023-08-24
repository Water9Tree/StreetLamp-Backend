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
import { ApiParam, ApiQuery } from '@nestjs/swagger';

@Controller('lamps')
export class LampsController {
  constructor(private readonly lampsService: LampsService) {}

  @ApiQuery({
    name: 'status',
    required: false,
  })
  @Get()
  getLamps(@Query('status') status: 'light' | 'dark' | 'normal') {
    return this.lampsService.getLamps(status);
  }

  @ApiParam({
    name: 'lampId',
    type: String,
  })
  @Get(':lampId')
  getLampById(@Param('lampId') lampId: ObjectId) {
    return this.lampsService.getLampById(lampId);
  }

  @Post()
  createLamp(@Body() lampData: CreateLampDto) {
    return this.lampsService.createLamp(lampData);
  }

  @ApiParam({
    name: 'lampId',
    type: String,
  })
  @Patch(':lampId')
  updateLamp(
    @Param('lampId') lampId: ObjectId,
    @Body() updatedLampData: UpdateLampDto,
  ) {
    return this.lampsService.updateLamp(lampId, updatedLampData);
  }

  @ApiParam({
    name: 'lampId',
    type: String,
  })
  @Delete(':lampId')
  deleteLamp(@Param('lampId') lampId: ObjectId) {
    return this.lampsService.deleteLamp(lampId);
  }
}
