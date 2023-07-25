import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ILayoutMainProps {
  children: React.ReactNode;
}

const LayoutMain = ({ children }: ILayoutMainProps) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="bg-gradient-to-br from-ctp-base to-ctp-crust">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutMain;
