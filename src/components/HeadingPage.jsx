import React from "react";

const HeadingPage = ({ title = "", children }) => {
  return (
    <div className="">
      <h2 className="text-text1 dark:text-white text-3xl font-semibold">
        {title}
      </h2>
      <div className="w-full h-[3px] bg-darkStroke rounded-full my-2">
      </div>
    </div>
  );
};

export default HeadingPage;
