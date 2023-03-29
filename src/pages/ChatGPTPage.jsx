import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Typewriter from "typewriter-effect";

const ChatGPTPage = () => {
  const [chat, setChat] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prompt === "") return;
    setLoading(true);
    axios
      .post(
        "https://backendhongduccodedao-production.up.railway.app/api/v1/chats",
        {
          prompt: prompt,
        }
      )
      .then((res) => {
        if (res.data) {
          setChat(res.data);
          setLoading(false);
        }
      });
  }, [prompt]);

  const handleSend = () => {
    setPrompt(inputValue);
    setInputValue("");
  };

  return (
    <Fragment>
      <div className="bg-lite dark:bg-darkbg h-screen lg:py-[100px] pt-[100px] pb-[150px] relative">
        <div className="max-w-[800px] mx-auto px-5 lg:px-0">
          {
            <div className="w-full flex justify-end mb-10">
              {prompt && (
                <div className="text-white p-3 bg-darkStroke rounded-md inline-block">
                  <Typewriter
                    options={{
                      strings: prompt,
                      autoStart: true,
                    }}
                  />
                </div>
              )}
            </div>
          }
          {chat && (
            <div className="text-white p-3 bg-darkStroke rounded-md inline-block">
              <Typewriter
                options={{
                  strings: chat.text,
                  autoStart: true,
                }}
              />
            </div>
          )}
          <div className="fixed bottom-[100px] w-full flex items-center gap-3">
            <input
              type="text"
              className="border border-strock bg-transparent outline-none text-white max-w-[750px] w-full px-5 py-3 rounded-[50px]"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              value={inputValue}
            />
            {loading ? (
              <button className="bg-primary px-5 py-3 rounded-xl" disabled>
                <div className="w-5 h-5 mx-auto border-4 border-t-4 rounded-full border-white border-t-transparent animate-spin"></div>
              </button>
            ) : (
              <button
                className="text-white bg-primary px-5 py-3 rounded-xl"
                onClick={() => handleSend()}
                // ấn enter để gửi
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
              >
                Gửi
              </button>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ChatGPTPage;
