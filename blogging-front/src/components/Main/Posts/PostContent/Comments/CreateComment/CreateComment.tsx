import { CommentProps, createPostComment } from "@/services/blog";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useBlog } from "@/context/useBlog";

type CreateCommentProps = {
    postId:number;
}

function CreateComment({
    postId
}:CreateCommentProps) {
    const { setHasPostUpdate } = useBlog();
    const [content, setContent] = useState('')
    const [message, setMessage] = useState('')

    const handleCreateComment = async () => {
        try { 
            let comment:CommentProps = {
                content
            }

            await createPostComment(postId, comment)
            setMessage('Comment created')
            setHasPostUpdate(true)
        } catch(e) {
            setMessage('Error creating comment')
        }
    }

    return (
        <Card className="m-10">
            <CardHeader>
                <CardTitle>Create new comment</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="title">Content</Label>
                        </div>
                        <Input type="text" onChange={e => setContent(e.target.value)} />
                    </div>  
                    <div className="grid gap-2">
                        <Button onClick={() => handleCreateComment()} >Submit</Button>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                {message}
            </CardFooter>
        </Card>
    );
}

export default CreateComment;
