import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-16 text-gray-800">
      <div className="text-center mb-12">
        
        <h2  className="text-4xl font-bold text-blue-600">Contact Me</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Interested in collaborating or just want to say hi? Feel free to reach out!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Email */}
        <a href="mailto:kanchanmainali1@gmail.com" className="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md transition-transform hover:scale-105 hover:bg-blue-50">
          <FaEnvelope className="text-2xl text-blue-600" />
          <span className="text-lg font-medium text-gray-800">Mail</span>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/kanchan-mainali-7a781731b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md transition-transform hover:scale-105 hover:bg-blue-50">
          <FaLinkedin className="text-2xl text-blue-600" />
          <span className="text-lg font-medium text-gray-800">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a href="https://github.com/kanchanmainali1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md transition-transform hover:scale-105 hover:bg-blue-50">
          <FaGithub className="text-2xl text-gray-800" />
          <span className="text-lg font-medium text-gray-800">GitHub</span>
        </a>

        {/* Location */}
        <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
          <FaMapMarkerAlt className="text-2xl text-red-600" />
          <span className="text-lg font-medium text-gray-800">Jhapa, Nepal</span>
        </div>

       
      </div>
    </div>
  );
};

export default Contact;
