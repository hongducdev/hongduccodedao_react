import Footer from "@/components/common/Footer";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Home | hongduccodedao</title>
        <meta name="title" content="Home | hongduccodedao"></meta>
        <meta
          name="keywords"
          content="Nguyễn Hồng Đức (hongduccodedao), hongducodedao, Nguyễn Hồng Đức"
        ></meta>
        <meta name="author" content="Nguyễn Hồng Đức (hongduccodedao)"></meta>
        <meta name="geo.region" content="VN"></meta>
        <meta property="og:locale" content="vi_VN"></meta>
        <meta name="theme-color" content="#1DC071"></meta>
        <meta
          name="description"
          content="Hi, my name is hongduccodedao. Full name is Nguyen Hong Duc. I am a 3rd year student majoring in Software Engineering at Thai Nguyen University of Information and Communication Technology (ICTU). I am looking to become a Front-End developer. Owner and Dev PinkBot._(Discord bot). Far beyond the Full-stack developer."
        />
        <meta
          name="google-site-verification"
          content="wO7_mXt_nA0dY_Xw1LH7l2YExnqGbSAx0A-mfo72lVs"
        />
        <meta
          name="facebook-domain-verification"
          content="mkiddxmoh9v84vek04vz472wd41n2f"
        />
        <meta name="msvalidate.01" content="719E848983AA37F4AA3A04B3616E1F9F" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hongduccodedao.site/" />
        <meta property="og:title" content="Home | hongduccodedao" />
        <meta
          property="og:description"
          content="Hi, my name is hongduccodedao. Full name is Nguyen Hong Duc. I am a 3rd year student majoring in Software Engineering at Thai Nguyen University of Information and Communication Technology (ICTU). I am looking to become a Front-End developer. Owner and Dev PinkBot._(Discord bot). Far beyond the Full-stack developer."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/73995275?v=4"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hongduccodedao.site/" />
        <meta property="twitter:title" content="Home | hongduccodedao" />
        <meta
          property="twitter:description"
          content="Hi, my name is hongduccodedao. Full name is Nguyen Hong Duc. I am a 3rd year student majoring in Software Engineering at Thai Nguyen University of Information and Communication Technology (ICTU). I am looking to become a Front-End developer. Owner and Dev PinkBot._(Discord bot). Far beyond the Full-stack developer."
        />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/73995275?v=4"
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
