import Map from "../../assets/map.png";
import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });
  const inputHandler = (e) => {
    let name = e.target.name,
      value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    alert(JSON.stringify(data));
  };

  return (
    <div
      className="min-h-screen pt-20"
      style={{ backgroundImage: `url(${Map})` }}
    >
      <form
        className="bg-[rgba(255,255,255,0.1)] border border-white/20 backdrop-blur-sm rounded-lg pb-14 px-4 m-8 mx-auto text-black font-medium w-[90%] md:w-1/2"
        onSubmit={submitHandler}
      >
        <h1 className="my-3 text-3xl md:text-4xl font-medium text-center text-pink-500">
          Keep in touch!
        </h1>
        <label className="block mb-6">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-white/90">
            Name
          </span>
          <input
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 placeholder:italic focus:outline-none focus:border-pink-600 focus:ring-pink-600 block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={inputHandler}
            name="name"
            value={data.name}
            placeholder="John Cena"
            type="text"
            required
          />
        </label>
        <label class="block mb-6">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-white/90">
            Email
          </span>
          <input
            type="email"
            name="email"
            onChange={inputHandler}
            value={data.email}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 placeholder:italic focus:outline-none focus:border-pink-600 focus:ring-pink-600 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="you@example.com"
            required
          />
        </label>
        <label class="block mb-6">
          <span class="block text-sm text-white/90">Subject</span>
          <input
            type="text"
            name="subject"
            onChange={inputHandler}
            value={data.subject}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 placeholder:italic focus:outline-none focus:border-pink-600 focus:ring-pink-600 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Query"
          />
        </label>

        <label class="block mb-6">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-white/90">
            Message
          </span>
          <textarea
            name="msg"
            onChange={inputHandler}
            value={data.msg}
            className="min-h-[10em] max-h-[15em] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 placeholder:italic focus:outline-none focus:border-pink-600 focus:ring-pink-600 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Please type your message or query"
            required
          ></textarea>
        </label>

        <button
          type="submit"
          className="float-right py-1 px-3 text-lg text-white font-semibold rounded-lg bg-pink-500 hover:bg-pink-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
