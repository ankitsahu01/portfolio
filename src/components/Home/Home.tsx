import React from "react";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ImpactMetrics from "./ImpactMetrics";
import FeaturedProjects from "./FeaturedProjects";
import ExperienceSection from "./ExperienceSection";
import FaqSection from "./FaqSection";

const Home: React.FC = () => {
  return (
    <main className="w-full pt-16">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <FeaturedProjects />
      <ImpactMetrics />
      <FaqSection />
    </main>
  );
};

export default Home;
