import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { BlogsModule } from './blogs/blogs.module';
import { BlogService } from './blog/blog.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, BlogsModule, CommentsModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, BlogService],
})
export class AppModule {}
