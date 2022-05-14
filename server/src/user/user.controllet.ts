import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { User } from './decorators/user.decorator';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { AuthGuard } from './guards/auth.guard';
import { UserResponseInterface } from './types/userResponse.interface';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Регистрация.
  @Post('users')
  @UsePipes(new ValidationPipe()) // Валидация запроса.
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.createUser(createUserDto);

    return this.userService.buildUserResponse(user);
  }

  // Аутентификация.
  @Post('users/login')
  @UsePipes(new ValidationPipe()) // Валидация запроса.
  async loginUser(
    @Res({ passthrough: true }) response: Response,
    @Body('user') loginUserDto: LoginUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.loginUser(loginUserDto);

    // Подготовим ответ сервера
    const resultResponse = this.userService.buildUserResponse(user);

    // Добавим куки к ответу
    response.cookie('token', resultResponse.user.token);

    // Ответим
    return resultResponse;
  }

  // Получение текущего пользователя.
  @Get('user')
  @UseGuards(AuthGuard)
  async currentUser(@User() user: UserEntity): Promise<UserResponseInterface> {
    return this.userService.buildUserResponse(user);
  }

  // Обновление текущего пользователя
  @Put('user')
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe()) // Валидация запроса.
  async updateCurrentUser(
    @User('id') currentUserId: number,
    @Body('user') updateUserDto: UpdateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.updateUser(
      currentUserId,
      updateUserDto,
    );

    return this.userService.buildUserResponse(user);
  }
}
