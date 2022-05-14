import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { MainResortModule } from './mainResort/mainResort.module';
import ormconfig from './ormconfig';
import { ResortModule } from './resort/resort.module';
import { TagModule } from './tag/tag.module';
import { AuthMiddleware } from './user/middleware/auth.middleware';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TagModule,
    UserModule,
    ArticleModule,
    MainResortModule,
    ResortModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
