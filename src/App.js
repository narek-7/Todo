import React, { useReducer } from "react";
import TodosList from "./components/todosList";
import TodoHeader from "./components/todoHeader";
import TodoFooter from "./components/todoFooter";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { addTodo } from "./features/todos/todosSlice";

function reducer(state, action) {
   if (action.type === "add") {
      return [
         ...state,
         {
            id: state[state.length - 1].id + 1,
            title: action.payload.title,
            completed: false,
         },
      ];
   }
   if (action.type === "delete") {
      return state.filter((todo) => todo.id !== action.payload.id);
   }
   if (action.type === "toggle") {
      return state.map((todo) => {
         if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
         }
         return todo;
      });
   }
   if (action.type === "clear") {
      return state.filter((todo) => !todo.completed);
   }
}

function App() {
   const dispatch = useDispatch();
   const todosList = useSelector((state) => state.todos);
   console.log(todosList);

   const handleToggle = (id) => {
      dispatch({
         type: "toggle",
         payload: { id: id },
      });
   };

   const addTodo = (title) => {
      if (title.trim()) {
         dispatch({
            type: "add",
            payload: { title: title },
         });
      }
   };

   const clearCompleted = () => {
      dispatch({
         type: "clear",
      });
   };

   const deleteTodo = (id) => {
      dispatch({
         type: "delete",
         payload: { id: id },
      });
   };
   {
      return (
         <div className="container p-2">
            <div className="list shadow-lg p-3 mb-5 bg-body rounded">
               <h1>Todos</h1>
               <TodoHeader />
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
