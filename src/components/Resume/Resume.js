import "./resume.css";
import resume from "../../assets/resume.pdf";

const Resume = () => {
  return (
      <embed src={resume} className="resume pt-20" />
  );
};

export default Resume;
