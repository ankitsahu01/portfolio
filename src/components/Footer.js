import { FaLinkedin as Linkedin, FaGithub as Github } from "react-icons/fa";
import {
  AiFillInstagram as Insta,
  AiFillTwitterCircle as TwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="h-2 bg-emerald-600 shadow-inner shadow-black/20"></div>
      <div className="h-2 bg-orange-600 shadow-inner shadow-black/20"></div>
      <div className="h-2 bg-white/70 shadow-inner shadow-black/20"></div>
      <div className="h-2 bg-red-700 shadow-inner shadow-black/20"></div>
      <div className="h-2 bg-cyan-600 shadow-inner shadow-black/20"></div>

      <div className="bg-rose-800 py-6 px-2 md:px-20 text-white flex flex-col md:flex-row gap-2 items-center md:justify-between">
        <p className="text-lg">Developed by Ankit Sahu</p>
        <div className="text-sm opacity-90 pb-6 md:pb-0">Copyright © 2024</div>
        <div className="flex gap-6">
          <a href="https://github.com/ankitsahu01" target="_blank">
            <Github size="1.5em" />
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-sahu-59a340b2/"
            target="_blank"
          >
            <Linkedin size="1.5em" />
          </a>
          <a href="https://twitter.com/sahu6856" target="_blank">
            <TwitterCircle size="1.6em" />
          </a>
          <a href="https://www.instagram.com/ankitsahu03/" target="_blank">
            <Insta size="1.6em" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
