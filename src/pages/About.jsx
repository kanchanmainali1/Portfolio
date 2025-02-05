import React from "react";
import { FaPaintBrush, FaCode, FaServer, FaDatabase, FaBook, FaBolt, FaAccessibleIcon, FaReact } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 text-gray-800">
      <div className="grid gap-24">
      
        <div className="flex justify-end">
          <div className="md:w-3/5 h-72 p-8 rounded-lg shadow-xl mr-auto transition-transform hover:scale-105">
            <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">About Me</h1>
            <p className="text-lg leading-relaxed text-left">
              Hey there! I’m <span className="font-semibold">Kanchan Mainali</span>.  
              I’m a <span className="text-gray-400 font-medium">Designer and Developer </span>  
              passionate about crafting seamless digital experiences. Currently pursuing  
              a <span className="font-medium">CSIT degree</span>, I thrive at the intersection  
              of creativity and technology.
            </p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="md:w-3/5 h-full p-8 rounded-lg shadow-xl ml-auto transition-transform hover:scale-105">
            <h2 className="text-3xl font-bold text-center mb-5 text-blue-700">What I Do</h2>
            <p className="text-gray-700 text-left flex items-center gap-2">
              <FaPaintBrush className="text-blue-500" /> <span className="font-bold">UI/UX Design</span>
            </p>
            <p className="text-gray-700 text-left">
              Creating intuitive and visually appealing user interfaces.<br />
              Tools: Figma, Photoshop
            </p>

            <p className="text-gray-700 text-left mt-8 flex items-center gap-2">
              <FaCode className="text-green-500" /> <span className="font-bold">Development</span>
            </p>
            <p className="text-gray-700 text-left">
              Full-stack web development with modern technologies.<br />
              Backend logic and API development with Node.js & Express.<br />
              Database management with PostgreSQL, MongoDB.<br />
              Frontend development with React, HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="md:w-3/5 h-72 p-8 rounded-lg shadow-xl mr-auto transition-transform hover:scale-105">
            <h2 className="text-3xl font-bold text-center mb-5 text-blue-700">Skills & Tech Stack</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-left flex items-center gap-2">
                  <FaPaintBrush className="text-purple-500" /> Design
                </h3>
                <p className="text-gray-600 text-left">Figma, Photoshop, Canva</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-left flex items-center gap-2">
                  <FaCode className="text-yellow-500" /> Frontend
                </h3>
                <p className="text-gray-600 text-left">React, HTML, CSS, JavaScript</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-left flex items-center gap-2">
                  <FaServer className="text-red-500" /> Backend
                </h3>
                <p className="text-gray-600 text-left">Node.js, Express</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-left flex items-center gap-2">
                  <FaDatabase className="text-green-500" /> Database
                </h3>
                <p className="text-gray-600 text-left">PostgreSQL, MongoDB</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="md:w-3/5 h-72 p-8 rounded-lg shadow-xl ml-auto transition-transform hover:scale-105">
            <h2 className="text-3xl font-bold text-center mb-5 text-blue-700 flex items-center gap-2">
              <FaBook className="text-orange-500" /> Currently Learning
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 text-left">
              <li className="flex items-center gap-2"><FaBolt className="text-yellow-500" /> Advanced backend optimizations</li>
              <li className="flex items-center gap-2"><FaAccessibleIcon className="text-blue-500" /> Improving UI/UX accessibility and design principles</li>
              <li className="flex items-center gap-2"><FaReact className="text-cyan-500" /> Learning React.js for building dynamic user interfaces</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
