import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly configService;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService);
    register(dto: CreateUserDto): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
        };
        token: string;
    }>;
    login(email: string, password: string): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
        };
        token: string;
    }>;
    private generateToken;
}
