import React, { Fragment, useState } from "react";
import HeadingPage from "../components/HeadingPage";

import axios from "axios";
import { toast } from "react-toastify";
import slugify from "slugify";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input, TextArea } from "../components/Form";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import ReactMarkdown from "react-markdown";


const schema = yup.object({
  title: yup.string().required("Please enter your title"),
  description: yup.string().required("Please enter your description"),
});

const CreatePostPage = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);

  function handleEditorChange({ html, text }) {
    setMarkdown(text);
  }

  const renderHTML = (text) => <ReactMarkdown>{text}</ReactMarkdown>;

  const handleCreatePost = (data) => {
    setLoading(true);
    const slugByTitle = slugify(data.title, {
      replacement: "_",
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: true, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      locale: "vi", // language code of the locale to use
      trim: true,
    });

    axios
      .post(
        "https://backendhongduccodedao-production.up.railway.app/api/v1/posts",
        {
          title: data.title,
          description: data.description,
          content: markdown,
          slug: slugByTitle,
        }
      )
      .then((res) => {
        if (res.status === 201) {
          toast.success("Create post successfully");
          setLoading(false);
          reset();
        } else {
          toast.error("Create post failed");
        }
      });
  };

  return (
    <Fragment>
      <div className="bg-lite dark:bg-darkbg min-h-screen lg:py-[100px] pt-[100px] pb-[150px]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
          <HeadingPage title="Create my post"></HeadingPage>
          <form className="" onSubmit={handleSubmit(handleCreatePost)}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="title"
                  className="text-lg font-semibold text-text1 dark:text-text3"
                >
                  Title
                </label>
                <Input
                  control={control}
                  name="title"
                  placeholder="Enter your title"
                  error={errors.title?.message}
                ></Input>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="description"
                  className="text-lg font-semibold text-text1 dark:text-text3"
                >
                  Description
                </label>
                <TextArea
                  control={control}
                  name="description"
                  placeholder="Enter your description"
                  error={errors.description?.message}
                ></TextArea>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="content"
                  className="text-lg font-semibold text-text1 dark:text-text3"
                >
                  Content
                </label>
                <MdEditor
                  value={markdown}
                  onChange={handleEditorChange}
                  renderHTML={renderHTML}
                />
              </div>
              {loading ? (
                <button className="bg-primary text-white font-semibold rounded-lg px-4 py-2 transition duration-300 opacity-60" disabled>
                  <div className="w-5 h-5 mx-auto border-4 border-t-4 rounded-full border-white border-t-transparent animate-spin"></div>
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-primary text-white font-semibold rounded-lg px-4 py-2 transition duration-300"
                >
                  Send
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreatePostPage;
