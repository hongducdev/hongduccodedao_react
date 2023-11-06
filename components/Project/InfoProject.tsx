import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import prettyBytes from "pretty-bytes";
import { File, GitFork, Star } from "lucide-react";

interface InfoProjectItemProps {
  stargazers_count: number;
  forks_count: number;
  size: number;
}

const InfoProject: React.FC<InfoProjectItemProps> = ({
  stargazers_count,
  forks_count,
  size,
}) => {
  return (
    <div className="flex items-center gap-3">
      {/* star */}
      <div className="">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex items-center gap-1">
                <Star fill="#f9e2af" color="#f9e2af" size={16} />
                <span>{stargazers_count}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-ctp-base">
              <p>
                {stargazers_count}
                {stargazers_count > 1 ? " stars" : " star"}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="bg-ctp-subtext0 h-3 w-[2px]"></div>

      {/* fork */}
      <div className="">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex items-center gap-1">
                <GitFork color="#89b4fa" size={16} />
                <span>{forks_count}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-ctp-base">
              <p>
                {forks_count}
                {forks_count > 1 ? " forks" : " fork"}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="bg-ctp-subtext0 h-3 w-[2px]"></div>

      {/* size */}
      <div className="">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex items-center gap-1">
                <File color="#89b4fa" size={16} />
                <span>{prettyBytes(size)}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-ctp-base">
              <p>{prettyBytes(size)}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default InfoProject;
