import DotParticles from "./components/DotParticles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import CustomRoutes from "./CustomRoutes";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Header />
      <div id="app" className="scroll-smooth text-white/90 font-extralight">
        <DotParticles />
        <CustomRoutes />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
