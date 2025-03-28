import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate(); 

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#e0f7f1] text-center p-6">
      <h1 className="text-3xl font-bold text-[#145f49]">Welcome to AgendaFlow!</h1>
      <p className="text-lg text-gray-700 mt-2">Organize your tasks efficiently and boost productivity.</p>

      <ul className="mt-4 space-y-2 text-lg text-gray-600">
        <li>✅ Add, edit, and delete tasks</li>
        <li>📅 Categorize tasks as Today, Pending, Completed</li>
        <li>📊 Track your progress easily</li>
      </ul>

      
      <button 
        onClick={() => navigate('/todos')} 
        className="bg-[#145f49] text-white px-6 py-2 rounded-md mt-4 hover:bg-[#0f4c3a]"
      >
        Start Adding Tasks
      </button>

      <p className="italic text-gray-500 mt-6">"The secret of getting ahead is getting started." – Mark Twain</p>
    </div>
  );
}

export default About;
