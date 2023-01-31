import React, { Fragment, useRef } from "react";
import HeadingPage from "../components/HeadingPage";
import SocialItem from "../components/SocialItem";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import { Input, TextArea } from "../components/Form";

const socialArr = [
  {
    icon: <FaGithub />,
    text: "Github",
    link: "https://github.com/hongduccodedao",
  },
  {
    icon: <FaFacebook />,
    text: "Facebook",
    link: "https://www.facebook.com/hongduccodedao",
  },
  {
    icon: <FaInstagram />,
    text: "Instagram",
    link: "https://www.instagram.com/pinkduwc._/",
  },
  {
    icon: <FaTwitter />,
    text: "Twitter",
    link: "https://twitter.com/hongduccodedao",
  },
  {
    icon: <FaDiscord />,
    text: "Discord",
    link: "https://discord.com/users/769244837030526976",
  },
];

const schema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter a valid email"),
  message: yup.string().required("Please enter your message"),
});

const ContactPage = () => {

  // change title
  document.title = "Contact me | hongduccodedao";

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const form = useRef();

  const handelSubmitForm = (values) => {
    emailjs
      .sendForm(
        "service_g62hbgo",
        "template_qmvqx7j",
        form.current,
        "IbPRxAUIJC8ys8Ekm"
      )
      .then((res) => {
        toast.success("Send message success");
      })
      .catch((err) => {
        toast.error("Send message error");
      });
  };

  return (
    <Fragment>
      <div className="bg-lite dark:bg-darkbg min-h-screen lg:py-[100px] pt-[100px] pb-[150px]">
        <div className="max-w-[800px] mx-auto px-5 lg:px-0">
          <HeadingPage title="My social network"></HeadingPage>
          <div className="flex gap-4 items-center justify-center flex-wrap my-5">
            {socialArr.map((item, index) => (
              <SocialItem
                icon={item.icon}
                text={item.text}
                link={item.link}
                key={index}
              />
            ))}
          </div>
          <HeadingPage title="Contact me"></HeadingPage>
          <form
            ref={form}
            className=""
            onSubmit={handleSubmit(handelSubmitForm)}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-lg font-semibold text-text1 dark:text-text3">
                  Name
                </label>
                <Input
                  control={control}
                  name="name"
                  placeholder="Enter your name"
                  error={errors.email?.message}></Input>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-lg font-semibold text-text1 dark:text-text3">
                  Email
                </label>
                <Input
                  control={control}
                  name="email"
                  placeholder="Enter your email"
                  error={errors.email?.message}></Input>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-lg font-semibold text-text1 dark:text-text3">
                  Message
                </label>
                <TextArea
                  control={control}
                  name="message"
                  placeholder="Enter your message"
                  error={errors.message?.message}></TextArea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white font-semibold rounded-lg px-4 py-2 transition duration-300">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactPage;
