import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from '../database/repositories/users.repository';
import { Users } from '../database/entities/users.entity';
import { SignInDto, SignUpDto } from 'src/dto/sign.dto';
import Time from 'utils/time.util';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: UsersRepository,
    ) { }

    /**
     * 로그인
     */
     SignIn(signinDto: SignInDto) { 
        const email = this.usersRepository.findAndCount({ email: signinDto.email });
        return 'a';
    }

    /**
     * 계정 생성
     */
    SignUp(signupDto: SignUpDto) {
        const time = new Time();
        signupDto.uid = time.makeId();

        return this.usersRepository.save(signupDto);
    }

    /**
     * 사용자 정보 가져오기
     */
    GetOne() { }

    /**
     * 사용자 상세 정보 가져오기(닉네임 등)
     */
    GetOneDetail() { }

    /**
     * 사용자 정보 변경
     */
    Update() { }

    /**
     * 회원탈퇴
     */
    Delete() { }
}
