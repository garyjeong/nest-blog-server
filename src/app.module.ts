import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

import { BlogsController } from './blogs/blogs.controller';
import { BlogsService } from './blogs/blogs.service';
import { BlogsModule } from './blogs/blogs.module';

import { CommentsController } from './comments/comments.controller';
import { CommentsService } from './comments/comments.service';
import { CommentsModule } from './comments/comments.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forRoot(), UsersModule, BlogsModule, CommentsModule],
	controllers: [
		AppController,
		UsersController,
		BlogsController,
		CommentsController,
	],
	providers: [AppService, UsersService, BlogsService, CommentsService],
})
export class AppModule {}
