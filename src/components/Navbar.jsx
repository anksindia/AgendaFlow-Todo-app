import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMoon } from "react-icons/fi";
import { BsList } from "react-icons/bs";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className={`flex items-center justify-between h-16 px-6 transition-all duration-300 ${
      darkMode ? "bg-gray-800 text-gray-100" : "bg-indigo-600 text-white"
    }`}>
      
      
      <div className="flex items-center space-x-3">
        <img 
          className="h-10 w-auto" 
          src="./public/AgendaFlow-favicon.webp" 
          alt="AgendaFlow Logo" 
        />
        <span className="font-bold text-lg">AgendaFlow</span>
      </div>

     
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <BsList className="text-white" />
      </button>

     
      <ul
        className={`md:flex md:space-x-6 font-medium absolute md:relative top-16 left-0 w-full md:w-auto transition-all duration-300 z-10 ${
          isOpen ? "block" : "hidden"
        } md:flex-row md:items-center md:static ${
          darkMode ? "bg-gray-800" : "bg-indigo-600"
        }`}
      >
        <li className="transition-colors duration-200">
          <NavLink 
            to="/" 
            className={({ isActive }) => `block px-6 py-3 md:px-3 md:py-1 rounded-md ${
              isActive 
                ? "font-semibold bg-indigo-700" 
                : `hover:${darkMode ? "bg-gray-700" : "bg-indigo-500"}`
            }`}
          >
            About
          </NavLink>
        </li>
        <li className="transition-colors duration-200">
          <NavLink 
            to="/todos" 
            className={({ isActive }) => `block px-6 py-3 md:px-3 md:py-1 rounded-md ${
              isActive 
                ? "font-semibold bg-indigo-700" 
                : `hover:${darkMode ? "bg-gray-700" : "bg-indigo-500"}`
            }`}
          >
            Your Todos
          </NavLink>
        </li>
      </ul>

     
      <button 
        onClick={toggleDarkMode} 
        className={`relative w-14 h-8 flex items-center rounded-full transition-all duration-300 ${
          darkMode ? "bg-gray-700" : "bg-indigo-400"
        }`}
        aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
      >
        <div className={`absolute w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-md transform transition-all duration-300 ${
          darkMode ? "translate-x-7 text-gray-800" : "translate-x-1 text-indigo-600"
        }`}>
          {darkMode ? (
            <FiSun className="text-lg" />
          ) : (
            <FiMoon className="text-lg" />
          )}
        </div>
      </button>
    </nav>
  );
};

export default Navbar;