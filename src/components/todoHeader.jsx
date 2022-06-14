import { updateInputText, changeInputText } from "../features/todos/inputTodoSlice";
import { addTodo } from "../features/todos/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const TodoHeader = () => {
   const dispatch = useDispatch();
   const inputText = useSelector((state) => state.inputTodo.text);

   return (
      <div className="box">
         <input
            type="text"
            value={inputText}
            placeholder="What need to be done?"
            onChange={(evt) => {
               dispatch(changeInputText(evt.target.value));
            }}
         />
         <button
            className="btn btn-outline-primary"
            onClick={() => {
               dispatch(addTodo(inputText));
               dispatch(updateInputText());
            }}
         >
            Add
         </button>
      </div>
   );
};

export default TodoHeader;