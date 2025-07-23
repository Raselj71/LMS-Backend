import { Injectable } from '@nestjs/common';
import { userDto } from './dto/userDto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }

    async userSignIn(userDto: userDto) {

        const user = await this.prisma.user.findUnique({
            where: {
                email: userDto.email
            }
        })


    }


}
