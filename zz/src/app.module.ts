import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TochkaController } from './tochka/tochka.controller';
import { TochkaService } from './tochka/tochka.service';
import { TochkaModule } from './tochka/tochka.module';
import { ScreentochkaController } from './screentochka/screentochka.controller';
import { ScreentochkaService } from './screentochka/screentochka.service';
import { ScreentochkaModule } from './screentochka/screentochka.module';
import { TagController } from './tag/tag.controller';
import { TagService } from './tag/tag.service';
import { TagModule } from './tag/tag.module';
import { TypetochkaController } from './typetochka/typetochka.controller';
import { TypetochkaService } from './typetochka/typetochka.service';
import { TypetochkaModule } from './typetochka/typetochka.module';
import ormconfig from './ormconfig';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    TypeOrmModule.forRoot(ormconfig),
    TochkaModule,
    ScreentochkaModule,
    TagModule,
    TypetochkaModule,
  ],
  controllers: [AppController, TochkaController, ScreentochkaController, TagController, TypetochkaController ],
  providers: [AppService, TochkaService, ScreentochkaService, TagService, TypetochkaService],
})
export class AppModule {}
