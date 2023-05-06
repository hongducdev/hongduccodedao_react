import Link from "next/link";
import {
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiFacebook,
  SiInstagram,
  SiGithub,
} from "react-icons/si";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({
  subsets: ["latin-ext"],
});

const powerItems = [
  {
    name: "NextJS",
    path: "https://nextjs.org/",
    icon: <SiNextdotjs />,
  },
  {
    name: "Typescript",
    path: "https://www.typescriptlang.org/",
    icon: <SiTypescript />,
  },
  {
    name: "TailwindCSS",
    path: "https://tailwindcss.com/",
    icon: <SiTailwindcss />,
  },
];

const socialItems = [
  {
    name: "Facebook",
    path: "https://www.facebook.com/hongduccodedao/",
    icon: <SiFacebook />,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/pinkduwc._/",
    icon: <SiInstagram />,
  },
  {
    name: "Github",
    path: "https://github.com/hongduccodedao",
    icon: <SiGithub />,
  },
];

const Footer = () => {
  return (
    <div className="bg-white dark:bg-darkSecondary p-3 lg:p-5 flex items-center justify-between w-full flex-col gap-4 lg:flex-row text-xl">
      <p className="text-text2 dark:text-text3">
        Made with <span className="text-red-500">❤</span> by{" "}
        <Link
          href="/"
          className="hover:text-primary hover:duration-300 hover:ease-in-out"
        >
          {"<hongduccodedao/>"}
        </Link>
      </p>
      <p className="text-text2 dark:text-text3 items-center gap-x-2 hidden lg:inline-flex">
        Powered by{" "}
        {powerItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary hover:duration-300 hover:ease-in-out"
          >
            {item.icon}
          </a>
        ))}
      </p>
      <div className="text-text1 dark:text-text1 inline-flex items-center gap-x-6">
        {socialItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary hover:duration-300 hover:ease-in-out w-8 h-8 rounded-full bg-icon-color flex items-center justify-center bg-opacity-50"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
