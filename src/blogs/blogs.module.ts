import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { Blogs } from 'src/database/entities/blogs.entity';
import { BlogsController } from './blogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Blogs])
  ],
  providers: [BlogsService],
  controllers: [BlogsController],
})
export class BlogsModule {}
