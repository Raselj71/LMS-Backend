import { IsOptional, IsPhoneNumber,  IsString, IsUrl, MinLength } from "class-validator"

export class userDto{
    
    @IsString()
    email:string

    @IsString()
    @MinLength(5)
    password: string

    @IsString()
    @MinLength(3)
    fullName:string

    @IsUrl()
    @IsOptional()
    avatarUrl:string

    @IsString()
    @IsOptional()
    bio?: string

    @IsPhoneNumber('BD')
    phone:string 

}