import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/DTO/create-user-dto';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
    constructor(private userService:UsersService){ }

    @Post('signup')
    signup(
        @Body()createUser:CreateUserDTO
    ) : Promise<User>{
        return this.userService.createUser(createUser);
    }

}