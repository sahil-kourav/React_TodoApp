import React from "react";
import { toast } from "react-toastify";

const ReadTodo = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

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

  const DeleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.error("Todo deleted!");
  };

  return (
    <>
      <div className="lg:w-1/2 p-6 mt-10 lg:mt-0">
        <h3 className="text-2xl font-medium text-gray-700 mt-14 mb-4">
          Your Tasks
        </h3>
        <ul className="h-[400px] overflow-y-auto pr-2 space-y-3">
          {renderTodos}
        </ul>
      </div>
    </>
  );
};

export default ReadTodo;
