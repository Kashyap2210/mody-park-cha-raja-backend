import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateAartiDto {
  @IsString()
  @IsNotEmpty()
  titleEN: string;

  @IsString()
  @IsNotEmpty()
  titleMR: string;

  @IsString()
  @IsOptional()
  englishVersion?: string;

  @IsString()
  @IsOptional()
  hindiVersion?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  displayOrder?: number;
}
