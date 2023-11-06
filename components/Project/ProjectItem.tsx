import Link from "next/link";
import React from "react";
import InfoProject from "./InfoProject";


export interface ProjectItemProps {
  project: {
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
  };
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <div className="w-full bg-ctp-surface0 p-3 rounded-lg group">
      <div className="relative inline-block">
        <Link href={project.html_url}>
          <p className="text-xl z-20 relative">{project.name}</p>
        </Link>

        <div className="absolute w-0 h-1 bg-ctp-green bottom-1 left-0 z-[1] group-hover:w-[80%] group-hover:transition-all group-hover:duration-500"></div>
      </div>
      <div className="mt-2">
        <div className="flex items-center gap-3">
          {/* languages */}
          {project.language && (
            <div className="inline-flex items-center gap-1 bg-ctp-green px-3 rounded-full">
              <span className="text-ctp-base font-medium">
                {project.language}
              </span>
            </div>
          )}

          {/* license */}
          {project.license && (
            <div className="inline-flex items-center gap-1 bg-ctp-peach px-3 rounded-full">
              <span className="text-ctp-base font-medium max-w-[120px] text-ellipsis whitespace-nowrap overflow-hidden">
                {project.license.name}
              </span>
            </div>
          )}
        </div>
        <div className="mt-2">
          <InfoProject {...project} />
          <p className="line-clamp-2">
            {project.description ? project.description : "No description"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
