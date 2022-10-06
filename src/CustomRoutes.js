import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Project/Projects";
import Resume from "./components/Resume/Resume";

const CustomRoutes = () => {
  const path = useLocation();
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [path]);
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default CustomRoutes;
