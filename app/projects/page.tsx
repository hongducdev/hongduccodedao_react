import Project from "@/components/Project";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects | hongduccodedao",
  description:
    "These are all projects that have been accumulated through the process of studying and working in groups with friends. All are publicly available on the open source Github: hongduccodedao.",
};

const ProjectsPage = () => {
  return <Project />;
};

export default ProjectsPage;
