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
        <title>
          My Friend | hongduccodedao
        </title>
        <meta
          name="description"
          content="My Friend | hongduccodedao"
        />
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
