import React from "react";

function IntroduceList() {
  return (
    <ul className="marker:text-pink-500 list-disc space-y-8 pt-6 md:pt-8 pl-4">
      <li>
        I have{" "}
        <span className="highlight">
          {process.env.REACT_APP_YEAR_OF_EXP} years
        </span>{" "}
        of experience in web development.
      </li>
      <li>
        I'm currently working as a
        <span className="highlight"> Web Developer </span>
        at{" "}
        <a
          className="underline highlight"
          target="_blank"
          href="https://www.linkedin.com/company/fitpeo"
        >
          FitPeo
        </a>
        .
      </li>
      <li>
        Developed and maintained 6 internal web portals supporting
        <span className="highlight"> 50K+ </span>global patients, caretakers &
        providers by writing reusable React components and building end-to-end
        features.
      </li>
      <li>
        Reduced average page load time by
        <span className="highlight"> 35% </span>through code optimizations and
        integration of CMS, improving user experience.
      </li>
      <li>
        Introduced strong typing for existing JavaScript codebase, resulting in{" "}
        <span className="highlight"> 30% </span>
        reduction in runtime errors.
      </li>
      <li>
        Implemented TypeScript and incorporated unit testing framework (Cypress
        with 90% coverage), enhancing{" "}
        <span className="highlight"> code quality </span> and application
        stability.
      </li>
      <li>
        Authored technical specifications and UI/UX flows, ideating solutions
        that align with <span className="highlight"> business goals</span>.
      </li>
      <li>
        Combined 5 internal web portals into single web portal, to implement DRY
        concept.
      </li>
      <li>
        Published a large feature to private{" "}
        <span className="highlight"> NPM package</span> to reuse it across all
        web portals.
      </li>
    </ul>
  );
}

export default IntroduceList;
