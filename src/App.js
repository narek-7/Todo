import React from "react";
import TodosList from "./components/todosList";
import TodoHeader from "./components/todoHeader";
import TodoFooter from "./components/todoFooter";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
   const dispatch = useDispatch();
   const todosList = useSelector((state) => state.todos);
   // console.log(store.getState().todos);

   const clearCompleted = () => {
      dispatch({
         type: "clear",
      });
   };

   return (
      <div className="container p-2">
         <div className="list shadow-lg p-3 mb-5 bg-body rounded">
            <h1>Todos</h1>
            <TodoHeader />
            <TodosList />
            <TodoFooter todosList={todosList} clearCompleted={clearCompleted} />
         </div>
      </div>
   );
}

export default App;
