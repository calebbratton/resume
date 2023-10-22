"use client";
import React, { useState, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// components/PDFViewer.js

const PDFViewer = () => {
  return (
    <div className="max-w-[88vw] max-h-[75vh]">
      <Document file="/CalebResume.pdf">
        <Page
          renderTextLayer={false}
          renderAnnotationLayer={false}
          pageNumber={1}
        />
      </Document>
    </div>
  );
};

export default PDFViewer;
