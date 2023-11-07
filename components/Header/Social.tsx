import { SocialList } from "@/utils/SocialList";
import React from "react";

const Social = () => {
  return (
    <div className="flex items-center gap-5">
      {SocialList.map((item) => (
        <a
          href={item.url}
          className="hover:text-ctp-green"
          key={item.url}
          title={`${item.label}: ${item.username}`}
          target="_blank"
          rel="noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
