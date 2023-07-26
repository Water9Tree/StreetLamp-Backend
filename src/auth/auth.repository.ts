import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../users/entities/user.entity';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
  ) {}

  async findByLoginIdAndPassword(user: {
    loginId: string;
    password: string;
  }): Promise<UserDocument[]> {
    try {
      const { loginId, password } = user;
      return await this.usersModel.find({
        loginId,
        password,
      });
    } catch (err) {
      console.log('error...');
    }
  }
}
