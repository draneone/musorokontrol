import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypetochkaController } from './typetochka.controller';
import { TypetochkaEntity } from './typetochka.entity';
import { TypetochkaService } from './typetochka.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypetochkaEntity])],
  controllers: [TypetochkaController],
  providers: [TypetochkaService],
})
export class TypetochkaModule { }
