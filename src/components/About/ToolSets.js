import { FaGitAlt } from "react-icons/fa";
import { SiHeroku, SiVisualstudiocode, SiPostman } from "react-icons/si";

const ToolSets = () => {
  return (
    <div className="pb-24 md:pt-10">
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-10">
        <span className="highlight">Tools</span> I use
      </h2>
      <div className="px-2 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-16 justify-items-center items-center">
        <FaGitAlt size="4em" className="iconCard" />
        <SiHeroku size="4em" className="iconCard" />
        <SiVisualstudiocode size="4em" className="iconCard" />
        <SiPostman size="4em" className="iconCard" />
      </div>
    </div>
  );
};

export default ToolSets;
