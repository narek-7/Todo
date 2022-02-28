import React, { useState } from "react";

const TodoHeader = ({ addTodo }) => {
   const [text, setText] = useState("");

   // useEffect(() =>{

   // })

   return (
      <div className="box">
         <input
            type="text"
            value={text}
            placeholder="What need to be done?"
            onChange={(e) => {
               setText(e.target.value);
            }}
         />
         <button
            className="btn btn-outline-primary"
            onClick={() => {
               addTodo(text);
               setText("");
            }}
         >
            Add
         </button>
      </div>
   );
};

export default TodoHeader;
