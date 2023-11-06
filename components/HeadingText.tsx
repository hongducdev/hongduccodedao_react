import React from "react";

interface HeadingTextProps {
  text: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({ text }) => {
  return (
    <h3 className="text-3xl font-semibold relative after:absolute after:w-full after:h-[2px] after:bg-ctp-surface1 after:-bottom-1 after:left-0">
      {text}
    </h3>
  );
};

export default HeadingText;
