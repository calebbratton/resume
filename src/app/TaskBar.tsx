import React, { ReactNode, useContext, useState } from "react";
import Image, { StaticImageData } from "next/image";
import "98.css";
// import startLogo from "/windowsLogo.png";
import { WindowContext } from "../context/context";
import { AppWindow } from "@/types/main";
import skills from "/file98.png";
import explorerPage from "/explorerPage.png";

const iconReference: { [key: string]: string } = {
  "Internet Explorer": "/explorerPage.png",
  Resume: "/file98.png",
};

function TaskBar() {
  const { windows, setWindows } = useContext(WindowContext);
  const date = new Date();
  const handleReopen = (item: string) => {
    setWindows({ ...windows, [item]: true });
  };
  return (
    <div className="flex flex-row px-2 h-10 justify-between py-1 fixed bottom-0 w-full bg-gray-300 border-t-2 border-gray-500">
      <div className="flex flex-row">
        <button className="flex flex-row items-center text-base font-sans cursor-pointer">
          <Image
            alt="startLogo"
            src="/windowsLogo.png"
            width={20}
            height={20}
          />
          <p className="pl-2">Start</p>
        </button>
        <div className="status-bar text-base pl-2">
          {Object.keys(windows).map((item: string) => (
            <button
              key={item}
              className="flex flex-row items-center font-bold"
              onClick={() => {
                handleReopen(item);
              }}
            >
              <Image
                src={iconReference[item]}
                alt={"item"}
                width={20}
                height={20}
              />
              <p className="pl-2">{item}</p>
            </button>
          ))}
        </div>
      </div>
      <div className=" status-bar text-base">
        <p className="status-bar-field h-full flex justify-center items-center">
          {date.toLocaleTimeString("en-US").replace(/(.*)\D\d+/, "$1")}
        </p>
      </div>
    </div>
  );
}

export default TaskBar;
