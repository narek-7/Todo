import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/todosSlice";
import inputTodoReducer from "./features/todos/inputTodoSlice";

export const store = configureStore({
   reducer: {
      todos: todosReducer,
      inputTodo: inputTodoReducer,
   },
});
