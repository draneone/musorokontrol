import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypetochkaEntity } from './typetochkaEntity.entity';
// import { Typetochka } from './typetochka.entity';

@Injectable()
export class TypetochkaService {
    constructor(
        @InjectRepository(TypetochkaEntity)
        private readonly typetochkaRepository: Repository<TypetochkaEntity>
    ) {}

    // async create() {
    //     typetochkaRepository.
    // }
}
