import { useState, useEffect } from "react";
import "./headerStyle.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    document.getElementById("mobileMenu").style.height = isMenuOpen
      ? "0"
      : "15.5rem";
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    if (!isMenuOpen) return;
    document.getElementById("mobileMenu").style.height = "0";
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;
    document.getElementById("app").removeEventListener("click", () => {
      closeMenu();
    });
    // To close mobile menu, whene someone click on rest part of webapp exlude navlinks.
    return document.getElementById("app").addEventListener("click", () => {
      closeMenu();
    });
  }, [isMenuOpen]);

  return (
    <header className="w-full px-16 text-white border-b border-pink-600/25 backdrop-blur bg-pink-900/20 z-10 fixed top-0 overflow-hidden">
      <div className="flex my-3 md:my-3">
        <div className="edgeEffectContainer">
          <h1 className="my-auto text-3xl font-bold">
            <Link to="/" onClick={closeMenu}>
              AS.
            </Link>
          </h1>
          <div className="first"></div>
          <div className="second"></div>
        </div>
        <nav className="hidden md:flex grow items-center justify-end gap-20">
          <NavLinks />
        </nav>
        <div className="md:hidden flex grow justify-end">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <ImCross size="1.5em" /> : <FaBars size="1.5em" />}
          </button>
        </div>
      </div>

      <nav
        id="mobileMenu"
        className="md:hidden flex flex-col items-center h-0 transition-[height] duration-500"
      >
        <NavLinks closeMenu={closeMenu} />
      </nav>
    </header>
  );
};

export default Header;
