import React from "react";
import HeroSection from "../Home/HeroSection";
import SkillsSection from "../Home/SkillsSection";
import ExperienceSection from "../Home/ExperienceSection";
import FaqSection from "../Home/FaqSection";

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-8 pb-16">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <FaqSection />
    </div>
  );
};

export default About;
