import { Body, Controller, Post } from '@nestjs/common';
import { userDto } from './dto/userDto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

     constructor(private authService:AuthService){}

    @Post('sign-in')
    signIn(@Body() userDto:userDto){
        return this.authService.userSignIn(userDto)



    }

}
