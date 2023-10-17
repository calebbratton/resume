"use client";
import Image from "next/image";
import Head from "next/head";
import Experience from "./Experience";
import Personal from "./Personal";
import ThemeContext from "../context/ThemeContext";
import Nav from "./Nav";
import Lightsaber from "./components/Lightsaber";
import kenobi from "../public/photos/kenobi.png";
import "./crawl.css";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
  return (
    <div className="bg-[url('../public/photos/stars.jpg')] bg-fixed bg-cover">
      <Head>
        <title>Caleb Bratton Software Engineer</title>
        <meta name="description" content="tailwind" />
      </Head>
      <ThemeContext>
        <div className="flex flex-col bg-transparent md:flex-row">
          <div className="w-full md:w-1/2 h-screen md:fixed md:left-0 md:overflow-hidden">
            <Personal />
          </div>

          <div className="w-full ml-auto bg-transparent md:w-1/2 p-6">
            <Experience />
          </div>
        </div>
        <div className="fixed flex items-center w-[30px] lg:right-1/2 m:left-4 justify-center top-[81%]">
          <Lightsaber />
        </div>
        <div className="z-[100] fixed flex items-center w-[30px] lg:right-1/2 m:left-4 justify-center top-[80%]">
          <Image src={kenobi} alt="lightsaber hilt" />
        </div>
      </ThemeContext>
    </div>
  );
}
