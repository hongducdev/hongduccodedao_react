import React, { Fragment } from "react";
import useSWR from "swr";
import HeadingPage from "../components/HeadingPage";
import ProjectItem from "../components/ProjectItem";
import { fetcher } from "../config/configSWR";

const ProjectsPage = () => {

  // change title
  document.title = "My Projects | hongduccodedao";

  const { data, error, isLoading } = useSWR(
    "https://api.github.com/users/hongduccodedao/repos?per_page=100",
    fetcher
  );

  return (
    <Fragment>
      <div className="bg-lite dark:bg-darkbg h-screen lg:py-[100px] pt-[100px] pb-[150px]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
          <HeadingPage title="My Projects"></HeadingPage>
          {isLoading ? (
            <div className="text-center text-2xl font-bold text-gray-500 dark:text-gray-400">
              Loading...
            </div>
          ) : error ? (
            <div className="text-center text-2xl font-bold text-gray-500 dark:text-gray-400">
              Error
            </div>
          ) : (
            <div className="flex flex-col gap-2 max-h-[70vh] overflow-auto">
              {data.length > 0 &&
                data.map((project) => (
                  <ProjectItem key={project.id} project={project}></ProjectItem>
                ))}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectsPage;
