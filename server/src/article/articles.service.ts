import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { DeleteResult, getRepository, Repository } from 'typeorm';
import { ArticleEntity } from './article.entity';
import { CreateArticleDto } from './dto/createArticle.dto';
import { ArticleResponseInterface } from './types/articleResponse.interface';
import slugify from 'slugify';
import { ArticlesResponseInterface } from './types/articlesResponse.interface';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  // Получаем все articles
  async findAll(
    currentUserId: number,
    query: any,
  ): Promise<ArticlesResponseInterface> {
    // Создаем queryBuilder
    const queryBuilder = getRepository(ArticleEntity)
      .createQueryBuilder('articles')
      .leftJoinAndSelect('articles.author', 'author');

    // Сортируем по дате создания
    queryBuilder.orderBy('articles.createdAt', 'DESC');

    // Посчитаем все article
    // const articlesCount = await queryBuilder.getCount();

    // Если есть tag
    if (query.tag) {
      queryBuilder.andWhere('articles.tagList LIKE :tag', {
        tag: `%${query.tag}%`,
      });
    }
    // Если есть author
    if (query.author) {
      const author = await this.userRepository.findOne({
        username: query.author,
      });
      queryBuilder.andWhere('articles.authorId = :id', {
        id: author.id,
      });
    }
    // Если есть лимит
    if (query.limit) {
      queryBuilder.limit(query.limit);
    }
    // Если есть offset
    if (query.offset) {
      queryBuilder.offset(query.offset);
    }

    // Получим articles
    const articles = await queryBuilder.getMany();
    // Посчитаем все article
    const articlesCount = await queryBuilder.getCount();

    return {
      articles,
      articlesCount,
    };
  }

  // Создание новой article в бд
  async createArticle(
    currentUser: UserEntity,
    createArticleDto: CreateArticleDto,
  ): Promise<ArticleEntity> {
    // Создадим новый объект article
    const article = new ArticleEntity();
    // Замутируем article с новыми данными
    Object.assign(article, createArticleDto);

    // Если тегов нет добавим пустой массив
    if (!article.tagList) {
      article.tagList = [];
    }

    // Добавляем slug
    article.slug = this.uniqueSlug(article.title);

    // Добавляем связь с пользователем
    article.author = currentUser;

    // Сохраним article в бд и вернем его
    return await this.articleRepository.save(article);
  }

  // Получение article по slug
  async findBySlug(slug: string): Promise<ArticleEntity> {
    const article = await this.articleRepository.findOne({ slug });

    // Если article не найдена выбросим ошибку
    if (!article) {
      throw new HttpException(
        'Такой статьи не существует',
        HttpStatus.NOT_FOUND,
      );
    }

    // Вернем article
    return article;
  }

  // Удаление одной article
  async deleteArticle(
    currentUserId: number,
    slug: string,
  ): Promise<DeleteResult> {
    // Полученим article по slug
    const article = await this.findBySlug(slug);

    // Если id автора не совпадают выбросим ошибку
    if (article.author.id !== currentUserId) {
      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
    }

    // Вернем результат удаления article
    return await this.articleRepository.delete({ slug });
  }

  // Обновление article
  async updateArticle(
    currentUserId: number,
    slug: string,
    updateArticleDto: CreateArticleDto,
  ): Promise<ArticleEntity> {
    const article = await this.findBySlug(slug);

    // Если id автора не совпадают выбросим ошибку
    if (article.author.id !== currentUserId) {
      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
    }

    // Замутируем найденый article с updateArticleDto
    Object.assign(article, updateArticleDto);

    // Сохраним обновления и вернем article
    return this.articleRepository.save(article);
  }

  //
  //
  //

  // уникальный slug
  private uniqueSlug(title: string) {
    return (
      slugify(title, { lower: true }) +
      '-' +
      ((Math.random() * Math.pow(36, 6)) | 0).toString(36)
    );
  }

  // Подготовка ответа сервера
  buildArticleResponse(article: ArticleEntity): ArticleResponseInterface {
    return { article };
  }
}
