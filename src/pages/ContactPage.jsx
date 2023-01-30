import React, { Fragment } from "react";
import HeadingPage from "../components/HeadingPage";
import SocialItem from "../components/SocialItem";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";

const socialArr = [
  {
    icon: <FaGithub />,
    text: "Github",
    link: "https://github.com/hongduccodedao",
  },
  {
    icon: <FaFacebook />,
    text: "Facebook",
    link: "https://www.facebook.com/hongduccodedao",
  },
  {
    icon: <FaInstagram />,
    text: "Instagram",
    link: "https://www.instagram.com/pinkduwc._/",
  },
  {
    icon: <FaTwitter />,
    text: "Twitter",
    link: "https://twitter.com/hongduccodedao",
  },
  {
    icon: <FaDiscord />,
    text: "Discord",
    link: "https://discord.com/users/769244837030526976",
  },
];

const ContactPage = () => {
  return (
    <Fragment>
      <div className="bg-lite dark:bg-darkbg min-h-screen lg:py-[100px] pt-[100px] pb-[150px]">
        <div className="max-w-[800px] mx-auto px-5 lg:px-0">
          <HeadingPage title="My social network"></HeadingPage>
          <div className="flex gap-4 items-center justify-center flex-wrap my-5">
            {socialArr.map((item, index) => (
              <SocialItem
                icon={item.icon}
                text={item.text}
                link={item.link}
                key={index}
              />
            ))}
          </div>
          <HeadingPage title="Contact me"></HeadingPage>
          <form action="" className="">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-lg font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-lite dark:bg-darkbg border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-lg font-semibold"> 
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-lite dark:bg-darkbg border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-lg font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="bg-lite dark:bg-darkbg border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactPage;
