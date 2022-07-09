import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comments } from 'src/database/entities/comments.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comments])
  ],
  providers: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
