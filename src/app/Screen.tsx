import Image from "next/image";
import file98 from "../public/photos/file98.png";
import { ReactEventHandler, ReactNode } from "react";
import SkillsWindow from "./components/SkillsWindow";

interface Apps {
  [key: string]: ReactNode;
}

interface ScreenProps {
  openApps: Apps;
  setOpenApps: (app: Apps) => void;
}

const Screen = ({ openApps, setOpenApps }: ScreenProps) => {
  const iconClickHandler = (app: Apps) => {
    setOpenApps({ ...openApps, ...app });
  };
  return (
    <div className="grid p-4">
      {Object.values(openApps)}
      <ul>
        <li
          className="flex"
          value={"resume"}
          onClick={() => iconClickHandler({ Resume: <SkillsWindow /> })}
        >
          <Image alt="Resume" width={80} height={80} src={file98} />
          {/* <p>Resume</p> */}
        </li>
      </ul>
    </div>
  );
};

export default Screen;
