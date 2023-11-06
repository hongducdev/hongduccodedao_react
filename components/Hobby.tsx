import { IHobby } from "@/utils/Hobbies";
import React from "react";
import { Badge } from "./ui/badge";

const Hobby: React.FC<IHobby> = ({ title, description, tags }) => {
  return (
    <div>
      <h3 className="font-semibold text-3xl mb-2 text-ctp-subtext0">{title}</h3>
      <p className="mb-2 text-ctp-overlay2 text-xl">{description}</p>
      <div className="flex items-center gap-3 flex-wrap">
        {tags.map((tag) => (
          <Badge key={tag.name} className="text-base bg-ctp-green">{tag.name}</Badge>
        ))}
      </div>
    </div>
  );
};

export default Hobby;
