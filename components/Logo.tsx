import { paths } from "@/utils/paths";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="relative group inline-block">
      <Link href={paths.HOME}>
        <p className="text-2xl z-20 font-medium relative">{"<hongduccodedao/>"}</p>
      </Link>

      <div className="absolute w-0 h-1 bg-ctp-green bottom-1 left-0 z-[1] group-hover:w-[80%] group-hover:transition-all group-hover:duration-500"></div>
    </div>
  );
};

export default Logo;
