import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aarti } from './aarti.entity';
import { CreateAartiDto } from './dto/create-aarti.dto';
import { UpdateAartiDto } from './dto/update-aarti.dto';

@Injectable()
export class AartiService {
  constructor(
    @InjectRepository(Aarti)
    private readonly aartiRepository: Repository<Aarti>,
  ) {}

  async findAll(): Promise<Aarti[]> {
    return this.aartiRepository.find();
  }

  async findOne(id: number): Promise<Aarti> {
    const aarti = await this.aartiRepository.findOne({ where: { id } });
    if (!aarti) {
      throw new NotFoundException(`Aarti with id ${id} not found`);
    }
    return aarti;
  }

  async create(dto: CreateAartiDto, createdBy: string): Promise<Aarti> {
    const aarti = this.aartiRepository.create({
      ...dto,
      createdBy,
    });
    return this.aartiRepository.save(aarti);
  }

  async update(
    id: number,
    dto: UpdateAartiDto,
    updatedBy: string,
  ): Promise<Aarti> {
    const aarti = await this.findOne(id);
    Object.assign(aarti, dto);
    aarti.updatedBy = updatedBy;
    return this.aartiRepository.save(aarti);
  }

  async remove(id: number): Promise<void> {
    const aarti = await this.findOne(id);
    await this.aartiRepository.remove(aarti);
  }
}
