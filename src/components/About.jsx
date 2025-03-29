import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTasks, FaCalendarAlt, FaChartLine, FaArrowRight } from 'react-icons/fa';

const About = () => {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 md:p-12">
       
       
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-indigo-600 mb-3">Welcome to AgendaFlow</h1>
          <p className="text-xl text-gray-600">
            Your ultimate task management solution for organized productivity
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-indigo-50 p-6 rounded-lg">
            <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTasks className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Task Management</h3>
            <p className="text-gray-600">Add, edit, and organize tasks with ease</p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg">
            <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCalendarAlt className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Smart Categories</h3>
            <p className="text-gray-600">Filter by Today, Pending, or Completed</p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg">
            <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaChartLine className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Progress Tracking</h3>
            <p className="text-gray-600">Visualize your productivity journey</p>
          </div>
        </div>

       
        <button 
          onClick={() => navigate('/todos')} 
          className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 inline-flex items-center"
        >
          Get Started Now
          <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>

       
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="italic text-gray-500 text-lg">
            "Productivity is never an accident. It's always the result of commitment to excellence, intelligent planning, and focused effort."
          </p>
          <p className="text-gray-600 mt-2">— Paul J. Meyer</p>
        </div>
      </div>
    </div>
  );
}

export default About;