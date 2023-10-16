"use client";
import React, { useState, useEffect } from "react";
import "./lightsaber.css"; // Import your CSS file for styling

const Lightsaber = () => {
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
    <>
      <div
        className={`lightsaber max-h-[450px] ${
          scrollPosition > 1 ? "visible" : ""
        }`}
        style={{
          height: scrollPosition > 1 ? `${scrollPosition}px` : "0",
        }}
      >
        <div className="blade max-h-[450px]" />
      </div>
    </>
  );
};

export default Lightsaber;
