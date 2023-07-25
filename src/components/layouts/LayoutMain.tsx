import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ILayoutMainProps {
  children: React.ReactNode;
}

const LayoutMain = ({ children }: ILayoutMainProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-br from-ctp-base to-ctp-crust h-full grow flex items-center justify-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LayoutMain;
