import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentsRepository } from '../database/repositories/comments.repository';
import { Comments } from '../database/entities/comments.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private commentsRepository: CommentsRepository,
  ) { }

  /**
   * 댓글 생성
   */
  CreateComment() { }

  /**
   * 블로그 게시물 모두 가져오기
   */
  GetCommentAll() { }

  /**
   * 댓글 수정
   */
  UpdateComment() { }

  /**
   * 댓글 삭제
   */
  DeleteComment() { }
}
