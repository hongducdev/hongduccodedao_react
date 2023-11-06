export interface IHobby {
  title: string;
  description: string;
  tags: ITag[];
}

export interface ITag {
  name: string;
}

export const hobbiesArr: IHobby[] = [
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
        name: "KTT Darling",
      },
      {
        name: "Tester 68",
      },
      {
        name: "MZ Z1",
      },
      {
        name: "Keycap 9009 Retro",
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
