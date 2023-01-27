import React from "react";

const LoadingSite = () => {
  return (
    <div className="bg-lite dark:bg-darkbg h-screen w-screen">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <img srcSet="/connecting.png 2x" alt="connecting" />
        <h2 className="text-3xl font-bold text-text1 dark:text-white">
          Connecting...
        </h2>

        <p className="text-text1 dark:text-white text-lg font-medium">
          Please wait a moment
        </p>
      </div>
    </div>
  );
};

export default LoadingSite;
