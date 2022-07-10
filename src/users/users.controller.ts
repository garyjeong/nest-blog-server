import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignInDto, SignUpDto } from '../dto/sign.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get('in')
	async SignIn(@Body() signinDto: SignInDto): Promise<boolean> {
		return false;
	}

	@Post('up')
	async SignUp(@Body() signupDto: SignUpDto): Promise<boolean> {
		return false;
	}
}

@Controller('sign')
export class SignController {
	constructor(private readonly usersService: UsersService) {}

	@Get('in')
	async SignIn(@Body() signinDto: SignInDto): Promise<boolean> {
		this.usersService.SignIn(signinDto);
		return false;
	}

	@Post('up')
	async SignUp(@Body() signupDto: SignUpDto): Promise<boolean> {
		this.usersService.SignUp(signupDto);
		return false;
	}
}