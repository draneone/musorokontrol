import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/createTag.dto';
import { TagEntity } from './tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) { }

  async findAll(): Promise<TagEntity[]> {
    return await this.tagRepository.find();
  }

  async create(createTagDto: CreateTagDto): Promise<TagEntity> {
    const tag = new TagEntity()
    Object.assign(tag, createTagDto)
    return await this.tagRepository.save(tag)
  }
}
