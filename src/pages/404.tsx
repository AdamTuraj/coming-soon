import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen w-screen justify-center items-center flex">
      <div className="flex text-center flex-col gap-3">
        <h1 className="text-6xl font-bold text-green-500">404</h1>
        <h2 className="text-xl font-bold">
          There is nothing here. But there is at the home page!
        </h2>
        <Link href="/" passHref>
          <a className="py-3 border border-green-500 rounded-md text-xl hover:bg-green-500">
            Go Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
