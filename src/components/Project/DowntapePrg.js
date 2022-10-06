import DowntapeImg from "../../assets/project-downtape.png";

const DowntapePrg = () => {
  return (
    <>
      <img src={DowntapeImg} alt="Downtape prject pic" />
      <div className="col-span-2 p-2 mb-10 md:mb-0">
        <h2 className="text-5xl highlight mb-2">Downtape</h2>
        <p>
          Build to download videos of Youtube, Instagram, Twitter, and Vimeo. To
          download videos, only one thing is needed that is video link, project
          will show you all the possible formats and sizes of video which you
          can download from there directly.
        </p>
        <p className="mt-3">
          Build Using: HTML, CSS, JavaScript, React js, Material UI, and Express
          js as a backend.
        </p>
        <div className="mt-4 flex gap-4 flex-col md:flex-row text-left text-xl font-medium text-blue-500 underline underline-offset-2">
          <a
            href="https://downtape.herokuapp.com/"
            target="_blank"
            className="hover:text-blue-600"
          >
            [ visit: downtape.herokuapp.com ]
          </a>
          <a
            href="https://github.com/ankitsahu01/downtape"
            target="_blank"
            className="hover:text-blue-600"
          >
            [ Github Code ]
          </a>
        </div>
      </div>
    </>
  );
};

export default DowntapePrg;
