import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getPostData, getAllPostIds, PostData } from "../../library/posts";

const Post = ({ post }: { post: PostData }) => {
  const router = useRouter();
  if (router.isFallback || !post) return <div>Loading...</div>;
  return (
    <Layout title={post.title}>
      <p className="m-4">ID: {post.id}</p>
      <p className="mb-4 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.content}</p>
      <Link href={"/blog-page"}>
        <a className="flex mt-12 cursor-pointer">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
          </svg>
          <span>Back to blog-page</span>
        </a>
      </Link>
    </Layout>
  );
};

export default Post;

const getStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: true,
  };
};

const getStaticProps = async ({ params }: { params: PostData }) => {
  const post = await getPostData(String(params.id));
  return {
    props: post,
    revalidate: 3,
  };
};

export { getStaticPaths, getStaticProps };
