import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";
import { SiGooglecloud, SiCredly } from "react-icons/si";
import certImg from "../../assets/gcp_ace_certificate.jpg";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

const Certificates: React.FC = () => {
  const { credlyBadgeUrl } = PORTFOLIO_DATA.personal;
  const cert = PORTFOLIO_DATA.certifications[0];

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 md:px-12 max-w-5xl mx-auto flex flex-col items-center">
      <SectionHeading
        align="center"
        eyebrow="VERIFIED CREDENTIALS"
        title={
          <span className="flex items-center justify-center gap-3">
            <SiGooglecloud className="text-primary-container" /> Certificates &amp; Credentials
          </span>
        }
        subtitle="Official professional cloud architecture certifications validating engineering precision and GCP mastery."
      />

      <div className="w-full max-w-3xl bg-surface-raised border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-5 md:p-8 flex flex-col items-center transition duration-300 hover:border-primary-container/40">
        <div className="w-full relative rounded-xl overflow-hidden shadow-lg border border-white/10 bg-surface-base">
          <Image
            src={certImg}
            alt="Google Cloud Certified Associate Cloud Engineer Certificate - Ankit Sahu"
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div className="mt-8 text-center flex flex-col items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {cert.title}
          </h2>
          <p className="text-text-muted text-sm md:text-base font-mono">
            Issued by <span className="text-amber-300 font-medium">{cert.issuer}</span> &bull; {cert.validity}
          </p>
          <p className="text-text-secondary text-sm md:text-base max-w-xl leading-relaxed">
            {cert.description}
          </p>

          <div className="pt-2">
            <Button href={credlyBadgeUrl} variant="primary" size="lg">
              <SiCredly className="text-lg" />
              <span>Verify on Credly</span>
              <FaExternalLinkAlt className="text-xs" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
