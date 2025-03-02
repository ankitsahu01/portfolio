import cppImg from "../../assets/skillsets/cpp.svg";
import htmlImg from "../../assets/skillsets/html.svg";
import cssImg from "../../assets/skillsets/css.svg";
import phpImg from "../../assets/skillsets/php.svg";
import jsImg from "../../assets/skillsets/javascript.svg";
import reactImg from "../../assets/skillsets/react.svg";
import typescriptImg from "../../assets/skillsets/typescript.svg";
import reduxImg from "../../assets/skillsets/redux.svg";
import nextjsImg from "../../assets/skillsets/nextjs.png";
import mongodbImg from "../../assets/skillsets/mongodb.svg";
import mysqlImg from "../../assets/skillsets/mysql.svg";
import nodejsImg from "../../assets/skillsets/nodejs.svg";
import gitImg from "../../assets/skillsets/git.svg";
import expressjsImg from "../../assets/skillsets/expressjs.svg";

const SkillSets = () => {
  return (
    <div className="my-20">
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-10">
        <span className="highlight">Skillsets</span> I have
      </h2>
      <div className="px-2 md:px-8 grid grid-cols-2 md:grid-cols-5 gap-16 justify-items-center items-center">
        <img src={reactImg} width={50} className="iconCard" title="React.js" />
        <img src={jsImg} width={50} className="iconCard" title="JavaScript" />
        <img
          src={typescriptImg}
          width={50}
          className="iconCard"
          title="TypeScript"
        />
        <img src={nextjsImg} width={70} className="iconCard" title="Next.js" />
        <img
          src={reduxImg}
          width={50}
          className="iconCard"
          title="Redux State Management"
        />
        <img src={htmlImg} width={50} className="iconCard" title="HTML5" />
        <img src={cssImg} width={50} className="iconCard" title="CSS3" />
        <img src={gitImg} width={50} className="iconCard" title="Git" />
        <img src={nodejsImg} width={70} className="iconCard" title="Node.js" />
        <img
          src={expressjsImg}
          width={50}
          className="iconCard"
          title="Express.js"
        />
        <img src={mongodbImg} width={55} className="iconCard" title="mongoDB" />
        <img src={phpImg} width={50} className="iconCard" title="PHP" />
        <img src={mysqlImg} width={70} className="iconCard" title="mySql" />
        <img src={cppImg} width={50} className="iconCard" title="C++" />
      </div>
    </div>
  );
};

export default SkillSets;
