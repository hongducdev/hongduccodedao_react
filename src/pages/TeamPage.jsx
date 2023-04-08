import React, { Fragment } from "react";
import HeadingPage from "../components/HeadingPage";
import TeamItem from "../components/TeamItem";
import { motion } from "framer-motion";

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
    name: "hocsinhgioitoan",
    tag: "Zuucifer#7005",
    img: "https://avatars.githubusercontent.com/u/89916615?v=4",
    github: "https://github.com/hocsinhgioitoan",
  },
];

const TeamPage = () => {

  // change title
  document.title = "My Friend | hongduccodedao";

  return (
    <Fragment>
      <div className="bg-lite dark:bg-darkbg min-h-screen lg:py-[100px] pt-[100px] pb-[150px]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
          <HeadingPage title="My Friend"></HeadingPage>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TeamArr.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <TeamItem info={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TeamPage;
