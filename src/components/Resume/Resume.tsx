"use client";
import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import DownloadResume from "../DownloadResume";
import Loader from "../Loader";
import SectionHeading from "../common/SectionHeading";
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
    <div className="min-h-screen pt-28 pb-16 px-4 max-w-5xl mx-auto flex flex-col items-center">
      <SectionHeading
        align="center"
        eyebrow="ENGINEERING CREDENTIALS"
        title="Resume &amp; Qualifications"
        subtitle="Verified track record across modern frontend architecture, cloud platforms, and workflow automation."
      />

      <div className="py-2 flex justify-center gap-4">
        <DownloadResume />
      </div>

      <div className="w-full flex justify-center py-6">
        <div className="rounded-2xl border border-white/10 p-2 sm:p-4 bg-surface-raised shadow-2xl">
          <Document
            file="/resume.pdf"
            className="flex justify-center"
            loading={<Loader message="Loading Resume..." />}
          >
            <Page
              pageNumber={1}
              renderTextLayer={false}
              scale={width > 786 ? 1.5 : 0.6}
              className="rounded-xl overflow-hidden shadow-lg [&>canvas]:rounded-xl"
              loading={<Loader message="Loading Resume..." />}
            />
          </Document>
        </div>
      </div>

      <div className="pt-6 flex justify-center gap-4">
        <DownloadResume />
      </div>
    </div>
  );
};

export default Resume;
