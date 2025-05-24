import React from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-sm bg-white fixed top-0 w-full z-50">
      <h1 className="text-2xl font-bold px-16">Portfolio</h1>
      <ul className="flex space-x-6 text-lg px-20">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
