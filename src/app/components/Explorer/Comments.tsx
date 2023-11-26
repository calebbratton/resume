import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { FriendComment } from "@/types/main";
import { signIn, signOut, useSession } from "next-auth/react";

const Comments = () => {
  const [friendComments, setFriendComments] = useState<FriendComment[]>([]);
  const { status, data } = useSession();
  const session = data;

  const [commenting, setCommenting] = useState(false);
  const [message, setMessage] = useState("");

  const fetchComments = async () => {
    const res = await fetch("/api/comment/", { method: "GET" });

    let comments = await res.json();
    const c = comments.map((c: FriendComment) => {
      return {
        ...c,
        createdAt: new Date(c.createdAt).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          // weekday: "long",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
    });
    setFriendComments(c);
  };

  const addComment = async (user: {
    name: string;
    image: string;
    message: string;
    createdAt: Date;
  }) => {
    if (user) {
      await fetch("/api/comment/", {
        method: "POST",
        body: JSON.stringify({
          name: user.name,
          image: user.image,
          message: message,
          createdAt: user.createdAt,
        }),
      });
      fetchComments();
    }
  };

  const deleteComment = async (id: string) => {
    if (id) {
      await fetch("/api/comment/", {
        method: "PUT",
        body: JSON.stringify({
          id: id,
        }),
      });
      fetchComments();
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="mt-4 pb-8">
      <div className="bg-bannerOrange text-titleOrange font-bold text-base p-2">
        Caleb's Friends Comments
      </div>
      <div className="py-4 px-4 font-bold">
        <div className="flex flex-row flex-wrap justify-between">
          <div className="flex flex-row flex-wrap">
            Displaying {friendComments.length} of {friendComments.length}{" "}
            comments{" "}
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
                <p className="text-[8px]">(requires LinkedIn sign in)</p>
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
            (status === "authenticated" || status === "loading") && commenting
              ? ""
              : "hidden"
          }`}
        >
          <p className="text-sm text-blue-700">{session?.user?.name}</p>
          <Image
            src={session?.user?.image || "/defaultProfile.jpg"}
            alt="user image"
            height={100}
            width={100}
          />
        </div>
        <div
          className={`${
            (status === "authenticated" || status === "loading") && commenting
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
            className="cursor-pointer"
            onClick={() => {
              addComment({
                name: session?.user?.name || "",
                image: session?.user?.image || "",
                message: message,
                createdAt: new Date(),
              });
              setCommenting(false);
            }}
          >
            Submit
          </button>
        </div>
        {friendComments.length > 0
          ? friendComments.map((comment) => {
              return (
                <Fragment key={comment.id}>
                  <div className="flex col-span-1 p-4 flex-col gap-y-2 items-center justify-center bg-profileOrange">
                    <p className="text-sm text-blue-700">{comment.name}</p>
                    <Image
                      src={comment.image as string}
                      alt="user image"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="flex flex-col justify-center bg-message px-5 text-sm col-span-3">
                    <div className="flex flex-col">
                      <p className="text-xs font-bold pb-4">
                        {comment.createdAt ? comment.createdAt : null}
                      </p>
                      <p>{comment.message}</p>
                    </div>
                    {session && (
                      <div
                        className={`${
                          session?.user.email === "calebabratton@gmail.com" &&
                          session.user.email
                            ? ""
                            : "hidden"
                        } flex w-full flex-row justify-end cursor-pointer`}
                      >
                        <button onClick={() => deleteComment(comment.id)}>
                          Delete Comment
                        </button>
                      </div>
                    )}
                  </div>
                </Fragment>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Comments;
