"use client";
import Image from "next/image";
import Head from "next/head";
import TaskBar from "./TaskBar";
import WindowComponent from "./components/WindowComponent";
import Screen from "./Screen";
import "98.css";
import { ReactNode, useState } from "react";
import { Apps } from "@/types/main";

export default function Home() {
  const [openApps, setOpenApps] = useState<Apps>({});

  return (
    <div>
      <Head>
        <title>Caleb Bratton Software Engineer</title>
        <meta name="description" content="tailwind" />
        {/* <link rel="stylesheet" href="https://unpkg.com/98.css"></link> */}
      </Head>
      <Screen openApps={openApps} setOpenApps={setOpenApps} />
      <TaskBar children={Object.keys(openApps)} />
    </div>
  );
}
