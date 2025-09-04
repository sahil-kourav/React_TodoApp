import React, { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const App = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      title: "Plan Week",
      summary: "Make a schedule for next week’s tasks",
      isCompleted: false,
    },
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !summary.trim()) return;

    const newTask = {
      id: nanoid(),
      title,
      summary,
      isComplete: false,
    };

    setTodos([...todos, newTask]);
    toast.success("Todo created!")
    setTitle("");
    setSummary("");
  };

  const DeleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.error("Toast deleted!")
  };

  const renderTodos = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="flex-1 mb-2 sm:mb-0">
          <h2 className="text-xl font-semibold text-gray-800">{todo.title}</h2>
          <p className="text-gray-600 mt-1 pr-3">{todo.summary}</p>
        </div>
        <button
          onClick={() => DeleteHandler(todo.id)}
          className="text-red-500 font-medium hover:text-red-700 transition-colors mt-2 sm:mt-0"
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 p-10">
      {/* Left Panel */}
      <div className="lg:w-1/2 p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-medium text-gray-700 mb-2">
          Create Tasks
        </h3>
        <h1 className="mb-8 text-5xl font-thin text-gray-900 leading-tight">
          Set <span className="text-red-500 font-semibold">Reminder</span> for{" "}
          <br />
          your tasks
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col space-y-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title for your task"
            className="border-b border-gray-400 p-2 text-2xl font-light focus:outline-none focus:border-red-500 transition-colors"
          />

          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Enter summary for your task"
            className="border-b border-gray-400 p-2 text-2xl font-light focus:outline-none focus:border-red-500 transition-colors"
          />

          <button className="px-8 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors">
            Create Todo
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 p-6 mt-10 lg:mt-0">
        <h3 className="text-2xl font-medium text-gray-700 mt-14 mb-4">
          Your Tasks
        </h3>
        <ul className="h-[400px] overflow-y-auto pr-2 space-y-3">
          {renderTodos}
        </ul>
      </div>
    </div>
  );
};

export default App;
