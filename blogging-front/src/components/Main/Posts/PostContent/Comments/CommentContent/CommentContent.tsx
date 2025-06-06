export type CommentProps = {
  content:string;
}

import {
  Card,
  CardContent,
} from "@/components/ui/card"

function CommentContent({ content }:CommentProps) {
  return (
    <Card className="m-10 p-10">
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
}

export default CommentContent;
