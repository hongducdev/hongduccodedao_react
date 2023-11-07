import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nguyễn Hồng Đức (hongduccodedao)",
    short_name: "hongduccodedao",
    description:
      "Hi, my name is hongduccodedao. Full name is Nguyen Hong Duc. I am a 4th year student majoring in Software Engineering at Thai Nguyen University of Information and Communication Technology (ICTU). I am looking to become a Front-End developer.",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    theme_color: "#1e1e2e",
    background_color: "#a6e3a1",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    related_applications: [
      {
        platform: "webapp",
        url: "https://hongduccodedao.vercel.app/manifest.json",
      },
    ],
    scope: "/",
  };
}
