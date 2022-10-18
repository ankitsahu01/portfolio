import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../../assets/resume.pdf";
import DownloadResume from "../DownloadResume";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div className="pt-24 flex justify-center gap-4">
        <DownloadResume />
      </div>
      <Document file={resume} className="py-6 flex justify-center">
        <Page
          pageNumber={1}
          scale={width > 786 ? 1.7 : 0.6}
          loading="Loading Ankit Sahu's Resume"
        />
      </Document>
      <div className="pb-6 flex justify-center gap-4">
        <DownloadResume />
      </div>
    </>
  );
};

export default Resume;
