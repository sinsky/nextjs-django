import { useRouter } from "next/router";
import Cookie from "universal-cookie";
import Layout from "../components/Layout";

const cookie = new Cookie();
const cookieKey = "access_token";
const cookieOptions = { path: "/" };
const { NEXT_PUBLIC_RESTAPI_URL } = process.env;

const MailPage = () => {
  const router = useRouter();

  const logout = () => {
    cookie.remove(cookieKey, cookieOptions);
    router.push("/");
  };

  return (
    <Layout title="Main page">
      <button onClick={logout}>
        <svg
          className="w-6 h-6 mt-10 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          ></path>
        </svg>
      </button>
    </Layout>
  );
};

export default MailPage;
