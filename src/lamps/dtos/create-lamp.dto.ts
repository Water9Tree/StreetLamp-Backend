import {
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class Coordinate {
  @IsNumber()
  x: number;
  @IsNumber()
  y: number;
}

export class CreateLampDto {
  @IsString()
  readonly lampName: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Coordinate)
  readonly location: Coordinate;

  @IsOptional()
  readonly adjoiningPlace: string;
}
