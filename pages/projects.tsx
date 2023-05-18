/* eslint-disable react-hooks/rules-of-hooks */
import HeadingPage from "@/components/common/HeadingPage";
import Head from "next/head";
import React, { useCallback } from "react";
import ProjectItem from "@/components/common/ProjectItem";
import Footer from "@/components/common/Footer";
import Loading from "@/components/common/Loading";
import axios from "axios";
import { debounce } from "lodash";
interface Project {
  id: number;
  html_url: string;
  name: string;
  visibility: string;
  stargazers_count: number;
  forks_count: number;
  size: number;
  description: string;
  topics: string[];
  language: string;
  license: {
    name: string;
  };
  updated_at: string;
}

const projects = () => {
  const [data, setData] = React.useState<Project[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [inputSearch, setInputSearch] = React.useState("");

  const handleChange = useCallback(
    debounce((value: string) => {
      setInputSearch(value);
    }, 500),
    []
  );

  const dataRef = React.useRef<Project[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.github.com/users/hongduccodedao/repos?per_page=100"
        );
        dataRef.current = res.data;
        setData(dataRef.current);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    const filterData = dataRef.current.filter((project) =>
      project.name.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setData(filterData);
  }, [inputSearch]);

  return (
    <>
      <Head>
        <title>Projects | hongduccodedao</title>
        <meta name="title" content="Projects | hongduccodedao"></meta>
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
          content="These are all projects that have been accumulated through the process of studying and working in groups with friends. All are publicly available on the open source Github: hongduccodedao."
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
        <meta property="og:title" content="Projects | hongduccodedao" />
        <meta
          property="og:description"
          content="These are all projects that have been accumulated through the process of studying and working in groups with friends. All are publicly available on the open source Github: hongduccodedao."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/73995275?v=4"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hongduccodedao.site/" />
        <meta property="twitter:title" content="Projects | hongduccodedao" />
        <meta
          property="twitter:description"
          content="These are all projects that have been accumulated through the process of studying and working in groups with friends. All are publicly available on the open source Github: hongduccodedao."
        />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/73995275?v=4"
        />
      </Head>
      <main>
        <div className="bg-lite dark:bg-darkbg h-screen lg:py-[100px] py-[100px]">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
            <HeadingPage title="My Projects"></HeadingPage>
            <input
              type="text"
              className="border dark:border-strock border-darkStroke bg-transparent outline-none dark:text-white w-full px-5 py-3 rounded-[50px] caret-text2 dark:caret-white text-text1 my-5"
              placeholder="Enter your keyword..."
              value={inputSearch}
              onChange={(e) => handleChange(e.target.value)}
            />
            {isLoading ? (
              <Loading />
            ) : error ? (
              <div className="text-2xl font-bold text-center text-gray-500 dark:text-gray-400">
                Error
              </div>
            ) : (
              <div className="flex flex-col gap-2 max-h-[70vh] overflow-auto">
                {data?.map((project) => (
                  <div key={project.id}>
                    <ProjectItem project={project} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default projects;
