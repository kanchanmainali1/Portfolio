import React from "react";
import { IoLogoFacebook, IoLogoGithub } from "react-icons/io5";
import { PiHandWavingBold } from "react-icons/pi";


const Home = () => {
  return (
    <div className="text-center py-9">
      <div className="flex-1 flex justify-center">
        <img
          src="/Mypic.jpg"
          alt="Profile"
          className="w-64 h-64 rounded-full"
        />
      </div>

      <div className="flex flex-col items-center py-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
          <PiHandWavingBold className="text-yellow-400" /> Hi, I’m <span>Kanchan Mainali</span>
        </h1>
        <h2 className="text-xl text-gray-600 font-bold"> Full Stack Web Developer</h2>
        <p className="text-gray-500 mt-4">
          I specialize in creating visually appealing, user-friendly web
          applications.
          <br />
          <span className="font-semibold">[Let's Work Together!!]</span>
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-700 text-white rounded-md shadow-md hover:bg-black transition">
          Say Hello
        </button>
      </div>

      <div className="space-x-4 flex justify-center">
        <a href="https://www.facebook.com/kanchan.mainali.712" className="text-3xl">
          <IoLogoFacebook />
        </a>

        <a href="https://github.com/kanchanmainali1" className="text-3xl">
          <IoLogoGithub />
        </a>
      </div>
    </div>
  );
};

export default Home;
