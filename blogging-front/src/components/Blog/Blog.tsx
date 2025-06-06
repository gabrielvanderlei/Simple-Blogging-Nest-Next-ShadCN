import Main from "../Main/Main";
import Header from "../Header/Header";

import { BlogProvider } from "@/context/useBlog";

function Blog() {
  return (
    <BlogProvider>
      <div className="m-10">
        <Header />
        <Main />
      </div>
    </BlogProvider>
  );
}

export default Blog;
