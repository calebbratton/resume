import Image from "next/image";
const Friends = () => (
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
                src={item.src || "/defaultProfile.jpg"}
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
);

export default Friends;
