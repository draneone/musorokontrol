import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormconfig from './ormconfig';
import { TagModule } from './tag/tag.module';
import { TochkaController } from './tochka/tochka.controller';
import { TochkaModule } from './tochka/tochka.module';
import { TochkaService } from './tochka/tochka.service';
import { ScreentochkaController } from './screentochka/screentochka.controller';
import { ScreentochkaService } from './screentochka/screentochka.service';
import { ScreentochkaModule } from './screentochka/screentochka.module';
import { TypetochkaController } from './typetochka/typetochka.controller';
import { TypetochkaService } from './typetochka/typetochka.service';
import { TypetochkaModule } from './typetochka/typetochka.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TagModule,
    TochkaModule,
    ScreentochkaModule,
    TypetochkaModule,
  ],
  controllers: [AppController, TochkaController, ScreentochkaController, TypetochkaController],
  providers: [AppService, TochkaService, ScreentochkaService, TypetochkaService],
})
export class AppModule { }
