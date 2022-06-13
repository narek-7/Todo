import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const inputTodoSlice = createSlice({
   name: "inputTodo",
   initialState,
   reducers: {
      updateInputText: () => {
         return ""; // !why its not possible to use (state = "")
      },
      changeInputText: (state, action) => {
         return action.payload;
      },
   },
});

export const { updateInputText, changeInputText } = inputTodoSlice.actions;

export default inputTodoSlice.reducer;
