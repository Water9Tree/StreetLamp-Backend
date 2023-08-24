import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Role } from './entities/authorities';

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

  async getByRole(role: Role): Promise<UserDocument[]> {
    try {
      return await this.usersModel.find({ role });
    } catch (err) {
      console.log('Error get users by role:', err.message);
      throw err;
    }
  }
}
