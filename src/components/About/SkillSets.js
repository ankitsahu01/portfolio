import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { DiJavascript1, DiNodejs } from "react-icons/di";
import { SiMongodb, SiExpress, SiPhp, SiMysql } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

const SkillSets = () => {
  return (
    <div className="py-20 md:pt-0">
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-10">
        My <span className="highlight">Skillsets</span>
      </h2>
      <div className="px-2 md:px-8 grid grid-cols-2 md:grid-cols-5 gap-16 justify-items-center items-center">
        <CgCPlusPlus size="4em" className="iconCard" />
        <FaHtml5 size="4em" className="iconCard" />
        <FaCss3Alt size="4em" className="iconCard" />
        <SiPhp size="4em" className="iconCard" />
        <SiMysql size="4em" className="iconCard" />
        <DiJavascript1 size="4em" className="iconCard" />
        <DiNodejs size="4em" className="iconCard" />
        <SiExpress size="4em" className="iconCard" />
        <FaReact size="4em" className="iconCard" />
        <SiMongodb size="4em" className="iconCard" />
      </div>
    </div>
  );
};

export default SkillSets;
