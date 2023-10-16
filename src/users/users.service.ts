import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(userData: CreateUserDto): Promise<User> {
    const { email, loginId, username, password, role } = userData;

    const user = new User();
    user.email = email;
    user.loginId = loginId;
    user.password = password;
    user.username = username;
    user.role = role;
    user.expoToken = '';
    user.isNotificationEnabled = false;

    await this.usersRepository.save(user);
    user.password = undefined;
    return user;
  }

  async setNotificationEnable(isNotificationEnabled: boolean) {
    await this.usersRepository.setNotificationEnable(isNotificationEnabled);
  }
}
