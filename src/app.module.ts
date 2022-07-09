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
import { DatabaseConfigModule } from './config/config.module';
import { DatabaseConfigService } from './config/config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule.forRoot({
			cache: true,
			isGlobal: true,
		}),
		TypeOrmModule.forRootAsync({
			imports: [DatabaseConfigModule],
			useClass: DatabaseConfigService,
			inject: [DatabaseConfigService],
		}),
		UsersModule,
		BlogsModule,
		CommentsModule,
	],
	controllers: [
		AppController,
	],
	providers: [
		AppService,
	],
})
export class AppModule { }
