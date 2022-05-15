import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTypetochkaDto } from './dto/createTypetochka.dto';
import { CreateResponseTypetochkaInterface } from './types/createResponseTypetochka.interface';
import { TypetochkaService } from './typetochka.service';

@Controller('typetochka')
export class TypetochkaController {
  constructor(
    private readonly typetochkaService: TypetochkaService
  ) { }

  @Post()
  @UsePipes(new ValidationPipe()) // Валидация запроса.
  async create(
    @Body() createTypetochkaDto: CreateTypetochkaDto
  ): Promise<CreateResponseTypetochkaInterface> {
    console.log(createTypetochkaDto)

    const typetochka = await this.typetochkaService.create(createTypetochkaDto)
    return { typetochka }
  }
}
