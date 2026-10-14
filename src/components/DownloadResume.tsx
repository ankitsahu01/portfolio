import React from "react";
import Button from "./common/Button";
import { MdDownload } from "react-icons/md";

const DownloadResume: React.FC = () => {
  return (
    <Button
      href="/resume.pdf"
      download="AnkitSahu_Resume"
      variant="primary"
      size="md"
    >
      <span>Download Resume</span>
      <MdDownload className="text-base" />
    </Button>
  );
};

export default DownloadResume;