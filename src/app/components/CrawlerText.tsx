"use client";
import React, { useEffect, useState, useRef } from "react";

import "./CrawlerText.css"; // Import your CSS file for styling

const CrawlerText = () => {
  const textRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
    id="board"
    className={`text-yellow-400 w-screen h-[1000px] bg-transparent`}
  >
    <div id="content">
      <p id="title">Episode I</p>
      <p id="subtitle">THE CODER'S MENACE</p>
      <br />
      <p>
        I'm Caleb Bratton, a versatile software engineer based in Denver,
        Colorado, with a passion for creating innovative digital
        experiences. My journey in the tech world has been a dynamic one,
        and I bring a unique blend of skills, creativity, and a zest for
        life to every project I undertake.
      </p>
    </div>
  </div>
  );
};

export default CrawlerText;
