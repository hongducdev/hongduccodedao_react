import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {

  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta name="description" content="Page not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-lite dark:bg-darkbg h-screen w-screen">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Image 
              src="/error404.png"
              alt="404"
              width={500}
              height={500}
            />
            <h2 className="text-3xl font-bold text-text1 dark:text-white">
              Page not found
            </h2>

            <p className="text-text1 dark:text-white text-lg font-medium">
              The page you are looking for might have been removed, had its name
              changed or is temporarily unavailable.
            </p>

            <Link href="/">
              <p className="bg-primary bg-opacity-70 hover:bg-opacity-100 hover:duration-300 hover:ease-in-out text-white font-bold py-2 px-4 rounded mt-5">
                Back to home
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
