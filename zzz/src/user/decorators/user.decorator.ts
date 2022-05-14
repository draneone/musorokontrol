import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ExpressRequestInterface } from 'src/types/expressRequest.interface';

export const User = createParamDecorator((data: any, ctx: ExecutionContext) => {
  // Получим request запроса
  const request = ctx.switchToHttp().getRequest<ExpressRequestInterface>();

  // Если в request нет user вернём null
  if (!request.user) {
    return null;
  }

  if (data) {
    return request.user[data];
  }

  return request.user;
});
