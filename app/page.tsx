"use client";
import React, { useState, useEffect } from "react";

const HelloWorld = () => {
  const text = "Hello, World!";
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayText((prevText) => prevText + text[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // Thời gian mỗi ký tự được hiển thị (100ms trong ví dụ này).
    return () => {
      clearInterval(interval);
    };
  }, [charIndex]);

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)]">
      <span className="text-9xl font-bold">{displayText}</span>
    </div>
  );
};

export default HelloWorld;
