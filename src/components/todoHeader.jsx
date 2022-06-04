import React, { useState } from "react";
import { addTodo } from "../features/todos/todosSlice";
import { useDispatch } from "react-redux";

const TodoHeader = () => {
   const [text, setText] = useState("");
   const dispatch = useDispatch();

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
               dispatch(addTodo(text));
               setText("");
            }}
         >
            Add
         </button>
      </div>
   );
};

export default TodoHeader;
