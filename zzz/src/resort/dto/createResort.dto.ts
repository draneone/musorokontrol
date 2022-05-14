import { IsNotEmpty } from 'class-validator';

export class CreateResortDto {
  @IsNotEmpty()
  readonly slug: string;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly h1: string;

  readonly body?: string;

  @IsNotEmpty()
  readonly mainResortId: number;
}
