"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUserAlt, FaCode, FaFilePdf } from "react-icons/fa";

interface NavLinksProps {
  closeMenu?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ closeMenu }) => {
  const pathname = usePathname();
  return (
    <>
      <Link
        className={
          "navLink my-2 lg:my-0 " + (pathname === "/" ? "highlight" : "")
        }
        href="/"
        onClick={closeMenu ? closeMenu : () => {}}
      >
        <FaHome className="my-auto mx-1" /> Home
      </Link>
      <Link
        className={
          "navLink my-2 lg:my-0 " + (pathname === "/about" ? "highlight" : "")
        }
        href="/about"
        onClick={closeMenu ? closeMenu : () => {}}
      >
        <FaUserAlt className="my-auto mx-1" />
        About
      </Link>
      <Link
        className={
          "navLink my-2 lg:my-0 " + (pathname === "/projects" ? "highlight" : "")
        }
        href="/projects"
        onClick={closeMenu ? closeMenu : () => {}}
      >
        <FaCode className="my-auto mx-1" />
        Projects
      </Link>
      <Link
        className={
          "navLink my-2 lg:my-0 " + (pathname === "/resume" ? "highlight" : "")
        }
        href="/resume"
        onClick={closeMenu ? closeMenu : () => {}}
      >
        <FaFilePdf className="my-auto mx-1" />
        Resume
      </Link>
      <Link
        href="/contact"
        className="my-2 lg:my-0 py-1 px-3 text-lg border border-pink-300/60 rounded-lg text-pink-300 hover:bg-pink-300 hover:text-black"
        onClick={closeMenu ? closeMenu : () => {}}
      >
        Say Hi!
      </Link>
    </>
  );
};

export default NavLinks;
