import React from "react";

const TodosList = ({ todosList }) => {
   return <div className="">{todosList.map((todo) => todo)}</div>;
};
