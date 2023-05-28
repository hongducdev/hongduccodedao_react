import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import fs from "fs";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import Head from "next/head";
import HeadingPage from "@/components/common/HeadingPage";
import Footer from "@/components/common/Footer";

const Post = ({ source }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>

      </Head>
      <main>
        <div>
          <div className="bg-lite dark:bg-darkbg min-h-screen lg:py-[100px] py-[100px]">
            <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
              <Image
                src={source.frontmatter.image as string}
                alt="image_post"
                width={500}
                height={500}
                className="rounded-xl w-full max-h-[400px] object-cover bg-center"
              />
              <div className="mt-4">
                <HeadingPage
                  title={source.frontmatter.title as string}
                ></HeadingPage>
                <p className="dark:text-text4 text-lg">
                  {source.frontmatter.subtitle as string}
                </p>
                <div className="prose prose-xl dark:prose-invert max-w-full prose-headings:underline mt-10">
                  <MDXRemote {...source} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps(
  ctx: GetStaticPropsContext<{ slug: string }>
) {
  const { slug } = ctx.params!;

  const postFile = fs.readFileSync(`_posts/${slug}.mdx`);

  const mdxSource = await serialize(postFile);

  return {
    props: {
      source: mdxSource as MDXRemoteSerializeResult,
    },
    revalidate: 60,
  };
}
export default Post;
