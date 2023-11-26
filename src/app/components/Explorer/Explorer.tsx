import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import WindowComponent from "../WindowComponent";
import { FriendComment } from "@/types/main";
import Interests from "./Interests";
import Friends from "./Friends";
import Comments from "./Comments";

const Explorer = () => {
  const age = Math.floor(
    (Number(new Date()) - Number(new Date("1992-12-10"))) / 31557600000
  );

  return (
    <WindowComponent
      className="mx-2 max-h-[80vh] max-w-[90vw] w-[1200px]"
      title="Internet Explorer"
    >
      <div className="flex max-w-[1000px] w-full h-full flex-col bg-white font-verdana antialiased font-normal pb-4">
        <div className="flex px-4 py-2 flex-row text-white flex-wrap items-center bg-blue-700">
          <div className="flex flex-col">
            <p className="font-bold text-base">CalebSpace</p>
            <p className="text-[8px]">
              a tribute to MySpace, where my coding journey started
            </p>
          </div>
        </div>
        <div className="flex px-8 h-6 flex-row flex-wrap justify-between py-2 items-center bg-bannerBlue" />
        <div />
        <div className="flex lg:flex-row md:flex-row flex-col pt-4">
          <div className="flex flex-col px-4 w-full md:w-2/3">
            <div className="flex flex-row">
              <div>
                <p className="font-bold text-xl">Caleb</p>
                <Image src="/caleb.jpg" width={200} height={200} alt="me" />
                View My: <a>Pics</a> | <a>Videos</a>
              </div>
              <div className="flex flex-col text-sm pl-4 mt-10">
                <p>:-)</p>
                <p>{age} years old</p>
                <p>Denver,</p>
                <p>COLORADO</p>
                <p>United States</p>
                <div className="mt-4">
                  Last Login:
                  {new Date(Date.now()).toLocaleString().split(",")[0]}
                </div>
              </div>
            </div>
            <div className="flex flex-col shrink w-full mt-4 border-4 border-bannerBlue">
              <div className="text-white font-bold px-4 bg-bannerBlue">
                Contacting Caleb
              </div>
              <div className="flex flex-row justify-evenly py-4">
                {/* Row 1 */}
                <a href="mailto:bratton.dev@gmail.com">
                  <Image
                    src="/sendMailIcon.gif"
                    alt="Send Message"
                    height={35}
                    width={138}
                  />
                </a>
                <div
                  className="cursor-pointer"
                  onClick={async () => {
                    await navigator.share({
                      title: "Caleb Bratton",
                      text: "Check out Caleb's resume!",
                      url: "https://calebbratton.com",
                    });
                  }}
                >
                  <Image
                    src="/forwardMailIcon.gif"
                    alt="Forward to Friend"
                    height={35}
                    width={138}
                  />
                </div>
                {/* <a>Add to Friends</a>
                <a>Instant Message</a>
                <a>Add to Group</a> */}

                {/* Row 2 */}
                {/* <a>Forward to Friend</a> */}
                {/* <a>Add to Favorites</a>
                <a>Block User</a>
                <a>Rank User</a> */}
              </div>
            </div>

            <Interests />
          </div>
          <div className="flex flex-col px-4 w-full">
            <div className="w-full mt-8">
              <div className="flex flex-row text-base justify-center border-2 border-black p-6">
                <p>Caleb is in your extended network</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-bannerOrange text-titleOrange font-bold text-base p-2">
                Caleb's Blurbs
              </div>
              <div className="px-4 pt-4 pb-8">
                <p className="text-titleOrange font-bold text-base">
                  About Me:
                </p>
                <p className="text-sm">
                  I'm Caleb, a versatile software engineer living in Denver,
                  Colorado. Before becoming an engineer, I was a flight
                  attendant at United Airlines for 6 years. During that time, I
                  had the opportunity to visit beautiful countries and meet
                  amazing people. When COVID struck, I seized the opportunity to
                  learn a new skill: software development. What I enjoy most
                  about software engineering is the people I get to work with.
                  Collaborating with individuals who have cultivated a growth
                  mindset is something I truly appreciate. Getting to learn new
                  skills and bettering myself every day is my favorite part of
                  being an engineer.
                </p>
              </div>
            </div>
            <Friends />
            <Comments />
          </div>
        </div>
      </div>
    </WindowComponent>
  );
};

export default Explorer;
