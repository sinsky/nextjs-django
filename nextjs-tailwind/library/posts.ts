export type PostsProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const apiURL = "https://jsonplaceholder.typicode.com/posts";

const getAllPostsData = async () => {
  const res = await fetch(apiURL);
  const posts: PostsProps[] = await res.json();
  return posts;
};

const getAllPostsIds = async () => {
  const res = await fetch(apiURL);
  const posts: PostsProps[] = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
};

const getPostData = async (id: string) => {
  const res = await fetch(`${apiURL}/${id}/`);
  const post: PostsProps = await res.json();
  return { post };
};

export { getAllPostsData, getAllPostsIds, getPostData };
