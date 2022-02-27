import React, { useState } from "react";

const TodoHeader = ({ addTodo }) => {
   const [inputValue, setInputValue] = useState("");

   return (
      <div className="box">
         <input
            type="text"
            placeholder="What need to be done?"
            onChange={(evt) =>
               setInputValue((prevState) => (prevState = evt.target.value))
            }
            style={{ display: "inline-block" }}
         />
         <button
            className="btn btn-secondary"
            onClick={() => {
               addTodo(inputValue);
            }}
         >
            Add
         </button>
      </div>
   );
};

export default TodoHeader;
