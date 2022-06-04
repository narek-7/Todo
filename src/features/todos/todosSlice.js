import { createSlice } from "@reduxjs/toolkit";
import { v1 } from "uuid";

const initialState = [
   { id: 1, title: "Learn JS", completed: false },
   { id: 2, title: "Learn React", completed: false },
   { id: 3, title: "Learn React Redux", completed: false },
   { id: 4, title: "Learn React Toolkit", completed: false },
   { id: 5, title: "Learn Angular", completed: false },
   { id: 6, title: "Learn NodeJS", completed: false },
   { id: 7, title: "Learn ExpressJS", completed: false },
];

const todosSlice = createSlice({
   name: "todos",
   initialState,

   reducers: {
      addTodo: (state, action) => {
         state.push({
            id: v1(),
            title: action.payload,
            completed: false,
         });
      },

      // handleToggle: (id) => {
      //    dispatch({
      //       type: "toggle",
      //       payload: { id: id },
      //    });
      // },
   },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
