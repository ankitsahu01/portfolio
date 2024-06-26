import Image from "../../assets/img_hero-4.png";

const Content = () => {
  return (
    <>
      <div className="h-1/2 pt-14 md:pt-0 flex flex-col md:flex-row items-center justify-evenly gap-10">
        <div className="bg-pink-900/20 rounded-none md:rounded-lg w-full md:w-1/2 px-4 py-6 text-xl">
          <h2 className="text-3xl md:text-4xl text-center">
            LET ME <span className="highlight">INTRODUCE</span> MYSELF
          </h2>
          <ul className="marker:text-pink-500 list-disc space-y-8 pt-6 md:pt-8 pl-4">
            <li>
              I am having more than <span className="highlight">2 years</span>{" "}
              of experience in web development.
            </li>
            <li>
              I'm currently working as a
              <span className="highlight"> Web Developer </span>
              at{" "}
              <a
                className="underline highlight"
                target="_blank"
                href="https://www.linkedin.com/company/fitpeo"
              >
                FitPeo
              </a>{" "}
              where I build and manage the Web Portals that leads to the success
              of the overall product.
            </li>
            <li>
              Since my adolescence, I have always become curious about how
              things work on the Internet, and then I began my journey with the
              C language. I developed an interest in coding, so it became my
              passion.
            </li>
            <li>
              I am fluent in classics like{" "}
              <span className="highlight">C, C++, Python, and Javascript.</span>
            </li>
            <li>
              I <span className="highlight">self-learned</span> most of the
              stuffs pertained to web development.
            </li>
            <li>
              My field of interest is building responsive Web Apps using{" "}
              <span className="highlight">MERN technology</span>.
            </li>
          </ul>
        </div>
        <img src={Image} alt="home pic2" className="w-2/3 sm:w-2/5 lg:w-1/5" />
      </div>
    </>
  );
};

export default Content;
