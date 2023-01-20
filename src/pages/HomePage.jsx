import React from "react";
import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  Qualification,
  Services,
  Skills,
} from "../components";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
