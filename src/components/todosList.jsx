import React from "react";
import Todo from "./todo";

const TodosList = ({ todosList, handleToggle }) => {

   {
      if (todosList)
         return (
            <div className="">
               {todosList.map((todo) => (
                  <Todo todo={todo} handleToggle={handleToggle} />
               ))}
            </div>
         );
      return "Loading...";
   }
};

export default TodosList;
