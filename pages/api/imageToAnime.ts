import { NextApiRequest, NextApiResponse } from "next";

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

  const body = new URLSearchParams();
  body.set('image', base64String);

  try {
    const response = await fetch(api, {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Connect": "keep-alive",
        "Accept": "*/*",
        "Keep-Alive": "timeout=30, max=1000",
      },
      body: body.toString(),
      method: "POST",
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}
