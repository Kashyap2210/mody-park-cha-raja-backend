import { Repository } from 'typeorm';
import { Aarti } from './aarti.entity';
import { CreateAartiDto } from './dto/create-aarti.dto';
import { UpdateAartiDto } from './dto/update-aarti.dto';
export declare class AartiService {
    private readonly aartiRepository;
    constructor(aartiRepository: Repository<Aarti>);
    findAll(): Promise<Aarti[]>;
    findOne(id: number): Promise<Aarti>;
    create(dto: CreateAartiDto, createdBy: string): Promise<Aarti>;
    update(id: number, dto: UpdateAartiDto, updatedBy: string): Promise<Aarti>;
    remove(id: number): Promise<void>;
}
