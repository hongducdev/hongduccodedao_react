import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";

interface ITeamItem {
  info: {
    name: string;
    tag: string;
    img: string;
    github: string;
  };
}

const TeamItem = ({ info }: ITeamItem) => {
  return (
    <div className="bg-strock dark:bg-darkStroke p-4 rounded-lg flex items-center lg:max-w-[300px] w-full">
      <div className="flex flex-col items-center gap-3 w-full">
        <Image
          src={info?.img}
          alt={info?.name}
          className="rounded-full object-cover"
          width={150}
          height={150}
        />
        <div className="text-center">
          <h2 className="font-bold text-4xl md:text-3xl text-text2 dark:text-text4">
            {info?.name}
          </h2>
          <p className="text-text1 dark:text-text3 text-xl md:text-lg font-medium">
            {info?.tag}
          </p>
        </div>
        <a
          href={info?.github}
          className="bg-primary w-full flex items-center p-2 text-center justify-center gap-3 text-lg rounded-lg text-white"
        >
          <FaGithub /> Follow
        </a>
      </div>
    </div>
  );
};

export default TeamItem;
