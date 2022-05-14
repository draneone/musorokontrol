import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { COOKIE_SECRET } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser(COOKIE_SECRET));

  app.enableCors({ origin: 'http://localhost:3000', credentials: true }); // CORS

  await app.listen(3001);
}
bootstrap();
