import React from "react";
import { FaHouseUser, FaShoppingCart, FaRocket, FaTools, FaListUl, FaGithub, FaLink } from "react-icons/fa";

const projects = [
  {
    title: "Real Estate Web App",
    icon: <FaHouseUser className="text-blue-500 text-4xl" />,
    description: "A smart house recommendation system based on user searches and preferences.",
    techStack: ["Node.js", "Express", "PostgreSQL", "React", "SCSS"],
    features: [
      "Advanced search and filtering for properties",
      "User authentication & dashboard",
      "Interactive UI/UX for seamless browsing",
    ],
  },
  {
    title: "E-Commerce Platform (On Going)",
    icon: <FaShoppingCart className="text-blue-500 text-4xl" />,
    description: "A full-fledged e-commerce site with secure payments and user authentication.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      "User & Admin dashboards",
      "Cart & Order Management",
      "Payment Integration (Esewa)",
      "Product reviews & ratings",
    ],
  },
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 flex items-center justify-center gap-2">
        <FaRocket className="text-red-500" /> Projects
      </h2>

      <div className="grid gap-12 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4">
              {project.icon}
              <h3 className="text-2xl font-semibold">{project.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{project.description}</p>

            <h4 className="text-lg font-medium text-gray-800 mb-2 flex items-center gap-2">
              <FaTools className="text-gray-600" /> Tech Stack:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2 flex items-center gap-2">
              <FaListUl className="text-gray-600" /> Features:
            </h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Add the "Want to see more?" section */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-600 mb-4">Want to see more? Check out my GitHub  for more projects!</p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/kanchanmainali1" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
            <FaGithub className="text-3xl" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
