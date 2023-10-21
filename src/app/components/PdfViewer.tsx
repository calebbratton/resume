"use client";
import React, { useState, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "./pdfViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// components/PDFViewer.js

const PDFViewer = () => {
  return (
    <div className="pdf-viewer-container">
      <Document file="/CalebResume.pdf">
        <Page
          width={300}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          pageNumber={1}
        />
      </Document>
    </div>
  );
};

export default PDFViewer;
