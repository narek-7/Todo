import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   text: "",
};

const inputTodoSlice = createSlice({
   name: "inputTodo",
   initialState,
   reducers: {
      updateInputText: (state) => {
         state.text = ""; // !why its not possible to use (state = "")
      },
      changeInputText: (state, action) => {
         state.text = action.payload;
      },
   },
});

export const { updateInputText, changeInputText } = inputTodoSlice.actions;

export default inputTodoSlice.reducer;
