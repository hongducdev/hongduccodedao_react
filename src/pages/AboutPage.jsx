import React, { Fragment } from "react";
import HeadingPage from "../components/HeadingPage";
import HoverLinkText from "../components/HoverLinkText";

const AboutPage = () => {
  return (
    <Fragment>
      <div className="bg-lite dark:bg-darkbg h-full pt-[100px]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
          <HeadingPage title="About Me"></HeadingPage>
          <p className="text-text1 dark:text-white text-lg font-medium">
            Hi, my name is hongduccodedao. Full name is Nguyen Hong Duc. I am a
            3rd year student majoring in Software Engineering at Thai Nguyen
            University of Information and Communication Technology (
            <HoverLinkText link="https://ictu.edu.vn/">ICTU</HoverLinkText>). I
            am looking to become a{" "}
            <HoverLinkText link="https://roadmap.sh/frontend">
              Front-End developer
            </HoverLinkText>
            . Far beyond the{" "}
            <HoverLinkText to="https://landing.jobs/blog/fullstack-developer-roadmap/">
              Full-stack developer
            </HoverLinkText>
            .
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutPage;
