import { IsNotEmpty } from 'class-validator';

export class CreateTypetochkaDto {
  @IsNotEmpty()
  readonly name: string;
}