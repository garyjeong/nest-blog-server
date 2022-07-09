import { EntityRepository, Repository } from 'typeorm';
import { Users } from '../entities/users.entity';

@EntityRepository()
export class UsersRepository extends Repository<Users> {}
