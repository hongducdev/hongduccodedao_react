import { paths } from "./paths";

export interface INavbarList {
  label: string;
  url: string;
}

export const NavbarList: INavbarList[] = [
  {
    label: "Home",
    url: paths.HOME,
  },
  {
    label: "About",
    url: paths.ABOUT,
  },
  {
    label: "Projects",
    url: paths.PROJECTS,
  },
  {
    label: "Contact",
    url: paths.CONTACT,
  },
];
