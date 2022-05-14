import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResortEntity } from 'src/resort/resort.entity';
import { MainResortController } from './mainResort.controller';
import { MainResortEntity } from './mainResort.entity';
import { MainResortService } from './mainResort.service';

@Module({
  imports: [TypeOrmModule.forFeature([MainResortEntity, ResortEntity])],
  controllers: [MainResortController],
  providers: [MainResortService],
})
export class MainResortModule {}
