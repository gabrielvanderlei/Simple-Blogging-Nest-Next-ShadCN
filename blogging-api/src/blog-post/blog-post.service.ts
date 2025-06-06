import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { BlogPost } from './entities/blog-post.entity';
import { Comment } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlogPostCommentDto } from './dto/create-blog-post-comment.dto';

@Injectable()
export class BlogPostService {
  constructor(
    @InjectRepository(BlogPost)
    private readonly blogPostRepository: Repository<BlogPost>,
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ){}

  async create(createBlogPostDto: CreateBlogPostDto) {
    const blogPost = this.blogPostRepository.create(createBlogPostDto);
    return await this.blogPostRepository.save(blogPost);
  }

  async findAll() {
    const posts = await this.blogPostRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.comments', 'comment')
      .getMany();

    return posts.map(post => ({
      id: post.id,
      title: post.title,
      content: post.content,
      comments: post.comments,
    }));
  }

  async findOne(id: number) {
    const blogPost = await this.blogPostRepository.findOne({
      where: { id },
      relations: ['comments'],
    });

    if (!blogPost) {
      throw new NotFoundException(`Blog post with ID ${id} not found`);
    }

    return blogPost;
  }

  async createPostComment(blogPostId: number, createBlogPostCommentDto: CreateBlogPostCommentDto) {
    const blogPost = await this.findOne(blogPostId);
    
    const comment = this.commentRepository.create({
      ...createBlogPostCommentDto,
      blogPostId: blogPost,
    });

    return await this.commentRepository.save(comment);
  }
}
