import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScreentochkaEntity } from './screntochka.entity';

@Injectable()
export class ScreentochkaService {
  constructor(
    // @InjectRepository(ScreentochkaEntity) screentochkaRep: Repository<ScreentochkaEntity>
  ) { }
}
