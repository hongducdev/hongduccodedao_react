import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;
  const folder = "posts";
  const files = fs.readdirSync(folder);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  // kiểm tra slug có tồn tại trong paths không
  const isExist = paths.find((path) => path.params.slug === slug);

  if (!isExist) {
    return res.status(404).json({ message: "Post not found" });
  } else {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), folder, `${slug}.md`),
      "utf-8"
    );
    const { data, content } = matter(fileContent);

    return res.status(200).json({ data, content });
  }
}
