"use client";
import { useEffect, useState } from "react";

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

  return <span className="text-9xl font-bold">{displayText}</span>;
};

export default HelloWorld;
