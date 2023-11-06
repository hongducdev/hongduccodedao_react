import { Facebook, Github } from "lucide-react";
import { ReactNode } from "react";

export interface ISocialList {
  icon: ReactNode;
  url: string;
  label: string;
  username: string;
}

export const SocialList: ISocialList[] = [
  {
    icon: <Github />,
    url: "https://github.com/hongduccodedao",
    label: "Github",
    username: "hongduccodedao",
  },
  {
    icon: <Facebook />,
    url: "https://www.facebook.com/hongduccodedao",
    label: "Facebook",
    username: "Nguyễn Hồng Đức",
  },
];
