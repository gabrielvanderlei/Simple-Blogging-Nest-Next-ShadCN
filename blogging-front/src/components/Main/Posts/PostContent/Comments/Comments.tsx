import Comment, { CommentProps } from './CommentContent/CommentContent'
import CreateComment from './CreateComment/CreateComment';

type CommentsProps = {
  id:number;
  comments:CommentProps[]
}

function Comments({
    id,
    comments
}:CommentsProps) {
  return (
    <div className='flex'>
        <div className='flex-col flex-1'>
            <CreateComment postId={id} />
        </div>
        <div className='flex-col flex-1'>
            {comments.map(({ content }:CommentProps, index:number) => (
                <Comment key={index} content={content} />
            ))}
        </div>
    </div>
  );
}

export default Comments;
