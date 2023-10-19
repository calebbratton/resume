import Image from "next/image";
// import file98 from "/file98.png";
// import explorer from "/explorer.png";
import { ReactEventHandler, ReactNode, useContext } from "react";
import SkillsWindow from "./components/ResumeWindow";
import { AppWindow } from "@/types/main";
import { WindowContext } from "@/context/context";

const Screen = () => {
  const { windows, setWindows } = useContext(WindowContext);
  const iconClickHandler = (app: string) => {
    if (app && windows) {
      setWindows({ ...windows, [app]: true });
    }
  };
  return (
    <div className="flex flex-start h-full">
      <div className="grid grid-col-2 gap-8 grid-flow-row p-4 text-white">
        <div
          className="flex flex-col justify-center items-center"
          onClick={() => iconClickHandler("Resume")}
        >
          <Image alt="Resume" width={60} height={60} src="/file98.png" />

          <p>Resume</p>
        </div>
        <div
          className="flex flex-col justify-center items-center"
          onClick={() => iconClickHandler("Internet Explorer")}
        >
          <Image
            alt="Internet Explorer"
            width={60}
            height={60}
            src="/explorer.png"
          />
          <p>Internet Explorer</p>
        </div>
      </div>
    </div>
  );
};

export default Screen;
