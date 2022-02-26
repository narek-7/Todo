import React from "react";

const Todo = ({ todo, handleToggle }) => {
   return (
      <div className="form-check" onClick={() => handleToggle(todo.id)}>
         <input
            className="form-check-input"
            type="checkbox"
            id={todo.id}
            name={todo.title}
            value={todo.title}
            checked={todo.completed}
         />
         <label className="form-check-label">{todo.title}</label>
      </div>
   );
};

export default Todo;
