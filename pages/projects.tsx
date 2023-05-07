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
