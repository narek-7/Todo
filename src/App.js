import React, { useState } from "react";
import TodosList from "./components/todosList";
import TodoHeader from "./components/todoHeader";
import TodoFooter from "./components/todoFooter";
import "./App.css";

function App() {
   let [todosList, setTodos] = useState([
      { id: 1, title: "Learn JS", completed: false },
      { id: 2, title: "Learn React", completed: false },
      { id: 3, title: "Learn Angular", completed: false },
      { id: 4, title: "Learn NodeJS", completed: false },
      { id: 5, title: "Learn ExpressJS", completed: false },
   ]);

   const handleToggle = (id) => {
      setTodos(
         (prevState) =>
            (prevState = todosList.map((todo) => {
               if (todo.id === id) {
                  return { ...todo, completed: !todo.completed };
               }
               return todo;
            }))
      );
   };

   return (
      <div className="container">
         <TodoHeader />
         <TodosList todosList={todosList} handleToggle={handleToggle} />
         <TodoFooter />
      </div>
   );
}

export default App;
