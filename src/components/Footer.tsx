'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        if (window.location.hash !== `#${targetId}`) {
          window.history.pushState(null, "", href);
        }
      }
    }
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-surface-base pt-10 pb-24 xl:pb-10 mt-12">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
        <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
          <span className="font-bold text-white tracking-tight text-sm">
            {PORTFOLIO_DATA.personal.shortName}
            <span className="text-primary">.</span>
          </span>
          <span>© {currentYear}</span>
          <span className="text-white/20">/</span>
          <span>
            Crafted by <span className="text-white font-medium">{PORTFOLIO_DATA.personal.name}</span>
          </span>
          <span className="text-white/20">/</span>
          <span>
            Crafted using <span className="text-white font-medium">Next.js &amp; Tailwind CSS</span>
          </span>
        </div>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link
            href="/#skills"
            onClick={(e) => handleHashClick(e, "/#skills")}
            className="hover:text-white transition-colors"
          >
            Skills
          </Link>
          <Link
            href="/#projects"
            onClick={(e) => handleHashClick(e, "/#projects")}
            className="hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/#experience"
            onClick={(e) => handleHashClick(e, "/#experience")}
            className="hover:text-white transition-colors"
          >
            Experience
          </Link>
          <Link
            href="/#faq"
            onClick={(e) => handleHashClick(e, "/#faq")}
            className="hover:text-white transition-colors"
          >
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
