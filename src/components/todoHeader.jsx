import React, { useState } from "react";

const TodoHeader = ({ addTodo }) => {
   const [text, setText] = useState("");

   return (
      <div className="box">
         <input
            type="text"
            value={text}
            placeholder="What need to be done?"
            onChange={(e) => setText(e.target.value)}
            style={{ display: "inline-block" }}
         />
         <button
            className="btn btn-outline-primary"
            onSubmit={(e) => {
               e.preventDefault();
               addTodo(text);
            }}
         >
            Add
         </button>
      </div>
   );
};

export default TodoHeader;
