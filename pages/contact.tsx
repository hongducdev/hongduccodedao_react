import { useRef } from "react";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
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
import HeadingPage from "@/components/common/HeadingPage";
import SocialItem from "@/components/common/SocialItem";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/TextArea";
import Head from "next/head";
import Footer from "@/components/common/Footer";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });
  const form = useRef<HTMLFormElement>(null);

  interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }

  const handelSubmitForm: SubmitHandler<ContactFormData> = (values) => {
    emailjs
      .sendForm(
        "service_g62hbgo",
        "template_qmvqx7j",
        form.current!,
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
    <>
      <Head>
        <title>Contact | hongduccodedao</title>
        <meta name="title" content="Contact | hongduccodedao"></meta>
        <meta
          name="keywords"
          content="Nguyễn Hồng Đức (hongduccodedao), hongducodedao, Nguyễn Hồng Đức"
        ></meta>
        <meta name="author" content="Nguyễn Hồng Đức (hongduccodedao)"></meta>
        <meta name="geo.region" content="VN"></meta>
        <meta property="og:locale" content="vi_VN"></meta>
        <meta name="theme-color" content="#1DC071"></meta>
        <meta
          name="description"
          content="Below is all my contact information on social networks. Feel free to contact me about work or things you can contribute to me. Or you can send me a message via the form below, I will contact you as soon as possible."
        />
        <meta
          name="google-site-verification"
          content="wO7_mXt_nA0dY_Xw1LH7l2YExnqGbSAx0A-mfo72lVs"
        />
        <meta
          name="facebook-domain-verification"
          content="mkiddxmoh9v84vek04vz472wd41n2f"
        />
        <meta name="msvalidate.01" content="719E848983AA37F4AA3A04B3616E1F9F" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hongduccodedao.site/" />
        <meta property="og:title" content="Contact | hongduccodedao" />
        <meta
          property="og:description"
          content="Below is all my contact information on social networks. Feel free to contact me about work or things you can contribute to me. Or you can send me a message via the form below, I will contact you as soon as possible."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/73995275?v=4"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hongduccodedao.site/" />
        <meta property="twitter:title" content="Contact | hongduccodedao" />
        <meta
          property="twitter:description"
          content="Below is all my contact information on social networks. Feel free to contact me about work or things you can contribute to me. Or you can send me a message via the form below, I will contact you as soon as possible."
        />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/73995275?v=4"
        />
      </Head>
      <main>
        <div className="bg-lite dark:bg-darkbg min-h-screen lg:py-[100px] pt-[100px] pb-[150px]">
          <div className="max-w-[800px] mx-auto px-5 lg:px-0">
            <HeadingPage title="My social network"></HeadingPage>
            <div className="flex gap-4 items-center justify-center flex-wrap my-5">
              {socialArr.map((item, index) => (
                <div key={index}>
                  <SocialItem
                    icon={item.icon}
                    text={item.text}
                    link={item.link}
                  />
                </div>
              ))}
            </div>
            <HeadingPage title="Contact me"></HeadingPage>
            <form
              ref={form}
              className=""
              onSubmit={handleSubmit(handelSubmitForm)}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-lg font-semibold text-text1 dark:text-text3"
                  >
                    Name
                  </label>
                  <Input
                    control={control}
                    name="name"
                    placeholder="Enter your name"
                    error={errors.name?.message?.toString()}
                  ></Input>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-lg font-semibold text-text1 dark:text-text3"
                  >
                    Email
                  </label>
                  <Input
                    control={control}
                    name="email"
                    placeholder="Enter your email"
                    error={errors.email?.message?.toString()}
                  ></Input>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-lg font-semibold text-text1 dark:text-text3"
                  >
                    Message
                  </label>
                  <Textarea
                    control={control}
                    name="message"
                    placeholder="Enter your message"
                    error={errors.message?.message?.toString()}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    className="bg-primary text-white font-semibold rounded-lg px-4 py-2 transition duration-300"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
