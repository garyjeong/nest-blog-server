import { IsNotEmpty, IsString, Length } from "class-validator";

export class SignInDto {
    @IsString()
    @Length(50)
    @IsNotEmpty()
    email: string;

    @IsString()
    @Length(50)
    @IsNotEmpty()
    password: string;
  }
  
  export class SignUpDto {
    @IsString()
    @Length(20)
    @IsNotEmpty()
    uid: string;

    @IsString()
    @Length(50)
    @IsNotEmpty()
    email: string;

    @IsString()
    @Length(50)
    @IsNotEmpty()
    password: string;

    @IsString()
    @Length(30)
    @IsNotEmpty()
    nickname: string;
  }
  