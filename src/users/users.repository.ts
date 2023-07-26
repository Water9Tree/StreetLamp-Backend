import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
  ) {}

  save(user: {
    email: string;
    loginId: string;
    password: string;
    username: string;
  }): Promise<UserDocument> {
    try {
      const result = new this.usersModel(user);
      return result.save();
    } catch (err) {
      console.log('error...');
    }
  }
}
