import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBlog } from "@/context/useBlog";
import { createPost, CreatePostProps } from "@/services/blog";
import { useState } from "react";

function CreatePost() {
    const { setHasPostUpdate } = useBlog();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [message, setMessage] = useState('')

    const handleCreatePost = async () => {
        try { 
            let post:CreatePostProps = {
                title,
                content
            }

            await createPost(post);
            setMessage('Post created')
            setHasPostUpdate(true)
        } catch(e) {
            setMessage('Error creating post')
        }
    }

    return (
        <Card className="mt-10">
            <CardHeader>
                <CardTitle>Create new post</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="title">Title</Label>
                        </div>
                        <Input name="title" type="text" onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="content">Content</Label>
                        </div>
                        <Input name="content" type="text" onChange={e => setContent(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                        <Button onClick={() => handleCreatePost()}>Submit</Button>
                    </div>
                </div>
            </CardContent>

            <CardFooter>
                {message}
            </CardFooter>
        </Card>
    );
}

export default CreatePost;
