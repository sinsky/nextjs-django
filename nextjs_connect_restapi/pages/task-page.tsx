import Link from "next/link";
import Layout from "../components/Layout";

const TaskPage = () => {
  return (
    <Layout title="task page">
      <Link href="/main-page">
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
          <span>Back to main page</span>
        </a>
      </Link>
    </Layout>
  );
};

export default TaskPage;
