// lấy các file trong folder posts
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import matter from "gray-matter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const folder = "posts";
  const files = fs.readdirSync(folder);
  const paths = files.map((filename) => filename.replace(".md", ""));
  const post = files.map((filename) => {
    const fileContent = fs.readFileSync(
      `${process.cwd()}/${folder}/${filename}`,
      "utf-8"
    );
    const { data, content } = matter(fileContent);
    return { data, content };
  });

  res.status(200).json({ post });
}
