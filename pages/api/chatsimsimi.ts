import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { text } = req.body;
  const response = await fetch("https://api.simsimi.vn/v1/simtalk", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
      lc: "vn",
    }),
  });

  const data = await response.json();

  res.status(200).json({ data });
}
