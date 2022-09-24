import React from "react";
import Layout from "../components/Layout";
import { PostsProps, getAllPostsData } from "../lib/posts";
import Post from "../components/PostView";

const Blog = ({ posts }: { posts: PostsProps[] }) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">{posts && posts.map((post) => <Post key={post.id} post={post} />)}</ul>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
};
