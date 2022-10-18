import resume from "../assets/resume.pdf";

const DownloadResume = () => {
  return (
    <a
    className="py-1 px-3 text-lg font-light rounded-lg bg-pink-600 hover:bg-pink-800"
    href={resume}
    download="AnkitSahu_Resume"
    target="_blank"
    >
      Download Resume
    </a>
  );
};

export default DownloadResume;