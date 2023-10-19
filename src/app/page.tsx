"use client";
import Image from "next/image";
import Head from "next/head";
import TaskBar from "./TaskBar";
import WindowComponent from "./components/WindowComponent";
import Screen from "./Screen";
import "98.css";
import { ReactNode, createContext, useEffect, useState } from "react";
import { AppWindow } from "@/types/main";
import { WindowContext } from "../context/context";
import Explorer from "./components/Explorer";
import SkillsWindow from "./components/ResumeWindow";

const appReference: { [key: string]: ReactNode } = {
  "Internet Explorer": <Explorer />,
  Resume: <SkillsWindow />,
};

export default function Home() {
  const [windows, setWindows] = useState<AppWindow>({
    "Internet Explorer": true,
  });

  return (
    <div>
      <Head>
        <title>Caleb Bratton Software Engineer</title>
        <meta name="description" content="tailwind" />
        {/* <link rel="stylesheet" href="https://unpkg.com/98.css"></link> */}
      </Head>
      <WindowContext.Provider value={{ windows, setWindows }}>
        {Object.keys(windows).map((item) =>
          windows[item] ? (
            <div
              className="absolute inset-0 flex justify-center items-center"
              key={item}
            >
              {appReference[item]}
            </div>
          ) : null
        )}

        <Screen />
        <TaskBar />
      </WindowContext.Provider>
    </div>
  );
}
