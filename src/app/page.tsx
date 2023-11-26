"use client";
import Head from "next/head";
import TaskBar from "./TaskBar";
import Screen from "./Screen";
import "98.css";
import { Fragment, ReactNode, useState } from "react";
import { AppWindow } from "@/types/main";
import { WindowContext } from "../context/context";
import Explorer from "./components/Explorer/Explorer";
import SkillsWindow from "./components/ResumeWindow";
import { NextAuthProvider } from "./AuthProvider";

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
        <NextAuthProvider>
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
        </NextAuthProvider>
      </WindowContext.Provider>
    </div>
  );
}
