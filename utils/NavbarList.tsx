import { paths } from "./paths";

export interface INavbarList {
  label: string;
  url: string;
}

export const NavbarList: INavbarList[] = [
  {
    label: "About",
    url: paths.ABOUT,
  },
  {
    label: "Projects",
    url: paths.PROJECTS,
  },
  {
    label: "Team",
    url: paths.TEAM,
  },
  {
    label: "Contact",
    url: paths.CONTACT,
  },
];
