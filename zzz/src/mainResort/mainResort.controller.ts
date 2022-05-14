import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MainResortDto } from './dto/mainResort.dto';
import { MainResortService } from './mainResort.service';
import { MainResortResponseInterface } from './types/mainResortResponse.interface';

@Controller('main-resort')
export class MainResortController {
  constructor(private readonly mainResortService: MainResortService) {}

  // Создание mainResort
  @Post()
  @UsePipes(new ValidationPipe())
  async postMainResort(
    @Body('mainResort') mainResortDto: MainResortDto,
  ): Promise<MainResortResponseInterface> {
    // Получим главный курорт
    const mainResort = await this.mainResortService.createMainResort(
      mainResortDto,
    );

    return this.mainResortService.buildMainResponse(mainResort);
  }

  // Получение mainResort страницы
  @Get(':slug')
  async getMainResort(
    @Param('slug') slug: string,
  ): Promise<MainResortResponseInterface> {
    const mainResort = await this.mainResortService.findOnBySlug(slug);

    return this.mainResortService.buildMainResponse(mainResort);
  }
}
