import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MainResortEntity } from 'src/mainResort/mainResort.entity';
import { Repository } from 'typeorm';
import { CreateResortDto } from './dto/createResort.dto';
import { ResortEntity } from './resort.entity';
import { ResortResponseInterface } from './types/resortResponse.interface';

@Injectable()
export class ResortService {
  constructor(
    @InjectRepository(MainResortEntity)
    private readonly mainResortRepository: Repository<MainResortEntity>,
    @InjectRepository(ResortEntity)
    private readonly resortRepository: Repository<ResortEntity>,
  ) {}

  // Создать resort
  async createResort(createResortDto: CreateResortDto): Promise<ResortEntity> {
    const { mainResortId, ...createResort } = createResortDto;
    // Создадим новый объект resort
    const resort = new ResortEntity();
    // Замутируем его с дтошкой
    Object.assign(resort, createResort);

    // Найдем mainResort по id
    const mainResort = await this.mainResortRepository.findOne(
      createResortDto.mainResortId,
    );
    // Если mainResort не существует выбросим ошибку
    if (!mainResort) {
      throw new HttpException(
        'Главная категория не существует',
        HttpStatus.NOT_FOUND,
      );
    }

    // Добавим савязь с главной категорией
    resort.mainResort = mainResort;

    // Сохраним в бд и вернем resort
    return await this.resortRepository.save(resort);
  }

  async findOnPoSlug(slug: string) {
    return slug + 'sdf';
  }

  // Подготовка ответа сервера
  buildResortResponse(resort: ResortEntity): ResortResponseInterface {
    return { resort };
  }
}
