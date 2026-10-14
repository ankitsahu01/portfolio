"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  closeMenu?: () => void;
  mobile?: boolean;
}

const NAV_ITEMS = [
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Certificates", href: "/certificates", sectionId: "certificates" },
  { label: "Resume", href: "/resume", sectionId: "resume" },
];

export const NavLinks: React.FC<NavLinksProps> = ({ closeMenu, mobile = false }) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (pathname !== "/") return;

    const targetIds = ["skills", "metrics", "projects", "experience"];
    const threshold = 220;

    const handleScroll = () => {
      let currentSection = "";

      for (const id of targetIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom > threshold) {
          currentSection = id;
          break;
        }
      }

      if (!currentSection && window.scrollY > 200) {
        let maxTop = -Infinity;
        for (const id of targetIds) {
          const el = document.getElementById(id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold && rect.top > maxTop) {
            maxTop = rect.top;
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId?: string) => {
    if (closeMenu) closeMenu();

    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      if (sectionId) {
        setActiveSection(sectionId);
      }
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isItemActive = (item: (typeof NAV_ITEMS)[0]) => {
    if (item.href.startsWith("/#")) {
      return pathname === "/" && activeSection === item.sectionId;
    }
    return pathname === item.href;
  };

  if (mobile) {
    return (
      <div className="flex flex-col items-center gap-5 py-6 w-full text-sm font-mono">
        {NAV_ITEMS.map((item) => {
          const active = isItemActive(item);
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, item.sectionId)}
              className={`transition-colors tracking-wide py-1 ${
                active ? "text-white font-semibold" : "text-text-secondary hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          onClick={closeMenu}
          className={`mt-2 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-surface-raised border text-xs font-mono tracking-wider uppercase transition-all ${
            pathname === "/contact"
              ? "border-primary-container text-primary font-semibold"
              : "border-primary-container/40 text-primary"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-success-emerald animate-pulse"></span>
          <span>Contact</span>
        </Link>
      </div>
    );
  }

  return (
    <>
      {NAV_ITEMS.map((item) => {
        const active = isItemActive(item);
        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={(e) => handleClick(e, item.href, item.sectionId)}
            className={`transition-colors tracking-wide text-xs font-mono ${
              active ? "text-white font-semibold" : "text-text-secondary hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
