/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import HeadingPage from "@/components/common/HeadingPage";
import PostCard from "@/components/common/PostCard";
import Head from "next/head";
import Footer from "@/components/common/Footer";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { InferGetStaticPropsType } from "next";

interface PostPreview {
  title: string;
  image: string;
  slug: string;
  subtitle: string;
}

const Blogs = ({
  postPreviews,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Blog | hongduccodedao</title>
        <meta name="title" content="Blog | hongduccodedao"></meta>
        <meta
          name="keywords"
          content="Nguyễn Hồng Đức (hongduccodedao), hongducodedao, Nguyễn Hồng Đức"
        ></meta>
        <meta name="author" content="Nguyễn Hồng Đức (hongduccodedao)"></meta>
        <meta name="geo.region" content="VN"></meta>
        <meta property="og:locale" content="vi_VN"></meta>
        <meta name="theme-color" content="#1DC071"></meta>
        <meta
          name="description"
          content="This is a place where I can share some experiences when I learn programming, especially Front-End programming. Or my experiences with a technology or maybe an autobiography about myself."
        />
        <meta
          name="google-site-verification"
          content="wO7_mXt_nA0dY_Xw1LH7l2YExnqGbSAx0A-mfo72lVs"
        />
        <meta
          name="facebook-domain-verification"
          content="mkiddxmoh9v84vek04vz472wd41n2f"
        />
        <meta name="msvalidate.01" content="719E848983AA37F4AA3A04B3616E1F9F" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hongduccodedao.site/" />
        <meta property="og:title" content="Blog | hongduccodedao" />
        <meta
          property="og:description"
          content="This is a place where I can share some experiences when I learn programming, especially Front-End programming. Or my experiences with a technology or maybe an autobiography about myself."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/73995275?v=4"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hongduccodedao.site/" />
        <meta property="twitter:title" content="Blog | hongduccodedao" />
        <meta
          property="twitter:description"
          content="This is a place where I can share some experiences when I learn programming, especially Front-End programming. Or my experiences with a technology or maybe an autobiography about myself."
        />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/73995275?v=4"
        />
      </Head>
      <main>
        <div className="bg-lite dark:bg-darkbg h-screen lg:py-[100px] py-[100px]">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
            <HeadingPage title="My Blogs"></HeadingPage>
            <div className="mt-4">
              {
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1">
                  {postPreviews.map((post, index) => (
                    <PostCard key={index} {...post} />
                  ))}
                </div>
              }
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const postFilePaths = fs
    .readdirSync("_posts")
    .filter(
      (postFilePath) => path.extname(postFilePath).toLowerCase() === ".mdx"
    );

  const postPreviews: PostPreview[] = [];

  for (const postFilePath of postFilePaths) {
    const postFile = await fs.promises.readFile(
      `_posts/${postFilePath}`,
      "utf8"
    );
    const serializedPost = await serialize(postFile, {
      parseFrontmatter: true,
    });

    postPreviews.push({
      ...serializedPost.frontmatter,
      slug: postFilePath.replace(".mdx", ""),
    } as PostPreview);
  }

  return {
    props: {
      postPreviews: postPreviews,
    },
    revalidate: 60,
  };
}

export default Blogs;
