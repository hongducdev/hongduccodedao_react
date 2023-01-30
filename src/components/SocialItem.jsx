import React from "react";

const SocialItem = ({ icon, text, link }) => {
  return (
    <a
      href={link}
      className="dark:text-strock text-8xl inline-flex flex-col items-center gap-3 border dark:border-strock p-2 rounded-lg text-darkStroke border-darkStroke hover:border-primary hover:duration-300 hover:ease-in-out">
      {icon}
      <span className="text-xl font-semibold">{text}</span>
    </a>
  );
};

export default SocialItem;
