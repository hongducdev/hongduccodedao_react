import React from "react";

const LoadingSite = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-lite dark:bg-darkbg">
      <div className="w-10 h-10 mx-auto border-4 border-t-4 rounded-full border-primary border-t-transparent animate-spin"></div>
    </div>
  );
};

export default LoadingSite;
