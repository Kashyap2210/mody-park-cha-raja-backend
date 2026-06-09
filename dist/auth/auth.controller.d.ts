import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: CreateUserDto): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
        };
        token: string;
    }>;
    login(dto: {
        email: string;
        password: string;
    }): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
        };
        token: string;
    }>;
}
