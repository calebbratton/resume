import Image from "next/image";
import uxui from "../public/photos/uxui.png";
import backend from "../public/photos/backend.png";
const Experience = () => {
  return (
    <section>
      <div>
        <h3 className="underline text-3xl py-1">Experience</h3>
        <p className="text-md py-5 leading-8">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image src={uxui} alt="" width={100} height={100} />
          <h3 className="text-lg font-medium">Ux Ui</h3>
          <p>Creating user friendly front end websites</p>
          <p>Using tools like:</p>
          <ul>
            <li>React</li>
            <li>Tailwind</li>
            <li>Next.js</li>
            <li>Css</li>
            <li>HTML</li>
            <li></li>
          </ul>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image src={backend} alt="" width={100} height={100} />
          <h3 className="text-lg font-medium">Ux Ui</h3>
          <p>Creating user friendly front end websites</p>
          <p>Using tools like:</p>
          <ul>
            <li>React</li>
            <li>Tailwind</li>
            <li>Next.js</li>
            <li>Css</li>
            <li>HTML</li>
            <li></li>
          </ul>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image src={uxui} alt="" width={100} height={100} />
          <h3 className="text-lg font-medium">Ux Ui</h3>
          <p>Creating user friendly front end websites</p>
          <p>Using tools like:</p>
          <ul>
            <li>React</li>
            <li>Tailwind</li>
            <li>Next.js</li>
            <li>Css</li>
            <li>HTML</li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
