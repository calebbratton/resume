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
      className={`crawl ${scrollPosition > 1 ? "visible" : ""}`}
      style={{
        transform:
          scrollPosition > 1 ? `translateY(${scrollPosition * -10}px)` : "0",
      }}
    >
      <p className="preheader">Episode VII</p>
      <h2 className="header">THE FORCE AWAKENS</h2>
      <p>
        Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER
        has risen from the ashes of the Empire and will not rest until
        Skywalker, the last Jedi, has been destroyed.
      </p>
      <p>
        With the support of the REPUBLIC, General Leia Organa leads a brave
        RESISTANCE. She is desperate to find her brother Luke and gain his help
        in restoring peace and justice to the galaxy.
      </p>
      <p>
        Leia has sent her most daring pilot on a secret mission to Jakku, where
        an old ally has discovered a clue to Luke's whereabouts....
      </p>
    </div>
  );
};

export default CrawlerText;
