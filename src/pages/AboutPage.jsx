import React, { Fragment } from "react";
import HeadingPage from "../components/HeadingPage";
import HobbiesItem from "../components/HobbiesItem";
import HoverLinkText from "../components/HoverLinkText";
import MilestoneItem from "../components/MilestoneItem";
import TagItem from "../components/TagItem";

const hobbiesArr = [
  {
    title: "Game",
    description:
      "I'm not a fan of FPS games. I only play Teamfight Tactics (TFT) in my free time. My ingame is HDuc#05102.",
    tags: [
      {
        name: "TFT",
      },
    ],
  },
  {
    title: "Mechanical keyboard",
    description:
      "When I come into contact with a lot of code, I feel that the feeling that the laptop keyboard gives is not enough to satisfy me. So I got to know the mechanical keyboard. Especially the custom mechanical keyboard.",
    tags: [
      {
        name: "FL-Esports MK870",
      },
      {
        name: "KTT Kang White",
      },
      {
        name: "Keycap FSA Metal Heart",
      },
    ],
  },
  {
    title: "Music",
    description:
      "I listen to music in my free time, cycling and coding. The genre of music that I often listen to is Lofi.",
    tags: [
      {
        name: "Lofi",
      },
      {
        name: "Sơn Tùng MTP",
      },
      {
        name: "Low G",
      },
      {
        name: "Đen",
      },
      {
        name: "Charlie Puth",
      },
    ],
  },
];

const AboutPage = () => {
  return (
    <Fragment>
      <div className="bg-lite dark:bg-darkbg h-full lg:py-[100px] pt-[100px] pb-[150px]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
          <HeadingPage title="About Me"></HeadingPage>
          <p className="text-text1 dark:text-text3 text-lg font-medium">
            Hi, my name is hongduccodedao. Full name is Nguyen Hong Duc. I am a
            3rd year student majoring in Software Engineering at Thai Nguyen
            University of Information and Communication Technology (
            <HoverLinkText link="https://ictu.edu.vn/">ICTU</HoverLinkText>). I
            am looking to become a{" "}
            <HoverLinkText link="https://roadmap.sh/frontend">
              Front-End developer
            </HoverLinkText>
            . Owner and Dev PinkBot._(Discord bot). Far beyond the{" "}
            <HoverLinkText to="https://landing.jobs/blog/fullstack-developer-roadmap/">
              Full-stack developer
            </HoverLinkText>
            .
          </p>
          <div className="mt-10"></div>
          <HeadingPage title="Milestones" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <MilestoneItem year="2020">
              Become a student at ICTU and start learning programming. Be
              exposed to C and C++ languages.
            </MilestoneItem>
            <MilestoneItem year="2021">
              Learn HTML, CSS, JavaScript. Started using Discord and developed a
              Discord bot called PinkBot._.
            </MilestoneItem>
            <MilestoneItem year="2022">
              Learn TailwindCSS, ReactJS, ExpressJS, MongoDB. Complete the{" "}
              <HoverLinkText link="https://github.com/Let-s-Food">
                Let's Food
              </HoverLinkText>{" "}
              project with{" "}
              <HoverLinkText link="https://github.com/dd4tj">
                DDatj
              </HoverLinkText>{" "}
              and{" "}
              <HoverLinkText link="https://github.com/quanghaik2">
                quanghaik2
              </HoverLinkText>
              .
            </MilestoneItem>
          </div>
          <div className="mt-10"></div>
          <HeadingPage title="Hobbies" />
          <div className="flex flex-col gap-5">
            {hobbiesArr.map((hobby, index) => (
              <HobbiesItem
                key={index}
                title={hobby.title}
                description={hobby.description}>
                {hobby.tags.map((tag, index) => (
                  <TagItem key={index} >
                    {tag.name}
                  </TagItem>
                ))}
              </HobbiesItem>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutPage;
