import { CommentProps } from './Comments/CommentContent/CommentContent'
import Comments from './Comments/Comments';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';

type PostContentProps = {
  id:number;
  title:string;
  content:string;
  comments:CommentProps[]
}

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

function PostContent({
    id,
    title,
    content,
    comments
}:PostContentProps) {
  return (
    <>
      <Drawer>
        <Card className="mt-10 ml-10">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>{content}</CardContent>
            <CardFooter>
              <DrawerTrigger>
                  <Button>
                    See comments
                  </Button>
              </DrawerTrigger>
            </CardFooter>
        </Card>
        <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>All comments</DrawerTitle>
              <DrawerDescription>
                <DrawerClose>
                  <Button variant="outline">Close comments</Button>
                </DrawerClose>
              </DrawerDescription>
            </DrawerHeader>
            <Comments 
              comments={comments}
              id={id}
            />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PostContent;
