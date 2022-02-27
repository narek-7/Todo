import React from "react";
import Todo from "./todo";

const TodosList = ({ todosList, handleToggle, deleteTodo }) => {
   return (
      <>
         {todosList.map((todo) => (
            <Todo
               todo={todo}
               handleToggle={handleToggle}
               deleteTodo={deleteTodo}
               key={todo.id}
            />
         ))}
      </>
   );
};

export default TodosList;
