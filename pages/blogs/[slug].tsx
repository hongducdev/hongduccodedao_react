import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import HeadingPage from "@/components/common/HeadingPage";
import Loading from "@/components/common/Loading";
import Image from "next/image";
import Markdown from "markdown-to-jsx";
import Head from "next/head";
import Footer from "@/components/common/Footer";

interface PostData {
  data: {
    title: string;
    image: string;
    slug: string;
    subtitle: string;
    date: string;
  };
  content: string;
}

const Post = () => {
  const { slug } = useRouter().query;

  const [post, setPost] = React.useState<PostData | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/api/blogs/${slug}`)
      .then((res) => {
        setPost(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  return (
    <>
      <Head>
        <title>{post?.data.title}</title>
        <meta name="title" content="{post?.data.title}"></meta>
        <meta
          name="keywords"
          content="Nguyễn Hồng Đức (hongduccodedao), hongducodedao, Nguyễn Hồng Đức"
        ></meta>
        <meta name="author" content="Nguyễn Hồng Đức (hongduccodedao)"></meta>
        <meta name="geo.region" content="VN"></meta>
        <meta property="og:locale" content="vi_VN"></meta>
        <meta name="theme-color" content="#1DC071"></meta>
        <meta name="description" content={post?.data.subtitle} />
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
        <meta property="og:title" content="{post?.data.title}" />
        <meta property="og:description" content={post?.data.subtitle} />
        <meta property="og:image" content={post?.data.image} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hongduccodedao.site/" />
        <meta property="twitter:title" content="{post?.data.title}" />
        <meta property="twitter:description" content={post?.data.subtitle} />
        <meta property="twitter:image" content={post?.data.image} />
      </Head>
      <main>
        <div>
          <div className="bg-lite dark:bg-darkbg min-h-screen lg:py-[100px] py-[100px]">
            <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
              {isLoading ? (
                <Loading />
              ) : post ? (
                <>
                  <Image
                    src={post.data?.image}
                    alt="image_post"
                    width={500}
                    height={500}
                    className="rounded-xl w-full max-h-[400px] object-cover bg-center"
                  />
                  <div className="mt-4">
                    <HeadingPage title={post.data?.title}></HeadingPage>
                    <p className="dark:text-text4 text-lg">
                      {post.data?.subtitle} - {post.data?.date}
                    </p>
                  </div>
                  <div className="mt-4">
                    <article className="prose prose-xl dark:prose-invert max-w-full prose-headings:underline">
                      <Markdown>{post.content}</Markdown>
                    </article>
                  </div>
                </>
              ) : (
                <div className="text-2xl font-bold text-center text-gray-500 dark:text-gray-400">
                  Post not found
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Post;
