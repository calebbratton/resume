import Image from "next/image";
import Head from "next/head";
import Experience from "./Experience";
import Personal from "./Personal";
import ThemeContext from "../context/ThemeContext";
import Nav from "./Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Caleb Bratton Software Engineer</title>
        <meta name="description" content="tailwind" />
      </Head>
      <ThemeContext>
        <main className="bg-background px-20 md:px-20 lg:px-40">
          <section className="min-h-screen">
            <Nav />
            <Personal />
          </section>

          <Experience />
        </main>
      </ThemeContext>
    </div>
  );
}
