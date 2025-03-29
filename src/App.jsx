import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { BsCheck2Square, BsSquare } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

function App() {
  const [Todo, setTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [Todos, setTodos] = useState(() => {
    let savedTodos = localStorage.getItem("Todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos));
  }, [Todos]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure about deleting this task?")) {
      setTodos(Todos.filter(item => item.id !== id));
    }
  };

  const handleEdit = (id) => {
    let taskToEdit = Todos.find(i => i.id === id);
    setTodo(taskToEdit.Todo);
    setTodos(Todos.filter(item => item.id !== id));
  };

  const handleAdd = () => {
    if (Todo.trim() === "") return;
    const todayDate = new Date().toISOString().split("T")[0];
    setTodos([...Todos, { id: uuidv4(), Todo, isCompleted: false, date: todayDate }]);
    setTodo("");
  };

  const handleChange = (e) => setTodo(e.target.value);

  const handleCheckbox = (id) => {
    setTodos(Todos.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    ));
  };

  const filteredTodos = Todos.filter(item => {
    const todayDate = new Date().toISOString().split("T")[0];
    if (filter === "today") return item.date === todayDate;
    if (filter === "completed") return item.isCompleted;
    if (filter === "pending") return !item.isCompleted;
    return true;
  });

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div className={`min-h-screen flex flex-col items-center p-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"}`}>
        
        <div className={`w-full max-w-2xl rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"} p-6 shadow-lg`}>
          
          <div className={`w-full mx-auto p-6 rounded-xl ${darkMode ? "bg-gray-700" : "bg-indigo-50"} mb-6`}>
            <h1 className='text-2xl font-bold text-center mb-4'>
              <span className={`${darkMode ? "text-indigo-300" : "text-indigo-600"}`}>Add New Task</span>
            </h1>
            <div className='flex gap-2'>
              <input
                onChange={handleChange}
                value={Todo}
                placeholder='What needs to be done?'
                className={`flex-1 rounded-lg p-3 focus:outline-none focus:ring-2 ${
                  darkMode 
                    ? "bg-gray-600 text-white placeholder-gray-400 focus:ring-indigo-500" 
                    : "bg-white text-gray-800 placeholder-gray-500 focus:ring-indigo-300"
                }`}
                type="text"
                onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
              />
              <button
                onClick={handleAdd}
                className={`rounded-lg p-3 transition-colors flex items-center justify-center ${
                  darkMode 
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white" 
                    : "bg-indigo-500 hover:bg-indigo-600 text-white"
                }`}
                aria-label="Add task"
              >
                <FaPlus className="text-lg" />
              </button>
            </div>
          </div>

          <div className={`rounded-xl p-6 ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
            
            <div className='flex flex-wrap gap-2 mb-6'>
              {["today", "pending", "completed", "all"].map((filterType) => (
                <button 
                  key={filterType}
                  onClick={() => setFilter(filterType)}
                  className={`flex-1 min-w-[100px] py-2 px-3 rounded-lg transition-colors text-sm font-medium ${
                    filter === filterType 
                      ? darkMode 
                        ? "bg-indigo-600 text-white" 
                        : "bg-indigo-500 text-white"
                      : darkMode 
                        ? "bg-gray-600 text-gray-200 hover:bg-gray-500" 
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                </button>
              ))}
            </div>

            <h1 className={`text-xl font-bold mb-4 text-center ${darkMode ? "text-indigo-300" : "text-indigo-600"}`}>
              Your Tasks
            </h1>

            {filteredTodos.length === 0 ? (
              <div className='text-center py-8'>
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 ${
                  darkMode ? "bg-gray-600 text-indigo-300" : "bg-gray-200 text-indigo-500"
                }`}>
                  <BsCheck2Square className="text-4xl" />
                </div>
                <p className={`font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {filter === "completed" 
                    ? "No completed tasks yet" 
                    : filter === "pending" 
                      ? "No pending tasks" 
                      : filter === "today" 
                        ? "No tasks for today" 
                        : "Start by adding a task above"}
                </p>
              </div>
            ) : (
              <div className='space-y-3 max-h-[500px] overflow-y-auto pr-2'>
                {filteredTodos.map(item => (
                  <div 
                    key={item.id} 
                    className={`flex items-start justify-between p-4 rounded-lg transition-all ${
                      darkMode 
                        ? "bg-gray-600 border border-gray-500" 
                        : "bg-white border border-gray-200"
                    } ${item.isCompleted ? "opacity-80" : ""}`}
                  >
                    <div className="flex items-start flex-1 min-w-0">
                      <button 
                        onClick={() => handleCheckbox(item.id)}
                        className={`mt-1 mr-3 flex-shrink-0 ${
                          darkMode 
                            ? item.isCompleted 
                              ? "text-indigo-400" 
                              : "text-gray-400 hover:text-indigo-400"
                            : item.isCompleted 
                              ? "text-indigo-500" 
                              : "text-gray-400 hover:text-indigo-500"
                        }`}
                        aria-label={item.isCompleted ? "Mark as incomplete" : "Mark as complete"}
                      >
                        {item.isCompleted ? <BsCheck2Square className="text-xl" /> : <BsSquare className="text-xl" />}
                      </button>
                      <div className="min-w-0 break-words">
                        <p className={`${item.isCompleted ? "line-through" : ""} ${
                          darkMode ? "text-gray-200" : "text-gray-700"
                        }`}>
                          {item.Todo}
                        </p>
                        <p className={`text-xs mt-1 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}>
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-3 flex-shrink-0">
                      <button 
                        onClick={() => handleEdit(item.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          darkMode 
                            ? "text-indigo-300 hover:bg-gray-500" 
                            : "text-indigo-500 hover:bg-gray-100"
                        }`}
                        aria-label="Edit task"
                      >
                        <CiEdit className="text-xl" />
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          darkMode 
                            ? "text-red-400 hover:bg-gray-500" 
                            : "text-red-500 hover:bg-gray-100"
                        }`}
                        aria-label="Delete task"
                      >
                        <MdOutlineDelete className="text-xl" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;