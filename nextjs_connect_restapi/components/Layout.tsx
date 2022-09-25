import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Homepage by Next.js" }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-mono text-sm text-white bg-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 w-screen">{children}</main>
      <footer className="flex items-center justify-center w-full h-6 text-sm text-gray-500">&copy;udemy 2022</footer>
    </div>
  );
};

export default Layout;
