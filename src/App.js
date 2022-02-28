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

   const generateId = () => {
      return todosList[todosList.length - 1].id + 1;
   };

   const addTodo = (title) => {
      if (title.trim()) {
         setTodos([
            ...todosList,
            {
               id: generateId(),
               title: title,
               completed: false,
            },
         ]);
      }
      console.log(todosList);
   };

   const clearCompleted = () => {
      setTodos((prevState) => (prevState = todosList.filter((todo) => !todo.completed)));
   };

   const deleteTodo = (id) => {
      setTodos((prevState) => (prevState = todosList.filter((todo) => todo.id !== id)));
   };
   {
      return (
         <div className="container p-2">
            <div className="list shadow-lg p-3 mb-5 bg-body rounded">
               <TodoHeader addTodo={addTodo} />
               <TodosList
                  todosList={todosList}
                  handleToggle={handleToggle}
                  deleteTodo={deleteTodo}
               />
               <TodoFooter todosList={todosList} clearCompleted={clearCompleted} />
            </div>
         </div>
      );
   }
}

export default App;
