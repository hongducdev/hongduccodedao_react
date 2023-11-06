import Image from "next/image";
import React from "react";
import Link from "next/link";
interface TeamItemProps {
  name: string;
  img: string;
  github: string;
}

const TeamItem: React.FC<TeamItemProps> = ({ name, img, github }) => {
  return (
    <div className="w-full bg-ctp-surface0 p-3 rounded-xl flex flex-col items-center justify-center">
      <Image
        src={img}
        alt={name}
        width={200}
        height={200}
        className="rounded-full"
      />
      <div className="relative inline-block mt-4">
        <p className="text-xl z-20 relative font-medium">{name}</p>

        <div className="absolute w-0 h-1 bg-ctp-green bottom-1 left-0 z-[1] group-hover:w-[80%] group-hover:transition-all group-hover:duration-500"></div>
      </div>
      <Link
        href={github}
        className="flex items-center justify-center gap-4 bg-ctp-green w-full mt-4 text-ctp-base p-2 rounded-lg"
      >
        <span className="text-base lg:text-xl">Go to Github</span>
      </Link>
    </div>
  );
};

export default TeamItem;
