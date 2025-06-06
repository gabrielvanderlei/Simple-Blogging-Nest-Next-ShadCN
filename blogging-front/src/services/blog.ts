import { get, post } from "./api";

export type PostProps = {
    id:number;
    title:string;
    content:string;
    comments:CommentProps[];
}

export type CommentProps = {
    content:string;
}

export const getAllPosts = ():Promise<PostProps[]> => get('posts');


export type CreatePostProps = {
    title:string,
    content:string
}

export const createPost = (content:CreatePostProps) => post('posts', content);

export type CreatePostCommentProps = {
    content:string;
}

export const createPostComment = (postId:number, content:CreatePostCommentProps) => post('posts/' + postId + '/comments', content);