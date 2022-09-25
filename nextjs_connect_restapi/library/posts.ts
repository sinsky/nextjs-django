const { NEXT_PUBLIC_RESTAPI_URL } = process.env;

export type PostData = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

const getAllPostsData = () => {
  const sortData = fetch(`${NEXT_PUBLIC_RESTAPI_URL}/api/list-post/`)
    .then((res) => res.json())
    .then((data: PostData[]) =>
      data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    );
  return sortData;
};

const getAllPostIds = async () => {
  const postData: PostData[] = await fetch(`${NEXT_PUBLIC_RESTAPI_URL}/api/list-post/`).then((res) => res.json());
  return postData.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
};

const getPostData = async (id: string) => {
  const post: PostData[] = await fetch(`${NEXT_PUBLIC_RESTAPI_URL}/api/detail-post/${id}/`).then((res) => res.json());
  return { post };
};

export { getAllPostsData, getAllPostIds, getPostData };
