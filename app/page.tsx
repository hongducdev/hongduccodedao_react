import HelloWorld from "@/components/Home/HelloWorld";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home | hongduccodedao",
  description:
    "Hi, my name is hongduccodedao. Full name is Nguyen Hong Duc. I am a 4th year student majoring in Software Engineering at Thai Nguyen University of Information and Communication Technology (ICTU). I am looking to become a Front-End developer.",
};

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
      <HelloWorld />
    </div>
  );
};

export default HomePage;
