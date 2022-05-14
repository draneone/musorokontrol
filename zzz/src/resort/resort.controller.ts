import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateResortDto } from './dto/createResort.dto';
import { ResortService } from './resort.service';
import { ResortResponseInterface } from './types/resortResponse.interface';

@Controller('resort')
export class ResortController {
  constructor(private readonly resortService: ResortService) {}

  @Post()
  async postResort(
    @Body('resort') createResortDto: CreateResortDto,
  ): Promise<ResortResponseInterface> {
    const resort = await this.resortService.createResort(createResortDto);

    return this.resortService.buildResortResponse(resort);
  }

  // Получение resort по slug
  @Get(':slug')
  async getResort(@Param('slug') slug: string): Promise<any> {
    return await this.resortService.findOnPoSlug(slug);
  }
}
