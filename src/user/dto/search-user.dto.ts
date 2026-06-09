import { IsArray, IsNumber } from 'class-validator';

export class SearchUserDto {
  @IsArray()
  @IsNumber({}, { each: true })
  id: number[];
}
