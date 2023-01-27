import React from "react";

const NotFoundPage = () => {
  return (
    <div className="bg-lite dark:bg-darkbg h-screen w-screen">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <img srcSet="/error404.png 2x" alt="not_found_image" />
        <h2 className="text-3xl font-bold text-text1 dark:text-white">
          Page not found
        </h2>

        <p className="text-text1 dark:text-white text-lg font-medium">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>

        <a
          href="/"
          className="bg-primary bg-opacity-70 hover:bg-opacity-100 hover:duration-300 hover:ease-in-out text-white font-bold py-2 px-4 rounded mt-5">
          Back to home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
