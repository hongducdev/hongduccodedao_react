import React from "react";
import HeadingPage from "@/components/common/HeadingPage";
import Loading from "@/components/common/Loading";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/common/Footer";
import { BlogSEO } from "@/components/SEO/SEOPage";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";

const Post = ({ source }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <BlogSEO
          title={source.frontmatter.title as string}
          description={source.frontmatter.subtitle as string}
          image={source.frontmatter.image as string}
          url={`https://hongduccodedao.com/blogs/${source.frontmatter.slug}`}
        />
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

export default Post;

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps(
  ctx: GetStaticPropsContext<{
    slug: string;
  }>
) {
  const { slug } = ctx.params!;

  // retrieve the MDX blog post file associated
  // with the specified slug parameter
  const postFile = fs.readFileSync(`_posts/${slug}.mdx`);

  // read the MDX serialized content along with the frontmatter
  // from the .mdx blog post file
  const mdxSource = await serialize(postFile, { parseFrontmatter: true });
  return {
    props: {
      source: mdxSource,
    },
    // enable ISR
    revalidate: 60,
  };
}
