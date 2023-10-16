import { Body, Controller, Post, Put, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { RolesGuard } from 'src/auth/passport/role.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body() userData: CreateUserDto): Promise<User> {
    return await this.userService.create(userData);
  }

  @Put('/notification')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async setNotificationEnable(@Body() req) {
    console.log(req);
    return await this.userService.setNotificationEnable(req.body);
  }
}
