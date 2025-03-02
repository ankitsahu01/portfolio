import { lazy, Suspense } from "react";
import Image from "../../assets/img_hero-5.png";
import { Link } from "react-router-dom";
import Greeting from "../miscellaneous/Greeting";
import IntroduceList from "../Home/IntroduceList";

const SkillSets = lazy(() => import("./SkillSets"));
const ToolSets = lazy(() => import("./ToolSets"));

const About = () => {
  return (
    <>
      <div className="px-2 flex flex-col md:flex-row md:items-start items-center justify-evenly gap-4">
        <div className="mt-[100px] bg-pink-900/20 w-full md:w-1/2 p-3 text-lg rounded-lg">
          <h1 className="text-6xl md:text-8xl highlight mb-6">About.</h1>
          <p className="mb-4">
            {<Greeting />}, I am <span className="highlight">Ankit Sahu</span>{" "}
            from Madhya Pradesh, India.
          </p>
          <p>
            I did Master of Computer Applications{" "}
            <span className="highlight">(MCA)</span> from Dr. A.P.J. Abdul Kalam
            University, Indore.
          </p>

          <IntroduceList />

          <p className="mt-4">
            I'm open to <span className="highlight">Job</span> opportunities
            where I can contribute, learn and thrive. If you have a great
            opportunity that aligns with my skills and experience, then do not
            hesitate to{" "}
            <Link className="underline highlight" to="/contact">
              contact me
            </Link>
            .
          </p>
        </div>
        <div className="w-3/4 sm:w-2/4 lg:w-1/3 md:min-h-screen flex items-center">
          <img src={Image} alt="about pic" />
        </div>
      </div>
      <Suspense>
        <SkillSets />
        <ToolSets />
      </Suspense>
    </>
  );
};

export default About;
