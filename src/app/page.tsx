"use client";
import Image from "next/image";
import Head from "next/head";
import TaskBar from "./TaskBar";
import WindowComponent from "./components/WindowComponent";
import Screen from "./Screen";
import "98.css";
import { Fragment, ReactNode, createContext, useEffect, useState } from "react";
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
      </Head>
      <WindowContext.Provider value={{ windows, setWindows }}>
        <Screen>
          <div className="overflow-hidden">
            {Object.keys(windows).map((item) =>
              windows[item] ? (
                <Fragment key={item}>{appReference[item]}</Fragment>
              ) : null
            )}
          </div>
          <TaskBar />
        </Screen>
      </WindowContext.Provider>
    </div>
  );
}
