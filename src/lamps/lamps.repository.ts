import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lamp, LampDocument } from './entities/lamp.entity';

@Injectable()
export class LampsRepository {
  constructor(@InjectModel(Lamp.name) private lampModel: Model<LampDocument>) {}

  createLamp(lampData: {
    lampName: string;
    location: {
      x: number;
      y: number;
    };
    adjoiningPlace: string;
  }): Promise<LampDocument> {
    try {
      const result = new this.lampModel(lampData);
      return result.save();
    } catch (err) {
      console.log('error...');
    }
  }
}
