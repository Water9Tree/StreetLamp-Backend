import { PartialType } from '@nestjs/mapped-types';
import { CreateLampDto } from './create-lamp.dto';

export class UpdateLampDto extends PartialType(CreateLampDto) {}
