import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import parse from "html-react-parser";

const PostPage = () => {
  const { blogSlug } = useParams();

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://backendhongduccodedao-production.up.railway.app/api/v1/posts/${blogSlug}`
      )
      .then((res) => {
        if (res.status === 200) {
          setPost(res.data);
          setLoading(false);
        } else {
          console.log("error");
        }
      });
  }, [blogSlug]);

  return (
    <Fragment>
      <div className="bg-lite dark:bg-darkbg h-screen lg:py-[100px] pt-[100px] pb-[150px]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
          {loading ? (
            <div className="w-full h-[70vh] flex items-center justify-center">
              <div className="w-10 h-10 mx-auto border-4 border-t-4 rounded-full border-primary border-t-transparent animate-spin"></div>
            </div>
          ) : (
            <>
              <h1 className="text-white text-5xl font-bold">
                {post[0] && post[0].title}
              </h1>
              <p className="text-text3 text-2xl font-medium">
                {post[0] && post[0].description}
              </p>
              <div className="mt-5">
                <span className="text-white">
                  Updated at:{" "}
                  {moment(post[0] && post[0].updatedAt).format("DD/MM/YYYY")} (
                  {`${moment(post[0] && post[0].updatedAt).fromNow()}`})
                </span>
              </div>
              <div className="w-full h-[3px] bg-darkStroke rounded-full my-2"></div>
              <div className="mt-5 text-whiteSoft overwrite-css">
                {post[0] && parse(post[0].content)}
              </div>
            </>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default PostPage;
