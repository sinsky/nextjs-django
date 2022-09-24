import { PostsProps } from "../lib/posts";

const Post = ({ post }: { post: PostsProps }) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">{post.title}</span>
    </div>
  );
};

export default Post;
