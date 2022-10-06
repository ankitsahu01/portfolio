import "./AboutStyles.css";
import Image from "../../assets/img_hero-5.png";
import { Link } from "react-router-dom";
import Greeting from "../miscellaneous/Greeting";
import SkillSets from "./SkillSets";
import ToolSets from "./ToolSets";

const About = () => {
  return (
    <>
      <div className="min-h-screen px-2 pt-28 md:pt-10 flex flex-col md:flex-row items-center justify-evenly gap-4">
        <div className="bg-pink-900/20 w-full md:w-1/2 p-3 text-lg rounded-lg">
          <h1 className="text-6xl md:text-8xl highlight mb-6">About.</h1>
          <p className="mb-4">
            {<Greeting />}, I am <span className="highlight">Ankit Sahu</span>{" "}
            from Madhya Pradesh, India. I am pursuing{" "}
            <span className="highlight">MCA</span> from Dr. A.P.J. Abdul Kalam
            University, Indore.
          </p>
          <p className="mb-4">
            I'm a <span className="highlight">Full Stack Developer</span>{" "}
            building the Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the{" "}
            <span className="highlight">Projects</span> section.
          </p>
          <p className="mb-4">
            I'm open to <span className="highlight">Job</span> opportunities
            where I can contribute, learn and grow. If you have a good
            opportunity that matches my skills and experience then don't
            hesitate to{" "}
            <Link className="underline highlight" to="/contact">
              contact me
            </Link>
            .
          </p>
        </div>
        <img src={Image} alt="about pic" className="w-3/4 sm:w-2/4 lg:w-1/3" />
      </div>
      <SkillSets />
      <ToolSets />
    </>
  );
};

export default About;
