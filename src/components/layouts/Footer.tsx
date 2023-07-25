import { poweredBy } from "@/utils/paths";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-ctp-surface0 p-5 flex items-center justify-between">
      <span className="">
        Made with <span className="text-ctp-red">❤</span> by{" "}
        {`>_hongduccodedao`}
      </span>
      <span className="flex items-center gap-2">
        Powered by{" "}
        {poweredBy.map((item) => (
          <a href={item.link} key={item.link} className="text-lg">
            {item.icon}
          </a>
        ))}
      </span>
    </div>
  );
};

export default Footer;
