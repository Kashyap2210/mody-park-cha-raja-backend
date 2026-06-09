import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAartiDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  englishVersion: string;

  @IsString()
  @IsNotEmpty()
  hindiVersion: string;
}
