import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

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
  }
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
    <div className={`min-h-screen flex flex-col items-center justify-center p-5 transition-all duration-300 ${
    darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      
      <div className='w-[90vw] mx-auto py-1 pb-3 my-1 rounded bg-[#6de1a782]'>
        <div className='w-1/2 text-center p-4 rounded-md bg-[#145f49] mt-2 mx-auto '>
          <div className='text-2xl text-amber-50 font-bold cursor-pointer'>Add-Agenda</div>
          <input
            onChange={handleChange}
            value={Todo}
            placeholder='Enter your task'
            className='text-[#171717] bg-[#ffffff] rounded p-1 w-full mt-2 '
            type="text"
          />
          <button
            onClick={handleAdd}
            className='bg-[#80d7c3] rounded w-full font-semibold mt-2 px-2 text-[#171717] hover:bg-[#72dcbc6a] cursor-pointer'
          >
            Save
          </button>
        </div>

        <div className="text-amber-50 mt-4 h-[65vh] p-2 overflow-y-auto rounded w-2/3 m-auto font-semibold bg-[#85d4bd] overflow-hidden">
          <div className='flex'>
            <button onClick={() => setFilter("today")} className='bg-[#145f49] rounded-l flex-1 m-1 px-2 text-[white] hover:bg-[#666666]'>Today</button>
            <button onClick={() => setFilter("pending")} className='bg-[#145f49] flex-1 my-1 px-2 text-[white] hover:bg-[#666666]'>Pending</button>
            <button onClick={() => setFilter("completed")} className='bg-[#145f49] flex-1 m-1 px-2 text-[white] hover:bg-[#666666]'>Completed</button>
            <button onClick={() => setFilter("all")} className='bg-[#145f49] rounded-r flex-1 my-1 px-2 text-[white] hover:bg-[#666666]'>All Tasks</button>
          </div>

          <h1 className='cursor-pointer font-bold text-2xl m-3 text-[#535353]'>Tasks</h1>

          {filteredTodos.length === 0 ? (
            <div className='w-full text-center font-bold text-[#02490a]'>
              No tasks found.
              <img className='cursor-pointer md:w-2/3 sm:w-full lg:w-fit m-auto' src="./public/AgendaFlow-logo.webp" alt="No Tasks" />
            </div>
          ) : (
            filteredTodos.map(item => (
              <div key={item.id} className="todos my-1 p-2 rounded w-full text-black bg-[#145f4974] flex flex-wrap justify-between">
                <div className={`flex-[2] ${item.isCompleted ? "line-through" : ""} min-w-0 mx-1 overflow-hidden`}>
                  <input type="checkbox" checked={item.isCompleted} onChange={() => handleCheckbox(item.id)} />
                  {item.Todo}
                </div>
                <div className="flex-[1] mx-1 text-[#ffffff]">{item.date}</div>
                <div className="buttons mx-1 flex flex-[1]">
                  <button onClick={() => handleEdit(item.id)} className='bg-[#80d7c3] rounded h-fit w-fit font-semibold px-1 text-[#171717] mx-1'><CiEdit /></button>
                  <button onClick={() => handleDelete(item.id)} className='bg-[#80d7c3] rounded h-fit w-fit font-semibold px-1 text-[#171717] mx-1'><MdOutlineDelete /></button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
      </div>
      <Footer />
    </>
  );
}

export default App;
