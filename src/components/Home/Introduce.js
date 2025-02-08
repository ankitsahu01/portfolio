import Image from "../../assets/img_hero-4.png";
import IntroduceList from "./IntroduceList";

const Content = () => {
  return (
    <>
      <div className="h-1/2 pt-14 md:pt-0 flex flex-col md:flex-row items-center justify-evenly gap-10">
        <div className="bg-pink-900/20 rounded-none md:rounded-lg w-full md:w-1/2 px-4 py-6 text-xl">
          <h2 className="text-3xl md:text-4xl text-center">
            LET ME <span className="highlight">INTRODUCE</span> MYSELF
          </h2>
          <IntroduceList />
        </div>
        <img src={Image} alt="home pic2" className="w-2/3 sm:w-2/5 lg:w-1/5" />
      </div>
    </>
  );
};

export default Content;
