import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-end Developer",
          "React.JS",
          "Next.JS",
          "JavaScript",
          "TypeScript",
          "Remix.JS",
          "APIs",
          "MERN Stack Developer",
          "Web Developer",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        cursor: "_",
      }}
    />
  );
};

export default Type;
