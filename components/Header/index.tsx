import React from "react";
import Logo from "../Logo";
import Social from "./Social";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-ctp-mantle px-4 py-6 flex items-center justify-between">
      <Logo />
      <Navbar />
      <Social />
    </div>
  );
};

export default Header;
