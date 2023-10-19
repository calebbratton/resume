import Image from "next/image";
import WindowComponent from "./WindowComponent";

const Explorer = () => {
  return (
    <WindowComponent className="w-3/4" title="Internet Explorer">
      <div className="flex w-full flex-col bg-white overflow-auto">
        <div className="flex px-8 flex-row flex-wrap justify-between h-6 items-center bg-blue-400">
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
        <div className="flex lg:flex-row md:flex-row flex-col p-4">
          <div className="flex flex-col full md:w-1/3">
            <div className="flex flex-row">
              <div>
                <p className="font-bold text-xl">Caleb</p>
                <Image src="/caleb.jpg" width={200} height={200} alt="me" />
                View My: <a>Pics</a> | <a>Videos</a>
              </div>
              <div className="flex flex-col px-4 mt-10">
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
            <div className="flex flex-col w-full mt-4 border-4 border-blue-400">
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

            <div className="mt-4 border-2 border-blue-400">
              <p className="font-bold">CalebSpace URL:</p>
              <p>https://calebbratton.com</p>
            </div>

            <div className="mt-4 ">
              <div className="text-white font-bold px-4 bg-blue-400">
                Caleb's Experience
              </div>
            </div>
          </div>
          <div className="flex flex-col w-2/3 mx-10">
            <div className="w-full mt-8">
              <div className="flex flex-row text-center text-base justify-center border-2 border-black p-6">
                <p>Caleb is in your extended network</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-orange-300 text-orange-700 font-bold p-2">
                Caleb's Blurbs
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowComponent>
  );
};

export default Explorer;
