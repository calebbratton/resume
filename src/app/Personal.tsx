import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import caleb from "../public/photos/caleb.jpg";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import DarkModeSwitcher from "./DarkModeSwitcher.jsx";

const Personal = () => {
  return (
    <>
      <div className="text-center overflow-hidden p-10">
        <h2 className="lg:text-5xl font-starwars text-4xl text-yellow-400 font-medium">
          Caleb Bratton
        </h2>
        <h3 className="text-xl font-starwars text-yellow-400 py-2">
          Software Engineer
        </h3>
        <p className="text-md py-5 text-white leading-8">
          Hello! I'm Caleb Bratton, a versatile software engineer based in
          Denver, Colorado, with a passion for creating innovative digital
          experiences. My journey in the tech world has been a dynamic one, and
          I bring a unique blend of skills, creativity, and a zest for life to
          every project I undertake.
        </p>
      </div>
      <div className="relative bg-black mx-auto w-40 h-40 rounded-full overflow-hidden">
        <Image alt="caleb in yosemite" src={caleb} objectFit="cover" />
      </div>
      <div className="text-5xl text-white flex justify-center gap-16 py-3">
        <AiFillLinkedin />
        <AiFillTwitterCircle />
      </div>
    </>
  );
};

export default Personal;
