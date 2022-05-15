import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypetochkaDto } from './dto/createTypetochka.dto';
import { TypetochkaEntity } from './typetochka.entity';

@Injectable()
export class TypetochkaService {
  constructor(
    // @InjectRepository(TypetochkaEntity) typetockaRep: Repository<TypetochkaEntity>
  ) { }
  // constructor(
  //   @InjectRepository(TypetochkaEntity)
  //   private readonly typetochkaRepository: Repository<TypetochkaEntity>
  // ) { }

  async create(createTypetochkaDto: CreateTypetochkaDto): Promise<TypetochkaEntity> {
    console.log(123)
    return
    // const typetocka = new TypetochkaEntity()
    // Object.assign(typetocka, createTypetochkaDto)
    // return await this.typetochkaRepository.save(typetocka)
  }
}
