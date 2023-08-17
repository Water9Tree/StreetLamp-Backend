import { Module } from '@nestjs/common';
import { LampsController } from './lamps.controller';
import { LampsService } from './lamps.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Lamp, LampSchema } from './entities/lamp.entity';
import { LampsRepository } from './lamps.repository';
import { UsersRepository } from '../users/users.repository';
import { User, UserSchema } from '../users/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Lamp.name, schema: LampSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [LampsController],
  providers: [LampsService, LampsRepository, UsersRepository],
})
export class LampsModule {}
