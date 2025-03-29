import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`fixed bottom-0 w-full py-2 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800' : 'bg-indigo-600'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2">
          <p className={`text-sm ${
            darkMode ? 'text-gray-300' : 'text-indigo-100'
          }`}>
            Developed & Designed by Ankit Suyal
          </p>
          <a 
            href="https://github.com/anksindia" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center transition-colors ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-indigo-100 hover:text-white'
            }`}
          >
            <FaGithub className="ml-2" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;