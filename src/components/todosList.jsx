import React from "react";
import Todo from "./todo";
import { useDispatch } from "react-redux";

const TodosList = ({ todosList, handleToggle, deleteTodo }) => {
   const dispatch = useDispatch();
    
   return (
      <>
         {todosList.map((todo) => (
            <Todo
               key={todo.id}
               todo={todo}
               handleToggle={handleToggle}
               deleteTodo={deleteTodo}
            />
         ))}
      </>
   );
};

export default TodosList;
