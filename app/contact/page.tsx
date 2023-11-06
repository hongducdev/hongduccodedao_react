import HeadingText from "@/components/HeadingText";
import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto mt-5 mb-20 md:my-10 flex flex-col gap-5 px-2 h-[calc(100vh-80px)]">
      <HeadingText text="Let's Contact" />
      <div className="mt-4">
        <p className="text-xl leading-relaxed">
          Hello! My name is{" "}
          <input
            type="text"
            className="bg-transparent border-b-[1px] border-ctp-subtext0 outline-none"
            autoComplete="name"
            placeholder="your name"
          />{" "}
          and I want to discuss a potential project. You can email me at{" "}
          <input
            type="email"
            className="bg-transparent border-b-[1px] border-ctp-subtext0 outline-none"
            autoComplete="email"
            placeholder="your email"
          />{" "}
          or call me at{" "}
          <input
            type="text"
            className="bg-transparent border-b-[1px] border-ctp-subtext0 outline-none"
            autoComplete="tel"
            placeholder="your phone number"
          />
          . Here are some details about my project:
        </p>
        <textarea
          className="mt-4 bg-transparent border-b-[1px] border-ctp-subtext0 outline-none resize-none text-xl w-full min-h-[100px]"
          placeholder="your project is about..."
        />
        <button
          className="mt-4 bg-ctp-green text-ctp-base text-xl font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-200 ease-in-out"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
