import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import WindowComponent from "./WindowComponent";
import { signIn, signOut, useSession } from "next-auth/react";
import { FriendComment } from "@/types/main";

const Explorer = () => {
  const { status, data } = useSession();
  const [friendComments, setFriendComments] = useState<FriendComment[]>([]);
  const [commenting, setCommenting] = useState(false);
  const [message, setMessage] = useState("");
  const age = Math.floor(
    (Number(new Date()) - Number(new Date("1992-12-10"))) / 31557600000
  );

  const addComment = async (user: {
    name: string;
    image: string;
    message: string;
    createdAt: Date;
  }) => {
    if (user) {
      const res = await fetch("/api/comment/", {
        method: "POST",
        body: JSON.stringify({
          name: user.name,
          image: user.image,
          message: message,
          createdAt: user.createdAt,
        }),
      });
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch("/api/comment/", { method: "GET" });

      const comments = await res.json();
      setFriendComments(comments);
    };

    fetchComments();
  }, []);
  return (
    <WindowComponent
      className="mx-2 max-h-[80vh] max-w-[90vw] w-[1200px]"
      title="Internet Explorer"
    >
      <div className="flex max-w-[1000px] w-full h-full flex-col bg-white font-verdana antialiased font-normal pb-4">
        <div className="flex px-8 flex-row flex-wrap justify-between py-2 items-center bg-bannerBlue">
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

            <div className="mt-4 border-2 border-bannerBlue">
              <div className="text-white font-bold px-4 bg-bannerBlue">
                Caleb's Interests
              </div>
              <div className="grid grid-cols-4 pt-0.5 gap-0.5 grid-flow-row text-sm">
                <div className="bg-detailTitleBg px-2 font-bold text-detailTitle">
                  General
                </div>
                <div className="bg-detailInfoBg px-2 col-span-3">
                  I love coding, climbing, snowboarding, fall weather, music,
                  and my wife (hey babe).
                </div>
                <div className="bg-detailTitleBg px-2 font-bold text-detailTitle">
                  Work History
                </div>
                <div className="bg-detailInfoBg px-2 col-span-3">
                  My current work at Dish Network has provided me with many
                  opportunities. I have worked on well-established backend
                  projects for Sling TV, as well as greenfield research
                  projects, taking an idea from zero to one.
                </div>
                <div className="bg-detailTitleBg px-2 font-bold text-detailTitle">
                  Music
                </div>
                <div className="bg-detailInfoBg px-2 col-span-3">
                  I love everything; from hardcore, punk, and indie rock to
                  country, folk, and R&B. I find almost all music enjoyable. I
                  am currently listening to a lot of indie rock. Alex G and Men
                  I Trust have frequently been on my playlist.
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
            <div>
              <div className="bg-bannerOrange text-titleOrange font-bold text-base p-2">
                Caleb's Friend Space
              </div>
              <div className="mt-4">
                <div className="grid grid-cols-4 grid-flow-row gap-x-2 gap-y-4">
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
                      <div
                        key={item.name}
                        className="flex flex-col justify-center items-center"
                      >
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
            <div className="mt-4 pb-8">
              <div className="bg-bannerOrange text-titleOrange font-bold text-base p-2">
                Caleb's Friends Comments
              </div>
              <div className="py-4 px-4 font-bold">
                <div className="flex flex-row flex-wrap justify-between">
                  <div className="flex flex-row flex-wrap">
                    Displaying {friendComments.length} of{" "}
                    {friendComments.length} comments{" "}
                    <div className="flex flex-row">
                      (<p className=" text-blue-700 px-1">View All </p>|
                      <div className="flex flex-col">
                        <p
                          className="cursor-pointer text-blue-700 px-1"
                          onClick={() => {
                            if (status === "authenticated") {
                              setCommenting(!commenting);
                            } else {
                              signIn("linkedin");
                            }
                          }}
                        >
                          Add Comment{" )"}
                        </p>
                        <p className="text-[8px]">
                          (requires LinkedIn sign in)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      status !== "authenticated" ? "hidden" : ""
                    } cursor-pointer text-blue-700`}
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-1 h-30">
                <div
                  className={`flex col-span-1 p-4 flex-col gap-y-2 items-center justify-center bg-profileOrange ${
                    status === "authenticated" || status === "loading"
                      ? ""
                      : "hidden"
                  }`}
                >
                  <p className="text-sm text-blue-700">{data?.user?.name}</p>
                  <Image
                    src={data?.user?.image as string}
                    alt="user image"
                    height={100}
                    width={100}
                  />
                </div>
                <form
                  className={`${
                    status === "authenticated" || status === "loading"
                      ? ""
                      : "hidden"
                  } bg-white items-center text-sm flex flex-col justify-end font-veranda col-span-3`}
                >
                  <textarea
                    id="comment"
                    className="h-full w-full"
                    placeholder="Add your comment"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                  <button
                    value="Add Comment"
                    onClick={() => {
                      let user;
                      if (data && data.user) {
                        user = {
                          name: data.user?.name || "",
                          image: data.user?.image || "",
                          message: message,
                          createdAt: new Date(),
                        };
                        addComment(user);
                      }
                    }}
                  />
                </form>
                {friendComments.length > 0
                  ? friendComments.map((comment, index) => {
                      return (
                        <Fragment key={comment.name + index}>
                          <div className="flex col-span-1 p-4 flex-col gap-y-2 items-center justify-center bg-profileOrange">
                            <p className="text-sm text-blue-700">
                              {comment.name}
                            </p>
                            <Image
                              src={comment.image as string}
                              alt="user image"
                              height={100}
                              width={100}
                            />
                          </div>
                          <div className="flex bg-message items-center text-sm p-4 col-span-3">
                            <div className="flex flex-col">
                              <p className="text-xs font-bold pb-4">
                                {comment.createdAt
                                  ? new Date(
                                      comment.createdAt
                                    ).toLocaleDateString("en-US")
                                  : null}
                              </p>
                              <p>{comment.message}</p>
                            </div>
                          </div>
                        </Fragment>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowComponent>
  );
};

export default Explorer;
