import React from "react";
import Todo from "./todo";
import { useSelector } from "react-redux";

const TodosList = () => {
   const todosList = useSelector((state) => state.todos);

   return (
      <>
         {todosList.map((todo) => (
            <Todo key={todo.id} todo={todo} />
         ))}
      </>
   );
};

export default TodosList;

{
   todosList.map((todo) => {
      <Todo key={todo.id} todo={todo} />;
   });
}
