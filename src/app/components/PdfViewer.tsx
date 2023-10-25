"use client";
import Image from "next/image";
// components/PDFViewer.js

const PDFViewer = () => {
  return (
    <div className="max-w-[88vw] window-body max-h-[80vh]">
      <a href="/CalebResume.pdf" download="CalebBrattonResume">
        <button>Download Resume</button>
      </a>
      <Image src="/CalebResume.png" alt="Resume" width={600} height={600} />
    </div>
  );
};

export default PDFViewer;
