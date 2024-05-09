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
            name: "Golang",
            src: "/golang.png",
            link: "https://go.dev/doc/",
          },
          {
            name: "Typescript",
            src: "/typescript.png",
            link: "https://www.typescriptlang.org/docs/",
          },
          {
            name: "React",
            src: "/react.png",
            link: "https://react.dev/reference/react",
          },
          {
            name: "Java",
            src: "/java.png",
            link: "https://docs.oracle.com/javase/8/docs/api/",
          },
          {
            name: "Python",
            src: "/python.png",
            link: "https://docs.python.org/3/",
          },
          {
            name: "AWS",
            src: "/aws.png",
            link: "https://docs.aws.amazon.com/",
          },
        ].map((item) => {
          return (
            <a href={item.link} target="_blank">
              <div
                key={item.name}
                className="flex flex-col font-bold justify-center items-center"
              >
                <p>{item.name}</p>
                <Image
                  src={item.src || "/defaultProfile.jpg"}
                  alt={item.name}
                  height={80}
                  width={80}
                />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </div>
);

export default Friends;
