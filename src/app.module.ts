import { Module } from '@nestjs/common';
import { LampsModule } from './lamps/lamps.module';
@Module({
  imports: [LampsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
