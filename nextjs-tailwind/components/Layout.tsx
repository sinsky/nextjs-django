import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Homepage by Next.js" }: LayoutProps) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Home</a>
              </Link>
              <Link href="/blog-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Blog</a>
              </Link>
              <Link href="/contact-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Contact</a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">{children}</main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a className="flex items-center" target="_blank">
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" width={64} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
