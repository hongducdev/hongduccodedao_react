import React, { Fragment, useState } from "react";
import HeadingPage from "../components/HeadingPage";

import axios from "axios";
import { toast } from "react-toastify";
import slugify from "slugify";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Input, TextArea } from "../components/Form";

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

  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"],
    ],
  };

  const handleCreatePost = (data) => {
    console.log(data);
    console.log(content);

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
          content: content,
          slug: slugByTitle,
        }
      )
      .then((res) => {
        if (res.status === 201) {
          toast.success("Create post successfully");
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
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  className="border border-gray-300 rounded-lg text-text1 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white font-semibold rounded-lg px-4 py-2 transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreatePostPage;
