/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "@/components/common/Footer";
import { FiSend, FiRefreshCw } from "react-icons/fi";
import axios from "axios";
import Head from "next/head";
import React from "react";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";

interface Conversation {
  role: string;
  content: string;
}

const chatgpt = () => {
  const [value, setValue] = React.useState<string>("");
  const [conversation, setConversation] = React.useState<Conversation[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setLoading(true);
      await handleResponse();
      setLoading(false);
    }
  };

  const handleButtonClick = async () => {
    setLoading(true);
    await handleResponse();
    setLoading(false);
  };

  const handleResponse = async () => {
    const chatHistory = [...conversation, { role: "user", content: value }];
    // rest api
    await axios
      .post("/api/chatgpt", {
        messages: chatHistory,
      })
      .then(async (res) => {
        const data = await res.data.data.choices[0].message.content;

        setValue("");
        setConversation([...chatHistory, { role: "assistant", content: data }]);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleRefresh = () => {
    setValue("");
    setConversation([]);
  };

  return (
    <>
      <Head>
        <title>Chat GPT | hongduccodedao</title>
        <meta name="title" content="Chat GPT | hongduccodedao"></meta>
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
          content="At the end of 2022, the birth of Chat GPT has made a big change in the process of studying and working globally. But at that time, it was not supported in Vietnam to be able to create a GPT Chat account. So I created a free version of Chat GPT on the website that everyone can experience. The model that I use is gpt-3.5-turbo improved speed with answer accuracy."
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
        <meta property="og:title" content="Chat GPT | hongduccodedao" />
        <meta
          property="og:description"
          content="At the end of 2022, the birth of Chat GPT has made a big change in the process of studying and working globally. But at that time, it was not supported in Vietnam to be able to create a GPT Chat account. So I created a free version of Chat GPT on the website that everyone can experience. The model that I use is gpt-3.5-turbo improved speed with answer accuracy."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/73995275?v=4"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hongduccodedao.site/" />
        <meta property="twitter:title" content="Chat GPT | hongduccodedao" />
        <meta
          property="twitter:description"
          content="At the end of 2022, the birth of Chat GPT has made a big change in the process of studying and working globally. But at that time, it was not supported in Vietnam to be able to create a GPT Chat account. So I created a free version of Chat GPT on the website that everyone can experience. The model that I use is gpt-3.5-turbo improved speed with answer accuracy."
        />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/73995275?v=4"
        />
      </Head>
      <main>
        <div className="bg-lite dark:bg-darkbg min-h-screen h-full lg:py-[100px] py-[100px]">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
            <div className="flex items-center justify-between gap-2">
              {loading ? (
                <div className="flex items-center gap-x-3 flex-1">
                  <input
                    type="text"
                    className="border dark:border-strock border-darkStroke bg-transparent outline-none dark:text-white max-w-[750px] w-full px-5 py-3 rounded-[50px] caret-text2 dark:caret-white text-text1"
                    placeholder="Enter your message..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled
                  />
                  <button
                    className="dark:text-white text-text2 bg-primary h-[50px] px-7 rounded-full opacity-70"
                    onClick={handleButtonClick}
                    disabled
                  >
                    <div className="w-5 h-5 mx-auto border-4 border-t-4 rounded-full border-white border-t-transparent animate-spin"></div>
                  </button>
                </div>
              ) : (
                <div className="flex items-center lg:gap-x-3 gap-x-2 flex-1">
                  <input
                    type="text"
                    className="border dark:border-strock border-darkStroke bg-transparent outline-none dark:text-white max-w-[750px] w-full px-5 py-3 rounded-[50px] caret-text2 dark:caret-white text-text1"
                    placeholder="Enter your message..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    className="text-white bg-primary h-[50px] lg:px-7 px-5 rounded-full"
                    onClick={handleButtonClick}
                  >
                    <FiSend />
                  </button>
                </div>
              )}
              <button
                className="text-white bg-primary h-[50px] lg:px-7 px-5 rounded-full flex items-center gap-x-2"
                onClick={handleRefresh}
              >
                <FiRefreshCw />
                <p className="hidden lg:block">New chat</p>
              </button>
            </div>
            <div className="mt-5 flex flex-col gap-2 lg:gap-3">
              {conversation.map((item, index) => (
                <div
                  key={index}
                  className={`flex ${
                    item.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[500px] w-full px-5 py-3 rounded-xl ${
                      item.role === "user"
                        ? "bg-primary text-white"
                        : "bg-white text-text1 dark:bg-darkSecondary dark:text-white mardown-body overflow-auto"
                    }`}
                  >
                    <ReactMarkdown>{item.content}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default chatgpt;
