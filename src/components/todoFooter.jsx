import React from "react";

const TodoFooter = ({ todosList, clearCompleted }) => {
   return (
      <div className="box">
         <span>
            {`${todosList.filter((todo) => todo.completed).length} / ${todosList.length}`}
         </span>

         <button className="btn btn-outline-primary" onClick={clearCompleted}>
            Clear Completed
         </button>
      </div>
   );
};

export default TodoFooter;
