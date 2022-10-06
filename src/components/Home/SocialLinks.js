import {
  FaLinkedinIn as Linkedin,
  FaGithub as Github,
  FaTwitter as Twitter,
} from "react-icons/fa";
import { AiFillInstagram as Insta } from "react-icons/ai";

const SocialLinks = () => {
  return (
    <>
      <a
        href="https://github.com/ankitsahu01"
        target="_blank"
        className="rounded-lg bg-white/80 hover:bg-pink-600 hover:text-white/80"
      >
        <Github className="w-10 h-10 p-2" />
      </a>
      <a
        href="www.linkedin.com/in/ankit-sahu-Ind"
        target="_blank"
        className="rounded-lg bg-white/80 hover:bg-pink-600 hover:text-white/80"
      >
        <Linkedin className="w-10 h-10 p-2" />
      </a>
      <a
        href="https://twitter.com/sahu6856"
        target="_blank"
        className="rounded-lg bg-white/80 hover:bg-pink-600 hover:text-white/80"
      >
        <Twitter className="w-10 h-10 p-2" />
      </a>
      <a
        href="https://www.instagram.com/ankitsahu03/"
        target="_blank"
        className="rounded-lg bg-white/80 hover:bg-pink-600 hover:text-white/80"
      >
        <Insta className="w-10 h-10 p-1.5" />
      </a>
    </>
  );
};

export default SocialLinks;
