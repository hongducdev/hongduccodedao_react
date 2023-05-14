/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import axios from "axios";
import HeadingPage from "@/components/common/HeadingPage";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/common/Loading";
import PostCard from "@/components/common/PostCard";
import Head from "next/head";
import Footer from "@/components/common/Footer";

interface Post {
  data: {
    title: string;
    image: string;
    slug: string;
    subtitle: string;
  };
}

const blogs = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/blogs")
      .then((res) => {
        setPosts(res.data.post);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(posts);

  return (
    <>
      <Head>
        <title>Blog | hongduccodedao</title>
        <meta
          name="description"
          content="Blog của hongduccodedao, chia sẻ kiến thức về lập trình, kinh nghiệm làm việc, các thủ thuật hay"
        />
      </Head>
      <main>
        <div className="bg-lite dark:bg-darkbg h-screen lg:py-[100px] py-[100px]">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
            <HeadingPage title="My Blogs"></HeadingPage>
            <div className="mt-4">
              {isLoading ? (
                <Loading />
              ) : posts && posts.length > 0 ? (
                <div className="grid grid-cols-3 gap-4 ">
                  {posts.map((post, index) => (
                    <PostCard key={index} {...post.data} />
                  ))}
                </div>
              ) : (
                <div className="text-2xl font-bold text-center text-gray-500 dark:text-gray-400">
                  Error
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

export default blogs;
