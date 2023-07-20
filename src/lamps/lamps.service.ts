import { Injectable } from '@nestjs/common';
import { LampsRepository } from './lamps.repository';

@Injectable()
export class LampsService {
  constructor(private readonly lampRepository: LampsRepository) {}

  getLamps(status: 'light' | 'dark' | null) {
    if (status) {
      console.log(`get ${status} Lamps`);
    } else {
      console.log(`get all Lamps`);
    }
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
    id: number,
    updatedLampData: {
      lampName?: string;
      location?: {
        x: number;
        y: number;
      };
      adjoiningPlace?: string;
    },
  ) {
    console.log(
      `update ${id} Lamp. to ${
        updatedLampData?.lampName ? `name ${updatedLampData?.lampName},` : ''
      } ${
        updatedLampData?.location
          ? `position x=${updatedLampData?.location.x} y=${updatedLampData?.location.y},`
          : ''
      }  ${
        updatedLampData?.adjoiningPlace
          ? `adjoining ${updatedLampData?.adjoiningPlace}`
          : ''
      }`,
    );
  }

  deleteLamp(id: number) {
    console.log(`delete ${id} Lamp.`);
  }
}
