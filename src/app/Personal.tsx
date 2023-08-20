import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import caleb from "../public/photos/caleb.jpg";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import DarkModeSwitcher from "./DarkModeSwitcher.jsx";

const Personal = () => {
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">
          Caleb Bratton
        </h2>
        <h3 className="text-2xl py-2">Software Engineer</h3>
        <p className="text-md py-5 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillLinkedin />
        <AiFillTwitterCircle />
      </div>
      <div className="relative bg-white mx-auto w-40 h-40 rounded-full overflow-hidden">
        <Image alt="caleb in yosemite" src={caleb} objectFit="cover" />
      </div>
    </>
  );
};

export default Personal;
