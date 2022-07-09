import { EntityRepository, Repository } from 'typeorm';
import { Blogs } from '../entities/blogs.entity';

@EntityRepository()
export class BlogsRepository extends Repository<Blogs> {}
