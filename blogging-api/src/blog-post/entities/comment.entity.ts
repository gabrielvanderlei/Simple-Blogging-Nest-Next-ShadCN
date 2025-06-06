import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BlogPost } from './blog-post.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => BlogPost, (blogPost) => blogPost.comments)
  @JoinColumn({ name: 'blog_post_id' })
  blogPostId: BlogPost;
}