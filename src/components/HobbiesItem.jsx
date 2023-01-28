import React from "react";

const HobbiesItem = ({title = "", description = "", children}) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h3 className="text-text2 dark:text-whiteSoft text-2xl font-semibold relative after:absolute after:w-[10px] after:h-[2px] after:rounded-full after:bg-primary after:bottom-2 after:translate-x-1 after:animate-pulse2 inline-block">
          {title}
        </h3>
        <p className="text-text1 dark:text-text3 text-lg font-medium">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        {children}
      </div>
    </div>
  );
};

export default HobbiesItem;
