import HeadingText from "@/components/HeadingText";
import TeamItem from "@/components/Team/TeamItem";
import { TeamArr } from "@/utils/Team";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Team | hongduccodedao",
  description:
    "These are the friends I made through my studies. There are people who are college friends, there are people who are known through the social network Discord. They contributed quite a lot in my learning process and building projects.",
};

const TeamPage = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto mt-5 mb-20 md:my-10 flex flex-col gap-5 px-2">
      <HeadingText text="My team" />
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {TeamArr.map((item) => (
          <TeamItem
            key={item.name}
            name={item.name}
            img={item.img}
            github={item.github}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
