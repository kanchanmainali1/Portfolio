import React from "react";
import { FaPaintBrush, FaBrain, FaLaptopCode, FaWrench } from "react-icons/fa";

const Skills = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 text-gray-800">
        <div className="grid gap-24">
          {/* First Section (UI/UX Design) - Top Left Position */}
          <div className="flex justify-start">
            <div className="md:w-1/2 p-8 rounded-lg shadow-xl transition-transform hover:scale-105">
              <h2 className="text-3xl font-bold text-center mb-5 text-blue-700">
                <FaPaintBrush className="inline-block text-3xl mr-2 text-red-500" /> UI/UX Design
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  <span className="font-semibold">User-Centered Design: </span> Creating intuitive and accessible
                  interfaces using Figma, Photoshop, and Canva
                </p>
                <p>
                  <span className="font-semibold">Branding & Visual Design:</span> Expertise in Adobe Photoshop and
                  Canva for crafting compelling visuals
                </p>
                <p>
                  <span className="font-semibold">Design Systems:</span> Building and maintaining consistent UI
                  components using Figma for scalable designs
                </p>
              </div>
            </div>
          </div>

          {/* Second Section (Problem Solving & DSA) - Right Position Below First Section */}
          <div className="flex justify-end">
            <div className="md:w-1/2 p-8 rounded-lg shadow-xl transition-transform hover:scale-105 ml-auto">
              <h2 className="text-3xl font-bold text-center mb-5 text-blue-700">
                <FaBrain className="inline-block text-3xl mr-2 text-pink-600" /> Problem Solving & DSA
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  Understanding of core Data Structures (Arrays, Linked Lists,
                  Stacks, Queues, Trees, Graphs)
                </p>
                <p>
                  Mastery of Algorithms (Sorting, Searching, Dynamic
                  Programming, Greedy, Divide and Conquer)
                </p>
                <p>
                  Complexity Analysis: Big-O Notation for time and space
                  complexity
                </p>
              </div>
            </div>
          </div>

          {/* Third Section (Web Development) - Top Right Position */}
          <div className="flex justify-start">
            <div className="md:w-1/2 p-8 rounded-lg shadow-xl transition-transform hover:scale-105">
              <h2 className="text-3xl font-bold text-center mb-5 text-blue-700">
                <FaLaptopCode className="inline-block text-3xl mr-2 text-orange-600" /> Web Development
              </h2>

              {/* Frontend Development */}
              <div className="mb-6">
                <h4 className="text-xl font-medium text-left text-gray-700 mb-3">
                  Frontend Development
                </h4>
                <div className="text-gray-600 space-y-2">
                  <p>
                    React.js, HTML, CSS, JavaScript for dynamic and responsive
                    UIs
                  </p>
                  <p>Tailwind CSS for efficient styling</p>
                </div>
              </div>

              {/* Backend Development */}
              <div>
                <h4 className="text-xl font-medium text-left text-gray-700 mb-3">
                  Backend Development
                </h4>
                <div className="text-gray-600 space-y-2">
                  <p>
                    Node.js & Express.js for scalable server-side applications
                  </p>
                  <p>PostgreSQL & MongoDB for efficient database management</p>
                  <p>Real-time Data Handling ( Socket.io)</p>
                </div>
              </div>
            </div>
          </div>
{/* Version Control */}
          <div className="flex justify-end">
            <div className="md:w-1/2 p-8 rounded-lg shadow-xl transition-transform hover:scale-105 ml-auto">
              <h2 className="text-3xl font-bold text-center mb-5 text-blue-700">
                <FaWrench className="inline-block text-3xl mr-2 text-gray-400" /> Version Control
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>Git & GitHub for collaboration and version management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
