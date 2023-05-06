import Footer from "@/components/common/Footer";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Home | hongduccodedao</title>
        <meta
          name="description"
          content="Hi, my name is hongduccodedao. Full name is Nguyen Hong Duc. I am a 3rd year student majoring in Software Engineering at Thai Nguyen University of Information and Communication Technology (ICTU). I am looking to become a Front-End developer. Owner and Dev PinkBot._(Discord bot). Far beyond the Full-stack developer."
        />
      </Head>
      <main>
        <div className="bg-lite dark:bg-darkbg h-screen">
          <div className="flex items-center justify-center h-full w-full text-center">
            <div>
              <h1 className="text-text1 dark:text-grayf3 font-bold text-8xl relative after:absolute after:w-[10%] after:h-2 after:bg-text1 after:dark:bg-grayf3 after:bottom-0 after:animate-pulse2 inline-block">
                Hello World
              </h1>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default index;
