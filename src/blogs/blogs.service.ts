import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogsRepository } from 'src/database/repositories/Blogs.repository';
import { Blogs } from '../database/entities/Blogs.entity';

@Injectable()
export class BlogsService {
    constructor(
		@InjectRepository(Blogs)
		private BlogsRepository: BlogsRepository,
    ) {}

    /**
     * 블로그 게시물 생성
     */
    CreateBlog() {}

    /**
     * 블로그 게시물 리스트 가져오기
     */
    GetBlogList() {}
    
    /**
     * 블로그 게시물 상세 가져오기
     */
    GetBlogDetail() {}

    /**
     * 블로그 게시물 수정
     */
    UpdateBlog() {}

    /**
     * 블로그 게시물 삭제
     */
    DeleteBlog() {}
}
