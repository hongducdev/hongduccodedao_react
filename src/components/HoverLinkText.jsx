import React from "react";

const HoverLinkText = ({ link, children }) => {
  return (
    <a
      href={link}
      className="font-bold relative text-text2 dark:text-icon-color after:absolute after:w-0 after:h-[2px] after:rounded after:bg-primary after:bottom-[-4px] after:left-0 hover:after:duration-300 hover:after:ease-in-out hover:after:w-full">
      {children}
    </a>
  );
};

export default HoverLinkText;
