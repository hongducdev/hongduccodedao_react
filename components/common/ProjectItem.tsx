import { TbStar, TbGitFork, TbFile, TbLicense } from "react-icons/tb";
import TagItem from "./TagItem";
import prettyBytes from "pretty-bytes";
import moment from "moment/moment";

interface ProjectItemProps {
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
  }
}


const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <div className="bg-strock dark:bg-darkStroke p-4 rounded-lg">
      <div className="flex items-start justify-between flex-col md:items-center md:flex-row">
        <div className="flex items-center gap-x-4">
          <h1 className="">
            <a
              href={project?.html_url}
              target="_blank"
              title={project?.name}
              className="font-bold text-2xl md:text-3xl text-text2 dark:text-text4 hover:underline hover:duration-300 hover:ease-in-out"
            >
              {project?.name}
            </a>
          </h1>
          <p className="text-white text-xs font-medium bg-primary bg-opacity-45 inline-block p-1 rounded-lg uppercase">
            {project?.visibility}
          </p>
        </div>
        <div className="text-sm text-icon-color flex items-center gap-4">
          <span className="flex items-center gap-x-1">
            <TbStar /> {project?.stargazers_count}
          </span>
          <span className="flex items-center gap-x-1">
            <TbGitFork /> {project?.forks_count}
          </span>
          <span className="flex items-center gap-x-1">
            <TbFile /> {prettyBytes(project?.size)}
          </span>
        </div>
      </div>
      <div className="py-2">
        {project?.description && (
          <p className="text-text1 dark:text-text3 text-base md:text-lg font-medium clip-string-1">
            {project?.description}
          </p>
        )}
      </div>
      {
        // tags
        project?.topics?.length > 0 && (
          <div className="flex items-center gap-3 flex-wrap">
            {project?.topics?.map((topic) => (
              <TagItem key={topic}>{topic}</TagItem>
            ))}
          </div>
        )
      }
      <div className="mt-2">
        {/* language */}
        <div className="flex items-center gap-3 flex-wrap">
          {project?.language && (
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <p className="text-text1 dark:text-text3 text-lg font-medium">
                {project?.language}
              </p>
            </div>
          )}
          {/* license */}
          {project?.license && (
            <div className="flex items-center gap-2 text-text1 dark:text-text3">
              <TbLicense />
              <p className="text-lg font-medium">{project?.license?.name}</p>
            </div>
          )}
          {/* updated */}
          <div className="flex items-center gap-2 text-text1 dark:text-text3">
            <p className="text-lg font-medium">
              Updated {`${moment(project?.updated_at).fromNow()}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
