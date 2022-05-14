import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from 'src/config';
import { UserResponseInterface } from './types/userResponse.interface';
import { LoginUserDto } from './dto/loginUser.dto';
import { compare } from 'bcrypt';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  // Создание пользователя.
  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    // Проверим существует ли пользователь с таким username.
    const userByUsername = await this.userRepository.findOne({
      username: createUserDto.username,
    });
    if (userByUsername) {
      throw new HttpException(
        'Пользователь с таким именем уже зарегестрирован',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    //

    // Проверим существует ли пользователь с таким email.
    const userByEmail = await this.userRepository.findOne({
      email: createUserDto.email,
    });
    if (userByEmail) {
      throw new HttpException(
        'Пользователь с таким email уже зарегестрирован',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    //

    // Создадим нового пользователя.
    const newUser = new UserEntity();

    // Мутируем нового пользователя добавляя пришедшие данные.
    Object.assign(newUser, createUserDto);

    // Сохраняем нового пользователя в базу.
    const user = await this.userRepository.save(newUser);

    // Удалим пароль из объекта user
    delete user.password;

    // Возвращаем нового пользователя.
    return user;
  }

  // Генератор токена.
  generateJwt(user: UserEntity): string {
    return sign(
      {
        id: user.id,
        username: user.username,
      },
      JWT_SECRET,
    );
  }

  // Генерация ответа сервера при создании нового пользователя.
  buildUserResponse(user: UserEntity): UserResponseInterface {
    return {
      user: {
        ...user,
        token: this.generateJwt(user),
      },
    };
  }

  // Поиск пользователя для аутентификации.
  async loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
    // Получим пользователя по имени.
    const user = await this.userRepository.findOne(
      {
        username: loginUserDto.username,
      },
      {
        select: ['id', 'email', 'username', 'bio', 'image', 'password'],
      },
    );

    // Если такого пользователя нет, выбросим ошибку.
    if (!user) {
      throw new HttpException(
        'Пользователя с таким именем не существует',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    // Проверим пароль
    const passwordMath = await compare(loginUserDto.password, user.password);

    // Если пароли не совпадают, выбросим ошибку.
    if (!passwordMath) {
      throw new HttpException(
        'Не верный пароль',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    // Удалим пароль из объекта user
    delete user.password;

    // Вернем пользователя.
    return user;
  }

  // Получение пользователя по id
  async findByUserId(id: number): Promise<UserEntity> {
    return await this.userRepository.findOne(id);
  }

  // Обновление пользователя
  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    // Найдем пользователя по id
    const user = await this.findByUserId(id);

    // Если пользователь не найден
    if (!user) {
      throw new HttpException(
        'Пользователь не найден',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    // Замутируем объект user с его обновлениями
    Object.assign(user, updateUserDto);

    // Обновим и вернем пользователя
    return await this.userRepository.save(user);
  }
}
