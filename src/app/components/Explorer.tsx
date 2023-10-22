import Image from "next/image";
import WindowComponent from "./WindowComponent";

const Explorer = () => {
  return (
    <WindowComponent className="h-[70vh]" title="Internet Explorer">
      <div className="flex w-full flex-col bg-white font-sans pb-4">
        <div className="flex px-8 flex-row flex-wrap justify-between py-2 items-center bg-blue-400">
          <p className="text-white font-bold">Home</p> |{" "}
          <p className="text-white font-bold">Browse</p> |{" "}
          <p className="text-white font-bold">Search</p> |{" "}
          <p className="text-white font-bold">Invite</p> |{" "}
          <p className="text-white font-bold">Film</p> |{" "}
          <p className="text-white font-bold">Mail</p> |{" "}
          <p className="text-white font-bold">Blog</p> |{" "}
          <p className="text-white font-bold">Favorites</p> |
          <p className="text-white font-bold">Forum</p> |{" "}
          <p className="text-white font-bold">Groups</p> |{" "}
          <p className="text-white font-bold">Events</p> |{" "}
          <p className="text-white font-bold">Videos</p> |{" "}
          <p className="text-white font-bold">Music</p> |{" "}
          <p className="text-white font-bold">Classifieds</p>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col pt-4 md:px-24">
          <div className="flex flex-col px-4 w-full md:w-2/3">
            <div className="flex flex-row">
              <div>
                <p className="font-bold text-xl">Caleb</p>
                <Image src="/caleb.jpg" width={200} height={200} alt="me" />
                View My: <a>Pics</a> | <a>Videos</a>
              </div>
              <div className="flex flex-col text-sm pl-4 mt-10">
                <p>:-)</p>
                <p>31 years old</p>
                <p>Denver,</p>
                <p>COLORADO</p>
                <p>United States</p>
                <div className="mt-4">
                  Last Login:
                  {new Date(Date.now()).toLocaleString().split(",")[0]}
                </div>
              </div>
            </div>
            <div className="flex flex-col shrink w-full mt-4 border-4 border-blue-400">
              <div className="text-white font-bold px-4 bg-blue-400">
                Contacting Caleb
              </div>
              <div className="grid grid-cols-4 grid-rows-2 gap-4 p-4">
                {/* Row 1 */}
                <a>Send Message</a>
                <a>Add to Friends</a>
                <a>Instant Message</a>
                <a>Add to Group</a>

                {/* Row 2 */}
                <a>Forward to Friend</a>
                <a>Add to Favorites</a>
                <a>Block User</a>
                <a>Rank User</a>
              </div>
            </div>

            <div className="mt-4 ">
              <div className="text-white font-bold px-4 bg-blue-400">
                Caleb's Interests
              </div>
              <div className="grid grid-cols-4 pt-0.5 gap-0.5 grid-flow-row text-sm">
                <div className="bg-blue-300 px-2 font-bold text-blue-600">
                  General
                </div>
                <div className="bg-blue-200 px-2 col-span-3">
                  I love coding, climbing, snowboarding, fall weather, music,
                  and my wife (hey babe).
                </div>
                <div className="bg-blue-300 px-2 font-bold text-blue-600">
                  Work History
                </div>
                <div className="bg-blue-200 px-2 col-span-3">
                  My current work at Dish Network has provided me with many
                  opportunities. I have worked on well-established backend
                  projects for Sling TV, as well as greenfield research
                  projects, taking an idea from zero to one.
                </div>
                <div className="bg-blue-300 px-2 font-bold text-blue-600">
                  Music
                </div>
                <div className="bg-blue-200 px-2 col-span-3">
                  I love everything; from hardcore, punk, and indie rock to
                  country, folk, and R&B. I find almost all music enjoyable. I
                  am currently listening to a lot of indie rock. "Alex G" and
                  "Men I Trust" have frequently been on my playlist.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 w-full">
            <div className="w-full mt-8">
              <div className="flex flex-row text-base justify-center border-2 border-black p-6">
                <p>Caleb is in your extended network</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-orange-300 text-orange-700 font-bold text-base p-2">
                Caleb's Blurbs
              </div>
              <div className="px-4 pt-4 pb-8">
                <p className="text-orange-700 font-bold text-base">About Me:</p>
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
            <div>
              <div className="bg-orange-300 text-orange-700 font-bold text-base p-2">
                Caleb's Friend Space
              </div>
              <div className="">
                <div className="grid grid-cols-4 grid-flow-row gap-2">
                  {[
                    {
                      name: "Javascript",
                      src: "/javascript.png",
                    },
                    {
                      name: "Golang",
                      src: "/golang.png",
                    },
                    {
                      name: "React",
                      src: "/react.png",
                    },
                    {
                      name: "Java",
                      src: "/java.png",
                    },
                    {
                      name: "Python",
                      src: "/python.png",
                    },
                    {
                      name: "AWS",
                      src: "/aws.png",
                    },
                  ].map((item) => {
                    return (
                      <div className="flex flex-col items-center">
                        <p>{item.name}</p>
                        <Image
                          src={item.src}
                          alt={item.name}
                          height={80}
                          width={80}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowComponent>
  );
};

export default Explorer;
