import React, { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import ReadTodo from "./components/ReadTodo";
import TodosContextProvider from "./context/TodosContextProvider";

const App = () => {

  return (
    <TodosContextProvider>
    <div className="w-screen h-screen bg-gray-300 flex p-10">
      <CreateTodo />
      <ReadTodo />
    </div>
    </TodosContextProvider>
  );
};

export default App;
