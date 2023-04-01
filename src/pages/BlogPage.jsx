import React, { Fragment, useEffect, useState } from "react";
import HeadingPage from "../components/HeadingPage";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";

const BlogPage = () => {
  // change title
  document.title = "Blogs | hongduccodedao";

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://backendhongduccodedao-production.up.railway.app/api/v1/posts"
      )
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <Fragment>
      <div className="bg-lite dark:bg-darkbg h-screen lg:py-[100px] pt-[100px] pb-[150px]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
          <HeadingPage title="My Blogs"></HeadingPage>
          <div className="flex flex-col gap-4">
            {loading ? (
              <div className="">
                <div className="w-10 h-10 mx-auto border-4 border-t-4 rounded-full border-primary border-t-transparent animate-spin"></div>
              </div>
            ) : (
              <>
                {blogs.map((item, index) => (
                  <Link key={item._id} to={item.slug}>
                    <div className="bg-strock dark:bg-darkStroke rounded-lg p-5">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <h1 className="text-2xl font-semibold text-text1 dark:text-whiteSoft">
                            {item.title}
                          </h1>
                          <span className="text-lg font-medium text-text1 dark:text-text3">
                            {moment(item.updatedAt).format("DD/MM/YYYY")} (
                            {`${moment(item.updatedAt).fromNow()}`})
                          </span>
                        </div>
                        <p className="text-lg font-medium text-text1 dark:text-text3">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPage;
