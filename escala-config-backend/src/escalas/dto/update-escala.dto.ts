import { IsInt, IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateEscalaDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsDateString()
  data?: string;

  @IsOptional()
  @IsInt()
  userId?: number;
}
