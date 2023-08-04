import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { LampsService } from './lamps.service';
import { CreateLampDto } from './dtos/create-lamp.dto';
import { UpdateLampDto } from './dtos/update-lamp.dto';
import { ObjectId } from 'mongoose';
import { ApiParam, ApiQuery } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/passport/role.guard';
import { Roles } from 'src/users/entities/authorities';

@Controller('lamps')
export class LampsController {
  constructor(private readonly lampsService: LampsService) {}

  @ApiQuery({
    name: 'status',
    required: false,
  })
  @Get()
  getLamps(@Query('status') status: 'light' | 'dark' | null) {
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
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(['ROLE_ADMIN'])
  createLamp(@Body() lampData: CreateLampDto) {
    return this.lampsService.createLamp(lampData);
  }

  @ApiParam({
    name: 'lampId',
    type: String,
  })
  @Patch(':lampId')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(['ROLE_ADMIN'])
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
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(['ROLE_ADMIN'])
  deleteLamp(@Param('lampId') lampId: ObjectId) {
    return this.lampsService.deleteLamp(lampId);
  }
}
