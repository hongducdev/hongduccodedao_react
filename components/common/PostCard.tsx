import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Post {
  slug: string;
  title: string;
  image: string;
  subtitle: string;
}

const PostCard = (data: Post) => {
  return (
    <div className="">
      <Link href={`/blogs/${data.slug}`}>
        <div className="bg-strock dark:bg-darkStroke p-3 rounded-xl hover:scale-[1.03] hover:duration-300 hover:ease-in-out group">
          <Image
            src={data.image}
            alt="image_post"
            width={500}
            height={500}
            className="rounded-xl group-hover:opacity-80 hover:duration-300 hover:ease-in-out"
          />
          <h1 className="text-2xl font-bold dark:text-whiteSoft mt-4 group-hover:text-primary hover:duration-300 hover:ease-in-out">
            {data.title}
          </h1>
          <p className="dark:text-text3 text-sm mt-3">{data.subtitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
