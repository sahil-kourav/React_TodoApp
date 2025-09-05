import React, { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const CreateTodo = (props) => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const todos = props.todos;
  const setTodos = props.setTodos;

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
    toast.success("Todo created!");
    setTitle("");
    setSummary("");
  };

  return (
    <>
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
            className="border-b border-gray-400 p-2 text-xl font-light focus:outline-none focus:border-red-500 transition-colors"
          />

          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Enter summary for your task"
            className="border-b border-gray-400 p-2 text-xl font-light focus:outline-none focus:border-red-500 transition-colors"
          />

          <button className="px-8 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors">
            Create Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTodo;
