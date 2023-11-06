import HelloWorld from "@/components/Home/HelloWorld";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
      <HelloWorld />
    </div>
  );
};

export default HomePage;
