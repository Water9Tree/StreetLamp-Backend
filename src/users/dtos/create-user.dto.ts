import { IsEmail, IsEnum, IsString } from 'class-validator';
import { Authorities, Role } from '../entities/authorities';

export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly loginId: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly username: string;

  @IsEnum(Authorities)
  readonly role: Role;
}
