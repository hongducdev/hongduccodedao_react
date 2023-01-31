import React, { Fragment } from "react";

const HomePage = () => {

  // change title
  document.title = "hongduccodedao";

  return (
    <Fragment>
      <div className="bg-lite dark:bg-darkbg h-screen">
        <div className="flex items-center justify-center h-full w-full text-center">
          <h1 className="text-text1 dark:text-grayf3 font-bold text-8xl relative after:absolute after:w-[10%] after:h-2 after:bg-text1 after:dark:bg-grayf3 after:bottom-0 after:animate-pulse2 inline-block">
            Hello World
          </h1>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
