import { EntityRepository, Repository } from 'typeorm';
import { Comments } from '../entities/comments.entity';

@EntityRepository()
export class CommentsRepository extends Repository<Comments> {}
