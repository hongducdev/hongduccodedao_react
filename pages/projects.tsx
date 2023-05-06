/* eslint-disable react-hooks/rules-of-hooks */
import HeadingPage from "@/components/common/HeadingPage";
import Head from "next/head";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../configs/configSWR";
import ProjectItem from "@/components/common/ProjectItem";
import Footer from "@/components/common/Footer";
import Loading from "@/components/common/Loading";

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
  // fetch data from https://api.github.com/users/hongduccodedao/repos?per_page=100
  const { data, error, isLoading } = useSWR<Project[]>(
    "https://api.github.com/users/hongduccodedao/repos?per_page=100",
    fetcher
  );

  return (
    <>
      <Head>
        <title>Projects | hongduccodedao</title>
      </Head>
      <main>
        <div className="bg-lite dark:bg-darkbg h-screen lg:py-[100px] py-[100px]">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
            <HeadingPage title="My Projects"></HeadingPage>
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
