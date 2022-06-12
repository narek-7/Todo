import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCompleted } from "../features/todos/todosSlice";

const TodoFooter = () => {
   const todosList = useSelector((state) => state.todos);
   const dispatch = useDispatch();

   return (
      <div className="box">
         <span>
            {`${todosList.filter((todo) => todo.completed).length} / ${todosList.length}`}
         </span>

         <button
            className="btn btn-outline-primary"
            onClick={() => dispatch(clearCompleted())}
         >
            Clear Completed
         </button>
      </div>
   );
};

export default TodoFooter;
