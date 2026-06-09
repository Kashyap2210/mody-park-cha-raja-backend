import { PartialType } from '@nestjs/mapped-types';
import { CreateAartiDto } from './create-aarti.dto';

export class UpdateAartiDto extends PartialType(CreateAartiDto) {}
