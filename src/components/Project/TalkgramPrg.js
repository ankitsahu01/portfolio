import TalkgramImg from "../../assets/project-talkgram.png";

const TalkgramPrg = () => {
  return (
    <>
      <img
        src={TalkgramImg}
        alt="Talkgram prject pic"
        className="sm:w-3/4 md:w-full"
      />
      <div className="col-span-2 p-2 mb-24 md:mb-0">
        <h2 className="text-4xl md:text-5xl highlight mb-2">TalkGram</h2>
        <p>
          This is a web-based chat application developed using{" "}
          <span className="highlight">MERN</span> technology. Users can use
          Google Login or login with the credentials they provided at the time
          of SignUp. Users will need to verify their email by entering the
          one-time password at the end of the registration process. In this
          project, users can look for other people who have an account on
          TalkGram and they simply begin their conversation with them. Group
          chat is also there, so multiple users can interact by creating a
          group.
        </p>
        <p className="mt-3 font-normal">
          Built using: Socket.io, ReactJS, Redux, MaterialUI, NodeJS, ExpressJS,
          and MongoDB.
        </p>
        <div className="mt-4 flex gap-4 flex-col md:flex-row text-left text-xl font-medium text-blue-500 underline underline-offset-2">
          <a
            href="https://talkgram.herokuapp.com/"
            target="_blank"
            className="hover:text-blue-600"
          >
            [ visit: talkgram.herokuapp.com ]
          </a>
          <a
            href="https://github.com/ankitsahu01/talkgram"
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

export default TalkgramPrg;
