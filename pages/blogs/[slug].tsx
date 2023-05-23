import React from "react";
import HeadingPage from "@/components/common/HeadingPage";
import Loading from "@/components/common/Loading";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/common/Footer";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";

const Post = ({ source }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{source.frontmatter.title as string} | hongduccodedao</title>
        <meta name="title" content={source.frontmatter.title as string}></meta>
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
          content={source.frontmatter.subtitle as string}
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
        <meta
          property="og:url"
          content={`https://hongduccodedao.site/${source.frontmatter.slug}`}
        />
        <meta
          property="og:title"
          content={source.frontmatter.title as string}
        />
        <meta
          property="og:description"
          content={source.frontmatter.subtitle as string}
        />
        <meta
          property="og:image"
          content={source.frontmatter.image as string}
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://hongduccodedao.site/${source.frontmatter.slug}`}
        />
        <meta
          property="twitter:title"
          content={source.frontmatter.title as string}
        />
        <meta
          property="twitter:description"
          content={source.frontmatter.subtitle as string}
        />
        <meta
          property="twitter:image"
          content={source.frontmatter.image as string}
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
