// pages/api/imageToAnime.ts

import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const api = "https://api.taoanhdep.com/public/anime.php";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(400).json({ error: "Only POST requests are allowed" });
    return;
  }

  const { base64String } = req.body;

  try {
    const response = await fetch("https://api.taoanhdep.com/public/anime.php", {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      referrerPolicy: "no-referrer",
      body: "image=" + encodeURIComponent(`${base64String}`),
      method: "POST",
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
}
