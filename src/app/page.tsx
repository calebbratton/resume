import Image from "next/image";
import Head from "next/head";
import Experience from "./Experience";
import Personal from "./Personal";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Caleb Bratton Software Engineer</title>
        <meta name="description" content="tailwind" />
      </Head>
      <main className="px-20 md:px-20 lg:px-40">
        <Personal />
        <Experience />
      </main>
    </div>
  );
}
