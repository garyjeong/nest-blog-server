import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from '../database/repositories/users.repository';
import { Users } from '../database/entities/users.entity';
import { SignInDto, SignUpDto } from 'src/dto/sign.dto';
import Time from '../utils/time.util';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: UsersRepository,
    ) { }

    /**
     * 로그인
     */
     async SignIn(signinDto: SignInDto): Promise<boolean> { 
        const data = await this.usersRepository.findOneOrFail({ email: signinDto.email });

        if(data) {
            if(data.password === signinDto.password) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    /**
     * 계정 생성
     */
    async SignUp(signupDto: SignUpDto): Promise<boolean> {
        try {
            const isExist = await this.usersRepository.findOne({ where: {email: signupDto.email} });

            if(!isExist) {
                const time = new Time();
                signupDto.uid = time.makeId();
                await this.usersRepository.save(signupDto);
                return true;
            } else {
                throw new Error();
            }
        } catch(e) {
            return false;
        }
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
