import { useEffect, useState } from "react";
import PostContent from "./PostContent/PostContent";
import { getAllPosts, PostProps } from "@/services/blog";
import { Skeleton } from '@/components/ui/skeleton';
import { useBlog } from "@/context/useBlog";

function Posts() {
    const { hasPostUpdate, setHasPostUpdate } = useBlog();
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState<PostProps[]>([])

    useEffect(() => {
        getPosts()
    }, [hasPostUpdate]);

    const getPosts = async () => {
        setLoading(true);
        
        try { 
            const allPosts:PostProps[] = await getAllPosts()
            setPosts(allPosts);
            setHasPostUpdate(false);
        } catch(e) {
            setPosts([])
        }
        
        setLoading(false);
    }

    return loading ? (
            <div className="flex flex-col space-y-3 m-10">
                <Skeleton className="h-[125px] w-[100%] rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-8 w-[100%]" />
                    <Skeleton className="h-8 w-[100%]" />
                </div>
            </div>
        ) : (posts.map(({ 
            id, 
            title, 
            content, 
            comments
        }, index:number) => (
            <PostContent 
                key={index}
                id={id}
                title={title}
                content={content}
                comments={comments}
            />
        ))
    );
}

export default Posts;
