import Image from "next/image";
import uxui from "../public/photos/uxui.png";
import backend from "../public/photos/backend.png";
import CrawlerText from "./components/CrawlerText";
const Experience = () => {
  return (
    <>
      <div>
        {/* <CrawlerText /> */}
        <div className="text-center bg-slate-700/40 shadow-lg p-10 my-10 rounded-xl">
          <h3 className="text-white text-lg font-medium">Tech Enthusiast: </h3>
          <p className="text-white">
            My technical toolkit includes JavaScript, TypeScript, React, Go, and
            more. I thrive on solving complex problems and am always eager to
            explore new technologies.
          </p>
        </div>
        <div className="text-center bg-slate-700/40 shadow-lg p-10 my-10 rounded-xl">
          <h3 className="text-white text-lg font-medium">
            Music & Nature Lover:{" "}
          </h3>
          <p className="text-white">
            When I'm not immersed in code, you'll often find me strumming my
            guitar, creating melodies that resonate with my love for music. I'm
            equally at home in the great outdoors, where I find inspiration and
            adventure.
          </p>
        </div>
        <div className="text-center bg-slate-700/40 shadow-lg p-10 my-10 rounded-xl">
          <h3 className="text-white text-lg font-medium">
            Professional Achievements:{" "}
          </h3>
          <p className="text-white">
            At Dish Network, I've had the opportunity to develop a proof of
            concept, optimize build sizes, and work with serverless event-based
            APIs. I've honed my skills in integration and unit testing, ensuring
            robust and reliable solutions. Additionally, I've proudly shared my
            knowledge as a Software Engineer In Residence at Hack Reactor.
          </p>
        </div>
        <div className="text-center bg-slate-700/40 shadow-lg p-10 my-10 rounded-xl">
          <h3 className="text-white text-lg font-medium">
            Customer-Centric Background:{" "}
          </h3>
          <p className="text-white">
            Prior to my tech career, I spent years as a Flight Attendant with
            United Airlines, where I learned the value of exceptional customer
            service and safety adherence.
          </p>
        </div>
        <div className="text-center bg-slate-700/40 shadow-lg p-10 my-10 rounded-xl">
          <h3 className="text-white text-lg font-medium">
            Passion for Growth:{" "}
          </h3>
          <p className="text-white">
            I thrive in collaborative environments, am always eager to learn,
            and love sharing knowledge with others. Let's connect, innovate, and
            create remarkable digital experiences together. Welcome to my
            portfolio, where you can explore my professional journey, projects,
            and personal passions. Feel free to reach out; I'm excited to
            connect and explore new opportunities!
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
