import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { SearchUserDto } from './dto/search-user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(dto: CreateUserDto): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    search(dto: SearchUserDto): Promise<User[]>;
}
