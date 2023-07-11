import { IsString, IsOptional, ValidateNested } from 'class-validator';

export class CreateLampDto {
  @IsString()
  readonly lampName: string;

  readonly location: {
    x: number;
    y: number;
  };

  @IsOptional()
  readonly adjoiningPlace: string;
}
