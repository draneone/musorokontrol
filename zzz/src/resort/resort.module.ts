import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainResortEntity } from 'src/mainResort/mainResort.entity';
import { ResortController } from './resort.controller';
import { ResortEntity } from './resort.entity';
import { ResortService } from './resort.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResortEntity, MainResortEntity])],
  controllers: [ResortController],
  providers: [ResortService],
})
export class ResortModule {}
