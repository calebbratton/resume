import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import profilePic from "../public/photos/me.jpg";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
const Nav = () => {
  return (
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl">Caleb Bratton</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded ml-8"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
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
      <div className="relative h-100">
        <Image
          alt="Caleb Bratton in Yosemite"
          layout="fill"
          objectFit="cover"
          src={profilePic}
        />
      </div>
    </section>
  );
};

export default Nav;
