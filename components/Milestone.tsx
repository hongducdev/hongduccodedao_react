import React from "react";

interface MilestoneProps {
  year: string;
}

const Milestone: React.FC<MilestoneProps> = ({ year }) => {
  return <div className="w-full">
    <h2 className="font-semibold text-3xl mb-4">
      {year}
    </h2>
  </div>;
};

export default Milestone;
