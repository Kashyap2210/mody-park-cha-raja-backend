import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../common/guards/auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { User } from '../user/user.entity';
import { AartiService } from './aarti.service';
import { CreateAartiDto } from './dto/create-aarti.dto';
import { UpdateAartiDto } from './dto/update-aarti.dto';

@Controller('aarti')
export class AartiController {
  constructor(private readonly aartiService: AartiService) {}

  @Get()
  findAll() {
    return this.aartiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.aartiService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Body() dto: CreateAartiDto,
    @CurrentUser() user: User,
  ) {
    return this.aartiService.create(dto, user.email);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAartiDto,
    @CurrentUser() user: User,
  ) {
    return this.aartiService.update(id, dto, user.email);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.aartiService.remove(id);
  }
}
