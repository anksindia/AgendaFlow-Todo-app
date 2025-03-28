import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FcTodoList } from "react-icons/fc";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className={`flex items-center justify-between h-[60px] px-6 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-[#80d7c3] text-[#145f49]"}`}>
      
      
      <div className="flex items-center space-x-2">
        <img className="cursor-pointer h-10 w-auto" src="./public/AgendaFlow-favicon.webp" alt="Logo" />
        <span className="cursor-pointer font-bold">AgendaFlow</span>
      </div>

      
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FcTodoList />
      </button>

      
      <ul
        className={`md:flex md:space-x-6 font-semibold absolute md:relative top-[60px] left-0 w-full md:w-auto transition-all duration-300 ${isOpen ? "block" : "hidden"} md:flex-row md:items-center md:static ${darkMode ? "bg-gray-900 text-white" : "bg-[#80d7c3] text-[#145f49]"}`}
      >
        <li className="cursor-pointer px-6 py-2 md:px-0">
          <NavLink to="/" className={({ isActive }) => isActive ? "font-bold" : ""}>
            About
          </NavLink>
        </li>
        <li className="cursor-pointer px-6 py-2 md:px-0">
          <NavLink to="/todos" className={({ isActive }) => isActive ? "font-bold" : ""}>
            Your Todos
          </NavLink>
        </li>
      </ul>

      
      <button 
        onClick={toggleDarkMode} 
        className="relative w-14 h-8 flex items-center bg-gray-800 rounded-full transition-all duration-300 hover:bg-gray-700 shadow-lg"
      >
        <div className={`w-6 h-6 flex items-center justify-center rounded-full bg-white text-black text-lg transition-all duration-500 transform ${
          darkMode ? "translate-x-6 rotate-[360deg]" : "translate-x-1 rotate-0"
        }`}>
          {darkMode ? "☀️" : "🌙"}
        </div>
      </button>

    </nav>
  );
};

export default Navbar;
