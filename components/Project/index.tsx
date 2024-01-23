"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HeadingText from "@/components/HeadingText";
import ProjectItem from "@/components/Project/ProjectItem";
import { Input } from "@/components/ui/input";
import { toast } from "../ui/use-toast";

interface ProjectDataProps {
  name: string;
  id: number;
  html_url: string;
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

const getProjects = async () => {
  const response = await axios.get(
    "https://api.github.com/users/hongducdev/repos?per_page=100"
  );
  if (response.status === 200) {
    const data = response.data;
    return data;
  } else {
    toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    });
  }
};

const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [projectData, setProjectData] = useState<ProjectDataProps[]>([]);

  useEffect(() => {
    getProjects().then((data) => {
      setProjectData(data);
    });
  }, []);

  return (
    <div className="max-w-[1200px] w-full mx-auto mt-5 mb-20 md:my-10 flex flex-col gap-5 px-2 min-h-[calc(100vh-80px)]">
      <HeadingText text="My Projects" />
      <div className="my-4">
        <Input
          type="text"
          className="w-full bg-ctp-mantle text-lg"
          placeholder="Search projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {projectData
            .filter((project) =>
              project.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
