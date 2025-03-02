import { useEffect, lazy, Suspense } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Projects = lazy(() => import("./components/Project/Projects"));
const Resume = lazy(() => import("./components/Resume/Resume"));

const CustomRoutes = () => {
  const path = useLocation();

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [path]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default CustomRoutes;
