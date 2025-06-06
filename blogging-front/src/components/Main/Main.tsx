"use client";
import Posts from "./Posts/Posts";
import CreatePost from "./CreatePost/CreatePost";

function Main() {
  return (
    <div>
      <div className="flex">
        <div className="flex-col flex-1">
          <CreatePost />
        </div>
        <div className="flex-col flex-2">
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default Main;
