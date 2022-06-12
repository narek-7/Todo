import React from "react";
import { handleToggle, deleteTodo } from "../features/todos/todosSlice";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
   const dispatch = useDispatch();

   return (
      <div className="box shadow-sm p-1 mb-3 bg-body rounded">
         <div className="checkbox" onClick={() => dispatch(handleToggle(todo.id))}>
            <input
               className="form-check-input"
               type="checkbox"
               id={todo.id}
               name={todo.title}
               value={todo.title}
               checked={todo.completed}
            />
            <label className="form-check-label ms-3">{todo.title}</label>
         </div>
         <button className="btn" onClick={() => dispatch(deleteTodo(todo.id))}>
            x
         </button>
      </div>
   );
};

export default Todo;
