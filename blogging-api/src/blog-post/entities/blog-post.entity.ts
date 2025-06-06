import { Comment } from './comment.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class BlogPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
  
  @OneToMany(() => Comment, comment => comment.blogPostId)
  comments: Comment[];
}