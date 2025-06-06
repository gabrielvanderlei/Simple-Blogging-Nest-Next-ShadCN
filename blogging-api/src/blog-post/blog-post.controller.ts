import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { CreateBlogPostCommentDto } from './dto/create-blog-post-comment.dto';

@Controller('api/posts')
export class BlogPostController {
  constructor(private readonly blogPostService: BlogPostService) {}

  @Post()
  create(@Body() createBlogPostDto: CreateBlogPostDto) {
    return this.blogPostService.create(createBlogPostDto);
  }

  @Get()
  findAll() {
    return this.blogPostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogPostService.findOne(+id);
  }
  
  @Post(':id/comments')
  createComment(@Param('id') id:string, @Body() createBlogPostCommentDto: CreateBlogPostCommentDto) {
    return this.blogPostService.createPostComment(+id, createBlogPostCommentDto);
  }
}
