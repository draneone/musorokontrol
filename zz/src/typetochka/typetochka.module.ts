import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypetochkaController } from './typetochka.controller';
import { TypetochkaEntity } from './typetochkaEntity.entity';
import { TypetochkaService } from './typetochka.service';

@Module({
    imports: [TypeOrmModule.forFeature()], 
    providers: [TypetochkaService],
    controllers: [TypetochkaController],
    // imports: [TypeOrmModule.forFeature([Typetochka])],
    // controllers: [TypetochkaController],
    // providers: [TypetochkaService],
})
export class TypetochkaModule {}
