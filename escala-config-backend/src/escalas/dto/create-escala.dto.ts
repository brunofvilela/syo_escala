import { IsInt, IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateEscalaDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsDateString()
  data: string;

  @IsInt()
  userId: number;
}
