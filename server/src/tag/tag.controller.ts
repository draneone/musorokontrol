import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTagDto } from './dto/createTag.dto';
import { TagEntity } from './tag.entity';
import { TagService } from './tag.service';
import { CreateResponseInterface } from './types/createResponse.interface';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) { }

  @Get()
  async findAll(): Promise<{
    tags: TagEntity[]
  }> {
    const tags = await this.tagService.findAll();

    return {
      tags,
    };
  }

  @Post()
  @UsePipes(new ValidationPipe()) // Валидация запроса.
  async create(
    @Body() createTagDto: CreateTagDto
  ): Promise<CreateResponseInterface> {
    const tag = await this.tagService.create(createTagDto)
    return {
      tag
    }
  }
}
