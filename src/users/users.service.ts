import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from '../database/repositories/users.repository';
import { Users } from '../database/entities/users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: UsersRepository,
    ) { }

    /**
     * 계정 생성
     */
    SignUp(email: string, password: string) {
        return this.usersRepository.create({});
    }

    /**
     * 로그인
     */
    SignIn() { }

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
