import Loading from "@/components/Loading";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center">
      <Loading />
    </div>
  );
};

export default LoadingPage;
