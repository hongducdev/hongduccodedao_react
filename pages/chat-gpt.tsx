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
        <meta name="description" content="Chat GPT" />
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
                    className="dark:text-white text-text2 bg-primary h-[50px] lg:px-7 px-5 rounded-full"
                    onClick={handleButtonClick}
                  >
                    <FiSend />
                  </button>
                </div>
              )}
              <button
                className="dark:text-white text-text2 bg-primary h-[50px] lg:px-7 px-5 rounded-full flex items-center gap-x-2"
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
