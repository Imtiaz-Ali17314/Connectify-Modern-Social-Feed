import { useContext } from "react";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import LoaderSpinner from "./LoaderSpinner";
import { PostList as PostListContext } from "../store/post-list";

const PostList = () => {
  const { postList, isLoading } = useContext(PostListContext);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <div className="post-list container py-4">
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
