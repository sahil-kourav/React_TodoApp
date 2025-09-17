import { useState } from "react";
import todosContext from "./todosContext";

const TodosContextProvider = ({children}) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Welcome to your Todo App",
      summary: "Add your tasks here and stay organized!",
      completed: false,
    },
  ]);
  return (
    <todosContext.Provider value={[todos, setTodos]}>
        {children}
    </todosContext.Provider>
  );
};

export default TodosContextProvider;
