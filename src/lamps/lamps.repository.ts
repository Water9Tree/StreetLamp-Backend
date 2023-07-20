import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Lamp, LampDocument } from './entities/lamp.entity';

@Injectable()
export class LampsRepository {
  constructor(@InjectModel(Lamp.name) private lampModel: Model<LampDocument>) {}

  async getLamps(status: 'light' | 'dark' | null): Promise<LampDocument[]> {
    try {
      if (!status) {
        const allLamps = await this.lampModel.find();
        return allLamps;
      }
      const lampsWithStatus = await this.lampModel.find({ status });
      return lampsWithStatus;
    } catch (err) {
      console.log('Error retrieving lamps:', err.message);
      throw err;
    }
  }

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

  async updateLamp(lampId: ObjectId, updatedData: Partial<Lamp>) {
    try {
      const updatedLamp = await this.lampModel.findByIdAndUpdate(
        lampId,
        { $set: updatedData },
        { new: true },
      );
      if (!updatedLamp) {
        throw new NotFoundException(`Lamp #${lampId} not found`);
      }
      return updatedLamp;
    } catch (err) {
      console.log('Error updating lamp:', err.message);
      throw err;
    }
  }

  async deleteLamp(lampId: ObjectId) {
    try {
      const deletedLamp = await this.lampModel.findByIdAndDelete(lampId);
      if (!deletedLamp) {
        throw new NotFoundException(`Lamp #${lampId} not found`);
      }
      return deletedLamp;
    } catch (err) {
      console.log('Error deleting lamp:', err.message);
      throw err;
    }
  }
}
