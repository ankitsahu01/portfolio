import { NavLink } from "react-router-dom";
import { FaHome, FaUserAlt, FaCode, FaFilePdf } from "react-icons/fa";

const NavLinks = ({ closeMenu }) => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          "navLink my-2 md:my-0 " + (isActive ? "highlight" : "")
        }
        to="/"
        onClick={closeMenu ? closeMenu : () => {}}
      >
        <FaHome className="my-auto mx-1" /> Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          "navLink my-2 md:my-0 " + (isActive ? "highlight" : "")
        }
        to="/about"
        onClick={closeMenu ? closeMenu : () => {}}
      >
        <FaUserAlt className="my-auto mx-1" />
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          "navLink my-2 md:my-0 " + (isActive ? "highlight" : "")
        }
        to="/projects"
        onClick={closeMenu ? closeMenu : () => {}}
      >
        <FaCode className="my-auto mx-1" />
        Projects
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          "navLink my-2 md:my-0 " + (isActive ? "highlight" : "")
        }
        to="/resume"
        onClick={closeMenu ? closeMenu : () => {}}
      >
        <FaFilePdf className="my-auto mx-1" />
        Resume
      </NavLink>
      <NavLink
        to="/contact"
        className="my-2 md:my-0 py-1 px-3 text-lg border border-pink-300/60 rounded-lg text-pink-300 hover:bg-pink-300 hover:text-black"
        onClick={closeMenu ? closeMenu : () => {}}
      >
        Say Hi!
      </NavLink>
    </>
  );
};

export default NavLinks;
