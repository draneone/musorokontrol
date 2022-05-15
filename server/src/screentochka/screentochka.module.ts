import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScreentochkaController } from './screentochka.controller';
import { ScreentochkaService } from './screentochka.service';
import { ScreentochkaEntity } from './screntochka.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScreentochkaEntity])],
  controllers: [ScreentochkaController],
  providers: [ScreentochkaService],
})
export class ScreentochkaModule { }
