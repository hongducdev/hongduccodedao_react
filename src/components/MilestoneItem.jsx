import React from "react";

const MilestoneItem = ({ year = "", children }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-text1 dark:text-white">{year}</h2>
      <p className="text-text1 dark:text-text3 text-lg font-medium">
        {children}
      </p>
    </div>
  );
};

export default MilestoneItem;
