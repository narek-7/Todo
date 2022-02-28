import React from "react";

const Todo = ({ todo, handleToggle, deleteTodo }) => {
   return (
      <div className="box shadow-sm p-1 mb-3 bg-body rounded">
         <div className="checkbox" onClick={() => handleToggle(todo.id)}>
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
         <span id="addTodo" className="btn" onClick={() => deleteTodo(todo.id)}>
            x
         </span>
      </div>
   );
};

export default Todo;
