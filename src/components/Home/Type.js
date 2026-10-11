"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Full-Stack Developer",
          "React.js & Next.js",
          "TypeScript & JavaScript",
          "GenAI Integration",
          "Google Cloud (GCP)",
          "Workflow Automation",
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
