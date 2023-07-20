import { Injectable } from '@nestjs/common';
import { LampsRepository } from './lamps.repository';
import { ObjectId } from 'mongoose';

@Injectable()
export class LampsService {
  constructor(private readonly lampRepository: LampsRepository) {}

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

  getLampById(id: number) {
    console.log(`get ${id} Lamp`);
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
}
