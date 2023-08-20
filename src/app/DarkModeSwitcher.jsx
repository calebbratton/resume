"use client";
import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

export default function DarkModeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          checked={theme === "dark"}
          onChange={toggleDarkMode}
          size={36}
        />
      </div>
    </>
  );
}
