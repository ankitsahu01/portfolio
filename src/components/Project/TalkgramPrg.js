import TalkgramImg from "../../assets/project-talkgram.png";

const TalkgramPrg = () => {
  return (
    <>
      <img src={TalkgramImg} alt="Talkgram prject pic" className="sm:w-3/4 md:w-full" />
      <div className="col-span-2 p-2 mb-24 md:mb-0">
        <h2 className="text-4xl md:text-5xl highlight mb-2">TalkGram</h2>
        <p>
          It's a chat web app, users can use Google Login or can login with the
          credentials they provided at the time of Signup. Users need to verify
          their email by entering OTP at the end of Signup process. In this
          project, users can search other people those are having account on
          TalkGram and they simply start their conversation with them. Group
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
