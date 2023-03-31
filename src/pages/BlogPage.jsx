import React, { Fragment, useEffect, useState } from "react";
import HeadingPage from "../components/HeadingPage";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogPage = () => {
  // change title
  document.title = "Blogs | hongduccodedao";

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://backendhongduccodedao-production.up.railway.app/api/v1/posts"
      )
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      });
  }, []);

  return (
    <Fragment>
      <div className="bg-lite dark:bg-darkbg h-screen lg:py-[100px] pt-[100px] pb-[150px]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
          <HeadingPage title="My Blogs"></HeadingPage>
          <div className="flex flex-col gap-4">
            {blogs.map((item, index) => (
              <Link key={item._id} to={item.slug}>
                <div className="bg-strock dark:bg-darkStroke rounded-lg p-5">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold text-text1 dark:text-whiteSoft">
                      {item.title}
                    </h1>
                    <p className="text-lg font-medium text-text1 dark:text-text3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPage;
