import React from "react";

function IntroduceList() {
  return (
    <ul className="marker:text-pink-500 list-disc space-y-8 pt-6 md:pt-8 pl-4">
      <li>
        I am a <span className="highlight">Software Engineer</span> with{" "}
        <span className="highlight">
          {process.env.NEXT_PUBLIC_YEAR_OF_EXP || "4+"} years
        </span>{" "}
        of full-stack experience in building scalable web apps and integrating Generative AI.
      </li>
      <li>
        Currently working as a{" "}
        <span className="highlight">Software Engineer - JavaScript</span> at{" "}
        <a
          className="underline highlight font-medium"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/company/aviato-consulting/"
        >
          Aviato Consulting
        </a>{" "}
        (Remote).
      </li>
      <li>
        Developing <span className="highlight">React.js & Next.js</span> web apps with integrated GenAI capabilities and automated workflows using <span className="highlight">n8n</span>.
      </li>
      <li>
        Managing cloud infrastructure and deployments on{" "}
        <span className="highlight">Google Cloud Platform (GCP)</span> utilizing Terraform, Cloud Run, Firebase, Cloud SQL, and GCS.
      </li>
      <li>
        Certified{" "}
        <span className="highlight">Google Cloud Associate Cloud Engineer</span>{" "}
        -{" "}
        <a
          className="underline highlight"
          target="_blank"
          rel="noreferrer"
          href="https://www.credly.com/badges/7882cc4f-50a4-4d0f-9849-f13de5792b01/public_url/"
        >
          View Credentials
        </a>
        .
      </li>
      <li>
        Previously at{" "}
        <a
          className="underline highlight"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/company/fitpeo"
        >
          FitPeo Tech
        </a>
        : developed 6 internal web portals for <span className="highlight">50,000+</span> global users and published reusable features as private NPM packages.
      </li>
      <li>
        Migrated legacy JavaScript codebase to <span className="highlight">TypeScript</span> (reducing runtime errors by 30%) and added Cypress testing with 90% coverage.
      </li>
      <li>
        Optimized application performance, reducing average page load times by <span className="highlight">35%</span>.
      </li>
    </ul>
  );
}

export default IntroduceList;
