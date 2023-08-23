import { Injectable } from '@nestjs/common';
import { LampsRepository } from './lamps.repository';
import { ObjectId } from 'mongoose';
import { UsersRepository } from '../users/users.repository';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class LampsService {
  constructor(
    private readonly lampRepository: LampsRepository,
    private readonly userRepository: UsersRepository,
  ) {}

  getLamps(status: 'light' | 'dark' | null) {
    const lamps = this.lampRepository.getLamps(status);
    return lamps
      .then((res) => {
        if (status) {
          console.log(`get ${status} Lamps`, res);
        } else {
          console.log(`get all Lamps`, res);
        }
        return res;
      })
      .catch((err) => {
        console.log('Error get lamps in service:', err);
      });
  }

  getLampById(lampId: ObjectId) {
    const lamp = this.lampRepository.getLampById(lampId);
    return lamp
      .then((res) => {
        if (!res) {
          console.log('Lamp not found');
          return null;
        }
        console.log(`get ${lampId} Lamp`, res);
        return res;
      })
      .catch((err) => {
        console.log('Error get lamp by ID in service:', err);
      });
  }

  createLamp(lampData: {
    lampName: string;
    location: {
      x: number;
      y: number;
    };
    adjoiningPlace: string;
  }) {
    console.log(
      `create ${lampData?.lampName} Lamp. position x=${lampData?.location?.x} y=${lampData?.location?.y}. adjoining ${lampData?.adjoiningPlace}`,
    );
    this.lampRepository.createLamp(lampData);
  }

  updateLamp(
    lampId: ObjectId,
    updatedLampData: {
      lampName?: string;
      location?: {
        x: number;
        y: number;
      };
      adjoiningPlace?: string;
    },
  ) {
    const updatedLamp = this.lampRepository.updateLamp(lampId, updatedLampData);
    return updatedLamp
      .then((res) => {
        console.log(`update ${lampId} Lamp. to ${res}`);
        return res;
      })
      .catch((err) => {
        console.log('Error updating lamp in service:', err);
      });
  }

  deleteLamp(lampId: ObjectId) {
    const deletedLamp = this.lampRepository.deleteLamp(lampId);
    return deletedLamp
      .then((res) => {
        console.log(`delete ${lampId} Lamp.`);
        return res;
      })
      .catch((err) => {
        console.log('Error deleting lamp in service:', err);
      });
  }

  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron() {
    console.log('Called when the current second is 5');
    this.userRepository.getByRole('ROLE_ADMIN').then((users) => {
      this.getLamps('dark').then((lamps) => {
        console.log(lamps + ' is dark!');
        for (const user of users) {
          fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              to: user.expoToken,
              title: `${lamps} are dark`,
              body: `${lamps}`,
            }),
          })
            .then(() => console.log('send!'))
            .catch((err) => console.log(err));
          console.log(user);
        }
        console.log('send dark lamp! ' + users);
      });
    });
  }
}
