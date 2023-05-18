import Footer from "@/components/common/Footer";
import HeadingPage from "@/components/common/HeadingPage";
import TeamItem from "@/components/common/TeamItem";
import Head from "next/head";


const TeamArr = [
  {
    name: "DDatj",
    tag: "dd4tj#8572",
    img: "https://avatars.githubusercontent.com/u/96217718?v=4",
    github: "https://github.com/dd4tj",
  },
  {
    name: "Chu Quang Hải",
    tag: "Chu Hải#4415",
    img: "https://avatars.githubusercontent.com/u/76799685?v=4",
    github: "https://github.com/quanghaik2",
  },
  {
    name: "Elysia",
    tag: "Elysia#1782",
    img: "https://avatars.githubusercontent.com/u/71698422?v=4",
    github: "https://github.com/aiko-chan-ai",
  },
  {
    name: "Duy Nè",
    tag: "Duy Nè#8975",
    img: "https://avatars.githubusercontent.com/u/75739952?v=4",
    github: "https://github.com/duyneuser-dev",
  },
  {
    name: "Peter Tuấn Anh",
    tag: "Peter Tuấn Anh#0001",
    img: "https://avatars.githubusercontent.com/u/96538547?v=4",
    github: "https://github.com/petertuananhdev",
  },
  {
    name: "Gill",
    tag: "GillCoder#7005",
    img: "https://avatars.githubusercontent.com/u/89916615?v=4",
    github: "https://github.com/GillHoang",
  },
];

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Team | hongduccodedao</title>
        <meta name="title" content="Team | hongduccodedao"></meta>
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
          content="These are the friends I made through my studies. There are people who are college friends, there are people who are known through the social network Discord. They contributed quite a lot in my learning process and building projects."
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
        <meta property="og:title" content="Team | hongduccodedao" />
        <meta
          property="og:description"
          content="These are the friends I made through my studies. There are people who are college friends, there are people who are known through the social network Discord. They contributed quite a lot in my learning process and building projects."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/73995275?v=4"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hongduccodedao.site/" />
        <meta property="twitter:title" content="Team | hongduccodedao" />
        <meta
          property="twitter:description"
          content="These are the friends I made through my studies. There are people who are college friends, there are people who are known through the social network Discord. They contributed quite a lot in my learning process and building projects."
        />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/73995275?v=4"
        />
        <meta name="description" content="My Friend | hongduccodedao" />
      </Head>
      <main>
        <div className="bg-lite dark:bg-darkbg h-full lg:py-[100px] py-[100px]">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
            <HeadingPage title="My Friend"></HeadingPage>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {TeamArr.map((item, index) => (
                <div key={index}>
                  <TeamItem info={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default TeamPage;
