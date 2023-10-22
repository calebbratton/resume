import React, { ReactNode, useContext, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import "98.css";
// import startLogo from "/windowsLogo.png";
import { WindowContext } from "../context/context";

const iconReference: { [key: string]: string } = {
  "Internet Explorer": "/explorerPage.png",
  Resume: "/file98.png",
};

function TaskBar() {
  const { windows, setWindows } = useContext(WindowContext);
  const [startMenu, setStartMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const date = new Date();
  const handleReopen = (item: string) => {
    setWindows({ ...windows, [item]: true });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        className={`${
          startMenu ? "" : "hidden"
        } flex flex-row absolute window bottom-9 z-50`}
      >
        <div className="w-12 flex flex-col bg-blue-800 text-white"></div>
        <div className="flex flex-col justify-end w-full h-full">
          <a
            href="https://github.com/calebbratton"
            target="_blank"
            className="flex flex-row w-full text-black items-end text-sm p-2"
          >
            <Image src="/github.png" alt="github" width={30} height={30} />
            <div className="flex flex-row w-full pl-2">
              <p className="underline decoration-solid">G</p>
              <p>itHub</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/calebabratton/"
            target="_blank"
            className="flex flex-row w-full text-black items-end text-sm p-2"
          >
            <Image src="/linkedin.png" alt="github" width={30} height={30} />
            <div className="flex flex-row w-full pl-2">
              <p className="underline decoration-solid">L</p>
              <p>inkedIn</p>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-row px-2 h-10 justify-between py-1 fixed bottom-0 w-screen bg-gray-300 border-t-2 border-gray-500">
        <div className="flex flex-row">
          <button
            className="flex flex-row items-center text-base font-sans cursor-pointer"
            onClick={() => {
              setStartMenu(!startMenu);
            }}
          >
            <Image
              alt="startLogo"
              src="/windowsLogo.png"
              width={20}
              height={20}
            />
            <p className="pl-2">Start</p>
          </button>
          <div className="status-bar text-base">
            {Object.keys(windows).map((item: string) => (
              <button
                key={item}
                className={`${
                  windows[item] ? "status-bar-field" : ""
                } flex flex-row items-center font-bold`}
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
                <p className="px-2 truncate">{item}</p>
              </button>
            ))}
          </div>
        </div>
        <div className=" status-bar text-base">
          <p className="status-bar-field flex-shrink-0 h-full flex justify-center items-center">
            {currentTime.toLocaleTimeString("en-US").replace(/(.*)\D\d+/, "$1")}
          </p>
        </div>
      </div>
    </>
  );
}

export default TaskBar;
