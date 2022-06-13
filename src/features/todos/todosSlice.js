import { createSlice } from "@reduxjs/toolkit";
import { v1 } from "uuid";

const initialState = [
   { id: v1(), title: "Learn JS", completed: false },
   { id: v1(), title: "Learn React", completed: false },
   { id: v1(), title: "Learn React Redux", completed: false },
   { id: v1(), title: "Learn React Toolkit", completed: false },
   { id: v1(), title: "Learn Angular", completed: false },
   { id: v1(), title: "Learn NodeJS", completed: false },
   { id: v1(), title: "Learn ExpressJS", completed: false },
];

const todosSlice = createSlice({
   name: "todos",
   initialState,

   reducers: {
      addTodo: (state, action) => {
         if (action.payload.trim()) {
            state.push({
               id: v1(),
               title: action.payload,
               completed: false,
            });
         }
      },

      handleToggle: (state, action) => {
         state.forEach((todo) => {
            if (todo.id === action.payload) {
               todo.completed = !todo.completed;
            }
         });
      },
      deleteTodo: (state, action) => {
         return state.filter((todo) => {
            return todo.id !== action.payload;
         });
      },
      clearCompleted: (state) => {
         return state.filter((todo) => {
            return !todo.completed;
         });
      },
   },
});

export const { addTodo, handleToggle, deleteTodo, clearCompleted } = todosSlice.actions;

export default todosSlice.reducer;
