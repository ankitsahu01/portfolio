import Map from "../../assets/map.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const inputHandler = (e) => {
    let name = e.target.name,
      value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const clearInput = () => {
    setData({ user_name: "", user_email: "", message: "" });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        data,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        function (response) {
          setSuccess(true);
          clearInput();
          setLoading(false);
        },
        function (error) {
          console.log("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <div
      className="min-h-screen pt-20"
      style={{ backgroundImage: `url(${Map})` }}
    >
      <form
        className="bg-[rgba(255,255,255,0.1)] border border-white/20 backdrop-blur-sm rounded-lg pb-6 px-4 m-8 mx-auto text-black font-medium w-[90%] md:w-1/2"
        onSubmit={submitHandler}
      >
        <h1 className="my-3 text-3xl md:text-4xl font-medium text-center text-pink-500">
          Keep in touch!
        </h1>
        <label className="block mb-6">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-white/90">
            Name
          </span>
          <input
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 placeholder:italic focus:outline-none focus:border-pink-600 focus:ring-pink-600 block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={inputHandler}
            name="user_name"
            value={data.user_name}
            placeholder="John Cena"
            type="text"
            required
          />
        </label>
        <label className="block mb-6">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-white/90">
            Email
          </span>
          <input
            type="email"
            name="user_email"
            onChange={inputHandler}
            value={data.user_email}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 placeholder:italic focus:outline-none focus:border-pink-600 focus:ring-pink-600 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="you@example.com"
            required
          />
        </label>
        <label className="block mb-6">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-white/90">
            Message
          </span>
          <textarea
            name="message"
            onChange={inputHandler}
            value={data.message}
            className="min-h-[10em] max-h-[15em] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 placeholder:italic focus:outline-none focus:border-pink-600 focus:ring-pink-600 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Please type your message or query"
            required
          ></textarea>
        </label>
        <div className="flex justify-between items-center">
          <p
            className="text-sm text-white/90"
            style={{ visibility: success ? "visible" : "hidden" }}
          >
            Thank you for your message.
          </p>
          <button
            type="submit"
            className="justify-self-end py-1 px-3 text-lg text-white font-semibold rounded-lg bg-pink-500 hover:bg-pink-700 disabled:bg-slate-600"
            disabled={loading}
          >
            {loading ? "Sending" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
