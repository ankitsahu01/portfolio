"use client";
import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import DownloadResume from "../DownloadResume";
import Loader from "../Loader";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="pt-24 flex justify-center gap-4">
        <DownloadResume />
      </div>
      <Document
        file="/resume.pdf"
        className="py-6 flex justify-center"
        loading={<Loader message="Loading Resume..." />}
      >
        <Page
          pageNumber={1}
          scale={width > 786 ? 1.7 : 0.6}
          loading={<Loader message="Loading Resume..." />}
        />
      </Document>
      <div className="pb-6 flex justify-center gap-4">
        <DownloadResume />
      </div>
    </>
  );
};

export default Resume;
