import HeadingText from "@/components/HeadingText";
import Hobby from "@/components/Hobby";
import HoverCardCustom from "@/components/HoverCardCustom";
import Milestone from "@/components/Milestone";
import { hobbiesArr } from "@/utils/Hobbies";
import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto my-10 flex flex-col gap-5 min-h-screen h-full">
      {/* about me */}
      <section>
        <HeadingText text="About me" />
        <p className="mt-4 text-xl text-ctp-overlay2">
          Hi, my name is hongduccodedao. Full name is Nguyen Hong Duc. I am a
          4th year student majoring in Software Engineering at Thai Nguyen
          University of Information and Communication Technology (ICTU). I am
          looking to become a Front-End developer.
        </p>
      </section>

      {/* milestones */}
      <section>
        <HeadingText text="Milestones" />
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <Milestone year="2020" />
            <p className="text-xl text-ctp-overlay2">
              Become a student at ICTU and start learning programming. Be
              exposed to C and C++ languages.
            </p>
          </div>
          <div>
            <Milestone year="2021" />
            <p className="text-xl text-ctp-overlay2">
              Learn HTML, CSS, JavaScript. Started using Discord and developed a
              Discord bot called PinkBot._.
            </p>
          </div>
          <div>
            <Milestone year="2022" />
            <p className="text-xl text-ctp-overlay2">
              Learn TailwindCSS, ReactJS, ExpressJS, MongoDB. Complete
              <HoverCardCustom
                name="Let's Food"
                description="Online fast food ordering website."
                avatarLink="https://avatars.githubusercontent.com/u/117073752?s=200&v=4"
                avatarFallback="LF"
                joinedDate="September 2022"
              />
              with
              <HoverCardCustom
                name="d4Jt (dat)"
                description="voo tree. Back-end developer."
                avatarLink="https://avatars.githubusercontent.com/u/96217718?v=4"
                avatarFallback="d4Jt"
                joinedDate="September 2022"
              />
              and
              <HoverCardCustom
                name="quanghaik2 (Chu Quang Hải)"
                description="color #8692f7. Back-end developer."
                avatarLink="https://avatars.githubusercontent.com/u/76799685?v=4"
                avatarFallback="QH"
                joinedDate="September 2022"
              />
            </p>
          </div>
          <div>
            <Milestone year="2023" />
            <p className="text-xl text-ctp-overlay2">
              Learn Mobile app (Java - Android, ReactNative), NextJS. Complete
              the
              <HoverCardCustom
                name="Ebook.co"
                description="Online book store website."
                avatarLink="https://avatars.githubusercontent.com/u/76799685?v=4"
                avatarFallback="EB"
                joinedDate="February 2023"
              />
              project and
              <HoverCardCustom
                name="Learn Code App"
                description="Application for learning programming."
                avatarLink="https://avatars.githubusercontent.com/u/76799685?v=4"
                avatarFallback="LF"
                joinedDate="February 2023"
              />
              with
              <HoverCardCustom
                name="d4Jt (dat)"
                description="voo tree. Back-end developer."
                avatarLink="https://avatars.githubusercontent.com/u/96217718?v=4"
                avatarFallback="d4Jt"
                joinedDate="September 2022"
              />
              and
              <HoverCardCustom
                name="quanghaik2 (Chu Quang Hải)"
                description="color #8692f7. Back-end developer."
                avatarLink="https://avatars.githubusercontent.com/u/76799685?v=4"
                avatarFallback="QH"
                joinedDate="September 2022"
              />
            </p>
          </div>
        </div>
      </section>

      {/* hobbies */}
      <section>
        <HeadingText text="Hobbies" />
        <div className="flex flex-col gap-4 my-4">
          {hobbiesArr.map((hobby) => (
            <Hobby
              key={hobby.title}
              title={hobby.title}
              description={hobby.description}
              tags={hobby.tags}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
