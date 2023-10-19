import React, { ReactNode } from "react";
import Image from "next/image";
import "98.css";
import startLogo from "../public/photos/windowsLogo.png";
import { Apps } from "@/types/main";

interface TaskBarProps {
  children?: ReactNode[];
}

function TaskBar({ children }: TaskBarProps) {
  const date = new Date();
  return (
    <div className="flex flex-row px-2 justify-between py-1 fixed bottom-0 w-full bg-gray-300 border-t-2 border-gray-500">
      <div className="flex flex-row">
        <button className="flex flex-row items-center text-sm font-sans cursor-pointer">
          <p className="pr-2">Start</p>
          <Image alt="startLogo" src={startLogo} width={20} height={20} />
        </button>
        <div className="status-bar text-sm pl-2">
          {children?.map((item) => (
            <p className="status-bar-field w-40 font-bold">{item}</p>
          ))}
        </div>
      </div>
      <div className="status-bar text-sm">
        <p className="status-bar-field">
          {date.toLocaleTimeString("en-US").replace(/(.*)\D\d+/, "$1")}
        </p>
      </div>
    </div>
  );
}

export default TaskBar;
