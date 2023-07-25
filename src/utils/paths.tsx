import { TNavbarLinks, TPoweredBy } from "@/types/general.type";
import icons from "./icons";

const { SiNextdotjs, SiTailwindcss } = icons;

export const navbarLinks: TNavbarLinks[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const poweredBy: TPoweredBy[] = [
  {
    icon: <SiNextdotjs />,
    link: "https://nextjs.org/",
  },
  {
    icon: <SiTailwindcss />,
    link: "https://tailwindcss.com/",
  },
];
