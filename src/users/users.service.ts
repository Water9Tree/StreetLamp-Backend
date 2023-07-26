import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(userData: CreateUserDto): Promise<User> {
    const { email, loginId, username, password } = userData;

    const user = new User();
    user.email = email;
    user.loginId = loginId;
    user.password = password;
    user.username = username;

    await this.usersRepository.save(user);
    user.password = undefined;
    return user;
  }
}
