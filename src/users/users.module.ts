import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../database/entities/users.entity';
import { SignController, UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users])
  ],
  providers: [UsersService],
  controllers: [UsersController, SignController],
})
export class UsersModule {}
