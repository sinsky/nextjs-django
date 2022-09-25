import Link from "next/link";
import { PostData } from "../library/posts";

const PostView = ({ post }: { post: PostData }) => {
  return (
    <li>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}>
        <a className="text-white border-b border-gray-500 cursor-pointer hover:bg-gray-600">{post.title}</a>
      </Link>
    </li>
  );
};

export default PostView;
