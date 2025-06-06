import { Module } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { BlogPostController } from './blog-post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPost } from './entities/blog-post.entity';
import { Comment } from './entities/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'blog.db',
      entities: [BlogPost, Comment],
      synchronize: true, // Only for development
      logging: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([BlogPost, Comment]),
  ],
  controllers: [BlogPostController],
  providers: [BlogPostService],
})
export class BlogPostModule {}
