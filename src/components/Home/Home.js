import { lazy, Suspense } from "react";
import Type from "./Type";
import Image from "../../assets/img_hero-7.png";
import SocialLinks from "./SocialLinks";
import Greeting from "../miscellaneous/Greeting";
import DownloadResume from "../DownloadResume";

const Introduce = lazy(() => import("./Introduce"));
const SkillSets = lazy(() => import("../About/SkillSets"));
const ToolSets = lazy(() => import("../About/ToolSets"));
const KeepInTouch = lazy(() => import("./KeepInTouch"));

const Home = () => {
  return (
    <>
      <main>
        <div className="min-h-screen pt-28 md:pt-0 flex flex-col md:flex-row md:justify-evenly items-center">
          <div className="w-full md:w-1/3 p-4 text-center md:text-justify">
            <h1 className="text-4xl md:text-5xl">
              <Greeting />!
              <br />
              I'm{" "}
              <strong className="text-pink-600 font-bold">Ankit Sahu</strong>
            </h1>
            <div className="text-2xl mt-10 font-bold text-pink-600">
              <Type />
            </div>
            <div className="mt-10 flex justify-center md:justify-start gap-4 text-pink-600">
              <SocialLinks />
            </div>
            <div className="mt-10 flex justify-center md:justify-start gap-4">
              <DownloadResume />
            </div>
          </div>
          <img
            src={Image}
            alt="home pic"
            className="p-8 w-auto sm:w-1/2 lg:w-1/3"
          />
        </div>
        <Suspense>
          <Introduce />
          <SkillSets />
          <ToolSets />
          <KeepInTouch />
        </Suspense>
      </main>
    </>
  );
};

export default Home;
