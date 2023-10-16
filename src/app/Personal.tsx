import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import caleb from "../public/photos/caleb.jpg";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import "./typewriter.css";

const Personal = () => {
  return (
    <div className="flex flex-col px-10 justify-evenly py-10 h-screen">
      <div className="text-center">
        <h2 className="lg:text-5xl font-starwars text-4xl text-yellow-400 font-medium">
          Caleb Bratton
        </h2>
        <h3 className="text-xl font-starwars text-yellow-400 py-2">
          Software Engineer
        </h3>
      </div>
      <div className="bg-transparent mx-auto overflow-hidden">
        <Image
          alt="caleb in yosemite"
          className="rounded-full"
          src={caleb}
          objectFit="cover"
          height={"200"}
        />
      </div>
      <p className="text-md text-center px-10 py-5 text-white leading-8">
        I'm Caleb Bratton, a versatile software engineer based in Denver,
        Colorado, with a passion for creating innovative digital experiences. My
        journey in the tech world has been a dynamic one, and I bring a unique
        blend of skills, creativity, and a zest for life to every project I
        undertake.
      </p>
      <div className="text-5xl text-white flex justify-center gap-16 py-3">
        <AiFillLinkedin />
        <AiFillTwitterCircle />
      </div>
    </div>
  );
};

export default Personal;
