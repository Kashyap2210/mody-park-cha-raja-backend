import { User } from '../user/user.entity';
import { AartiService } from './aarti.service';
import { CreateAartiDto } from './dto/create-aarti.dto';
import { UpdateAartiDto } from './dto/update-aarti.dto';
export declare class AartiController {
    private readonly aartiService;
    constructor(aartiService: AartiService);
    findAll(): Promise<import("./aarti.entity").Aarti[]>;
    findOne(id: number): Promise<import("./aarti.entity").Aarti>;
    create(dto: CreateAartiDto, user: User): Promise<import("./aarti.entity").Aarti>;
    update(id: number, dto: UpdateAartiDto, user: User): Promise<import("./aarti.entity").Aarti>;
    remove(id: number): Promise<void>;
}
