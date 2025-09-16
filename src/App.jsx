import React, { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import ReadTodo from "./components/ReadTodo";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="w-screen h-screen flex p-10">
      <CreateTodo />
      <ReadTodo />
    </div>
  );
};

export default App;
