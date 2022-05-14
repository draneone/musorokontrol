import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { MainResortDto } from './dto/mainResort.dto';
import { MainResortEntity } from './mainResort.entity';
import { MainResortResponseInterface } from './types/mainResortResponse.interface';

@Injectable()
export class MainResortService {
  constructor(
    @InjectRepository(MainResortEntity)
    private readonly mainResortRepository: Repository<MainResortEntity>,
  ) {}

  // Создать mainResort
  async createMainResort(
    mainResortDto: MainResortDto,
  ): Promise<MainResortEntity> {
    // Создадим новый объект mainResort
    const mainResort = new MainResortEntity();
    // Замутируем его с дтошкой
    Object.assign(mainResort, mainResortDto);

    // Сохраним в бд и вернем mainResort
    return await this.mainResortRepository.save(mainResort);
  }

  // Получить mainResort по slug
  async findOnBySlug(slug: string): Promise<MainResortEntity> {
    // Создаем queryBuilder
    const queryBuilder = getRepository(MainResortEntity)
      .createQueryBuilder('mainresorts')
      .leftJoinAndSelect('mainresorts.resorts', 'resorts');

    // Условие поиска
    queryBuilder.andWhere('mainresorts.slug = :slug', {
      slug,
    });

    // Получим mainResort
    const mainResort = await queryBuilder.getOne();

    // Если такого mainResort нет выкинем ошибку
    if (!mainResort) {
      throw new HttpException(
        'Такой страницы с курортами не существует.',
        HttpStatus.NOT_FOUND,
      );
    }

    // Вернем mainResort
    return mainResort;
  }

  // bilder ответа
  buildMainResponse(mainResort: MainResortEntity): MainResortResponseInterface {
    return { mainResort };
  }
}
