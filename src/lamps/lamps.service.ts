import { Injectable } from '@nestjs/common';
import { Lamp } from './entities/lamp.entity';
import { CreateLampDto } from './dtos/create-lamp.dto';
import { UpdateLampDto } from './dtos/update-lamp.dto';

@Injectable()
export class LampsService {
  private lamps: Lamp[] = [];

  getLamps(status: 'light' | 'dark' | null): Lamp[] {
    if (status) {
      return this.lamps.filter((lamp) => lamp.status === status);
    } else {
      return this.lamps;
    }
  }

  getLampById(id: number): Lamp {
    return this.lamps.find((lamp) => lamp.lampId === id);
  }

  createLamp(lampData: CreateLampDto) {
    const lampId = this.lamps.length + 1;
    const createdLamp: Lamp = { ...lampData, lampId };
    this.lamps.push(createdLamp);
  }

  updateLamp(id: number, updatedLampData: UpdateLampDto) {
    const lamp = this.getLampById(id);
    this.deleteLamp(id);
    this.lamps.push({ ...lamp, ...updatedLampData });
  }

  deleteLamp(id: number) {
    this.getLampById(id);
    this.lamps = this.lamps.filter((lamp) => lamp.lampId !== id);
  }
}
